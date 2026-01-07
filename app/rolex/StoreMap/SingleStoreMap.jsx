import React, {useEffect, useRef, useState} from 'react';
import mapStyles from './mapStyles';

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

/**
 * Determina si la tienda está abierta en este momento
 */
function getStoreStatus(schedules) {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Tiempo en minutos desde medianoche

  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayName = dayNames[dayOfWeek];
  const todaySchedule = schedules[dayName];

  if (!todaySchedule || todaySchedule === 'Cerrado') {
    return {
      isOpen: false,
      statusText: 'Cerrado',
      schedule: todaySchedule || 'Cerrado',
    };
  }

  // Parsear el horario (ejemplo: "10:00 - 19:30")
  const timeMatch = todaySchedule.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);

  if (!timeMatch) {
    return {
      isOpen: false,
      statusText: 'Cerrado',
      schedule: todaySchedule,
    };
  }

  const openHour = parseInt(timeMatch[1]);
  const openMinute = parseInt(timeMatch[2]);
  const closeHour = parseInt(timeMatch[3]);
  const closeMinute = parseInt(timeMatch[4]);

  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;

  const isOpen = currentTime >= openTime && currentTime < closeTime;

  return {
    isOpen,
    statusText: isOpen ? 'Abierto hoy' : 'Cerrado',
    schedule: todaySchedule,
  };
}

export default function SingleStoreMap({location}) {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(null);
  const [horariosVisible, setHorariosVisible] = useState(false);

  // Obtener el estado actual de la tienda
  const storeStatus = getStoreStatus(location.schedules);

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
          center: location.coordinates,
          zoom: 16,
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
          },
          gestureHandling: 'greedy',
        });

        // Marcador único
        new google.maps.Marker({
          position: location.coordinates,
          map: mapInstance,
          icon: {
            url: '/imgRolex/assets/map-location-pin-selected-green-button.svg',
            scaledSize: new google.maps.Size(40, 40),
          },
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
  }, [location]);

  return (
    <div className="rolexMapSection rolexSingleStoreSection">
      <div className="storeCols">
        {/* COLUMNA DEL MAPA */}
        <div className="col1">
          <div
            className="singleMapContainer"
            style={{position: 'relative', width: '100%', height: '600px'}}
          >
            {mapError ? (
              <div
                style={{
                  padding: '16px',
                  color: 'red',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 1000,
                  background: 'white',
                }}
              >
                {mapError}
              </div>
            ) : null}

            <div
              ref={mapRef}
              style={{
                width: '100%',
                height: '100%',
                background: '#e5e3df',
              }}
            />
          </div>
        </div>

        {/* COLUMNA DE INFORMACIÓN */}
        <div className="col2">
          <div className="singleStoreInfo">

            {/* Eyebrow */}
            <p className="storeLegend legend20-bold">
              {location.eyebrow}
            </p>

            {/* Store Name */}
            <h2 className="storeHeadline headline30">
              {location.storeName}
            </h2>

            {/* Dirección */}
            <div className="storeAddress fixed16">
              <p>{location.address.street}</p>
              <p>{location.address.store}</p>
              <p>{location.address.city}</p>
              <p>{location.address.country}</p>
            </div>

            {/* Horarios */}
            <div className="storeSchedules fixed16">
              <p
                className="fixed16 today"
                onClick={() => setHorariosVisible(!horariosVisible)}
                style={{cursor: 'pointer'}}
              >
                <span className="isopen">{storeStatus.statusText}</span>{' '}
                <span
                  className="horario"
                  style={{color: storeStatus.isOpen ? 'var(--green)' : 'var(--red)'}}
                >
                  {storeStatus.schedule}
                </span>{' '}
                <span
                  className="dropdown"
                  style={{
                    display: 'inline-block',
                    transform: horariosVisible ? 'rotate(0deg)' : 'rotate(180deg)',
                    transition: 'transform 0.3s ease',
                  }}
                ></span>
              </p>
              <div
                className="horariosDrop"
                style={{display: horariosVisible ? 'block' : 'none'}}
              >
                <p className="fixed16"><span className="day">Lunes:</span> {location.schedules.monday}</p>
                <p className="fixed16"><span className="day">Martes:</span> {location.schedules.tuesday}</p>
                <p className="fixed16"><span className="day">Miércoles:</span> {location.schedules.wednesday}</p>
                <p className="fixed16"><span className="day">Jueves:</span> {location.schedules.thursday}</p>
                <p className="fixed16"><span className="day">Viernes:</span> {location.schedules.friday}</p>
                <p className="fixed16"><span className="day">Sábado:</span> {location.schedules.saturday}</p>
                <p className="fixed16"><span className="day">Domingo:</span> {location.schedules.sunday}</p>
              </div>
            </div>

            {/* Botones de contacto */}
            <div className="contactButtons">
              {/* Teléfono */}
              <a
                href={`tel:${location.contact.phone}`}
                className="rolex-btn tertiary phone"
                aria-label="Llamar"
              >
                <span className="icon-before"></span>
                <span className="buttonText">Teléfono</span>
              </a>

              {/* Google Maps */}
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

              {/* WhatsApp */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
