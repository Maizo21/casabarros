import React, {useEffect, useRef, useState} from 'react';
import mapStyles from './mapStyles';
import locations from './locations';

/**
 * Carga el script de Google Maps si aún no existe.
 * Devuelve una Promise que se resuelve cuando window.google.maps está listo.
 */
function loadGoogleMaps(apiKey) {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('window not available'));
      return;
    }

    if (!apiKey || apiKey.includes('YOUR_GOOGLE_MAPS_API_KEY_HERE')) {
      reject(new Error('Google Maps API key missing or placeholder'));
      return;
    }

    // Si ya está cargado, resolver de inmediato
    if (window.google && window.google.maps) {
      resolve(window.google);
      return;
    }

    const scriptId = 'google-maps-js';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
        apiKey,
      )}&v=weekly`;
      script.async = true;
      script.defer = true;
      script.setAttribute('loading', 'async');

      const handleLoad = () => {
        if (window.google && window.google.maps) {
          resolve(window.google);
        } else {
          reject(
            new Error(
              'Google Maps script loaded but window.google.maps no está disponible',
            ),
          );
        }
      };

      script.onload = handleLoad;

      script.onerror = () => {
        reject(new Error('Google Maps script failed to load'));
      };

      document.head.appendChild(script);
    } else {
      // Si ya existe el script, esperamos a que termine de cargar
      script.onload = () => {
        if (window.google && window.google.maps) {
          resolve(window.google);
        } else {
          reject(
            new Error(
              'Google Maps script loaded but window.google.maps no está disponible',
            ),
          );
        }
      };
    }
  });
}

export default function MapClient() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [activeLocation, setActiveLocation] = useState(null);
  const [mapError, setMapError] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map' o 'list'

  useEffect(() => {
    let isCancelled = false;

    async function init() {
      try {
        if (typeof window === 'undefined') return;

        const apiKey = window.ENV?.GOOGLE_MAPS_KEY;
        if (!apiKey) {
          setMapError('Google Maps API Key missing');
          return;
        }

        if (apiKey.includes('YOUR_GOOGLE_MAPS_API_KEY_HERE')) {
          setMapError('Google Maps API Key placeholder detected');
          return;
        }

        const google = await loadGoogleMaps(apiKey);
        if (isCancelled) return;
        if (!mapRef.current) return;

        const mapInstance = new google.maps.Map(mapRef.current, {
          center: {lat: -33.399484, lng: -70.571159}, // Santiago -33.399484, -70.571159
          zoom: 13,
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
          },
          gestureHandling: 'greedy',
        });

        setMap(mapInstance);

        // Marcadores
        locations.forEach((loc) => {
          const marker = new google.maps.Marker({
            position: loc.coordinates,
            map: mapInstance,
            icon: {
              url: '/imgRolex/assets/map-location-pin-green-button.svg',
              scaledSize: new google.maps.Size(40, 40),
            },
          });

          marker.addListener('click', () => {
            mapInstance.setZoom(16);
            setActiveLocation(loc);

            // Detectar si es mobile (menos de 768px)
            const isMobile = window.innerWidth < 768;

            mapInstance.panTo({
              lat: isMobile ? loc.coordinates.lat - 0.0025 : loc.coordinates.lat,
              lng: isMobile ? loc.coordinates.lng : loc.coordinates.lng - 0.005,
            });
          });
        });
      } catch (error) {
        if (!isCancelled) {
          const errorMsg = error.message || 'Error inicializando Google Maps';
          setMapError(errorMsg);
          console.error('Error inicializando Google Maps:', error);
          console.error('API Key disponible:', !!window.ENV?.GOOGLE_MAPS_KEY);
          console.error('MapRef disponible:', !!mapRef.current);
        }
      }
    }

    init();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="contentWrap rolexMapSection">
      <div className="rolex-grid">
        <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12">
          {/* NAVEGACIÓN MAPA/LISTA */}
          <div className="viewModeToggle">
            <button
              onClick={() => setViewMode('map')}
              className={`viewModeBtn fixed16 ${viewMode === 'map' ? 'active' : ''}`}
            >
              Mapa
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`viewModeBtn fixed16 ${viewMode === 'list' ? 'active' : ''}`}
            >
              Lista
            </button>
          </div>

          <div className="mapContainer" style={{display: viewMode === 'map' ? 'flex' : 'none', width: '100%', position: 'relative'}}>
            {mapError ? (
              <div style={{padding: '16px', color: 'red', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000, background: 'white'}}>
                {mapError}
              </div>
            ) : null}

            {/* PANEL LATERAL */}
              <div
                className={`storeInfo ${activeLocation ? 'visible' : 'hidden'}`}
              >
                {activeLocation && (
                  <>
                    <div className="storeImage">
                      <img src={activeLocation.image} alt={activeLocation.storeName} />
                    </div>
                    <div className="storeDetails">
                      <button
                        onClick={() => {
                          setActiveLocation(null);
                          if (map) {
                            map.setZoom(13);
                            map.panTo({lat: -33.399484, lng: -70.571159});
                          }
                        }}
                        className="closeButton"
                        aria-label="Cerrar"
                      >
                        ✕
                      </button>

                      {/* Eyebrow - Legend16 */}
                      <p className="storeLegend legend20-bold">{activeLocation.eyebrow}</p>

                      {/* Store Name - Headline30 */}
                      <h2 className="storeHeadline headline30">{activeLocation.storeName}</h2>

                      {/* Dirección */}
                      <div className="storeAddress fixed16">
                        <p className="fixed16">{activeLocation.address.street}</p>
                        <p className="fixed16">{activeLocation.address.store}</p>
                        <p className="fixed16">{activeLocation.address.city}</p>
                        <p className="fixed16">{activeLocation.address.country}</p>
                      </div>

                      {/* Horarios */}
                      {/* <div className="storeSchedules fixed16">
                        <h3 className="scheduleHeadline headline20">Horarios</h3>
                        <p className="fixed16">Lunes: {activeLocation.schedules.monday}</p>
                        <p className="fixed16">Lunes: {activeLocation.schedules.monday}</p>
                        <p className="fixed16">Martes: {activeLocation.schedules.tuesday}</p>
                        <p className="fixed16">Miércoles: {activeLocation.schedules.wednesday}</p>
                        <p className="fixed16">Jueves: {activeLocation.schedules.thursday}</p>
                        <p className="fixed16">Viernes: {activeLocation.schedules.friday}</p>
                        <p className="fixed16">Sábado: {activeLocation.schedules.saturday}</p>
                        <p className="fixed16">Domingo: {activeLocation.schedules.sunday}</p>
                      </div> */}

                      {/* Botones de contacto */}
                      <div className="contactButtons">
                        {/* Teléfono */}
                        <a
                          href={`tel:${activeLocation.contact.phone}`}
                          className="rolex-btn tertiary phone"
                          aria-label="Llamar"
                        >
                          <span className="icon-before"></span>
                          <span className="buttonText">Teléfono</span>
                        </a>

                        {/* Email */}
                        {/* <a
                          href={`mailto:${activeLocation.contact.email}`}
                          className="rolex-btn tertiary mail"
                          aria-label="Enviar email"
                        >
                          <span className="icon-before"></span>
                          <span className="buttonText">Email</span>
                        </a> */}

                        {/* Google Maps */}
                        <a
                          href={activeLocation.contact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rolex-btn tertiary direction"
                          aria-label="Abrir en Google Maps"
                        >
                          <span className="icon-before"></span>
                          <span className="buttonText">Conseguir Dirección</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/${activeLocation.contact.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rolex-btn tertiary whatsapp"
                          aria-label="Contactar por WhatsApp"
                        >
                          <span className="icon-before"></span>
                          <span className="buttonText">WhatsApp</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                          href={`${activeLocation.storeUrl}`}
                          // target="_blank"
                          rel="noopener noreferrer"
                          className="rolex-btn tertiary plus"
                          aria-label="Contactar por WhatsApp"
                        >
                          <span className="icon-before"></span>
                          <span className="buttonText">Más información</span>
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* MAPA */}
            <div
              ref={mapRef}
              style={{
                flexGrow: 1,
                height: '100%',
                minHeight: '600px',
                background: '#e5e3df',
              }}
            />
          </div>

          {/* LISTADO DE TIENDAS */}
          <div className="storesListContainer" style={{display: viewMode === 'list' ? 'block' : 'none'}}>
            <div className="storesList rolex-grid">
              {locations.map((location) => (
                <div key={location.id} className="storeListItem rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-3">
                  <p className="storeLegend legend20-bold">{location.eyebrow}</p>
                  <h3 className="storeHeadline headline30">{location.storeName}</h3>
                  <div className="storeAddress fixed16">
                    <p>{location.address.street}</p>
                    <p>{location.address.store}</p>
                    <p>{location.address.city}</p>
                    <p>{location.address.country}</p>
                  </div>
                  <div className="storeListActions">
                    <a
                      href={`tel:${location.contact.phone}`}
                      className="rolex-btn tertiary phone"
                      aria-label="Llamar"
                    >
                      <span className="icon-before"></span>
                      <span className="buttonText">Teléfono</span>
                    </a>
                    <a
                      href={location.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rolex-btn tertiary direction"
                      aria-label="Abrir en Google Maps"
                    >
                      <span className="icon-before"></span>
                      <span className="buttonText">Conseguir Dirección</span>
                    </a>
                    <a
                      href={`https://wa.me/${location.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rolex-btn tertiary whatsapp"
                      aria-label="Contactar por WhatsApp"
                    >
                      <span className="icon-before"></span>
                      <span className="buttonText">WhatsApp</span>
                    </a>
                    <a
                      href={location.storeUrl}
                      // target="_blank"
                      rel="noopener noreferrer"
                      className="rolex-btn tertiary plus"
                      aria-label="Más información"
                    >
                      <span className="icon-before"></span>
                      <span className="buttonText">Más información</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
