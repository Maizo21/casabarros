import React, {useState, useCallback, useEffect} from "react";

const DEFAULT_GALLERY_ITEMS = [
  {
    desktop: "imgRolex/keep/rolex-keep-exploring-discover-rolex-shoot_shop_geneva_retail_campaign_logo_pub-2-iso_01-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-discover-rolex-shoot_shop_geneva_retail_campaign_logo_pub-2-iso_01_landscape.jpg",
    alt: "",
  },
  {
    desktop: "imgRolex/keep/rolex-keep-exploring-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-landscape.jpg",
    alt: "",
  },
  {
    desktop: "imgRolex/keep/rolex-keep-exploring-new-watches-2025_m127334-0001_2501fj_003-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-new-watches-2025_m127334-0001_2501fj_003-landscape.jpg",
    alt: "",
  },
  {
    desktop: "imgRolex/keep/rolex-keep-exploring-rolex-accessories-rolexcufflinks_2403jva_001-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-rolex-accessories-rolexcufflinks_2403jva_001-landscape.jpg",
    alt: "",
  },
];

/**
 * @param {{items?: typeof DEFAULT_GALLERY_ITEMS}}
 */
export default function ModelWatchGallery({items = DEFAULT_GALLERY_ITEMS}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % items.length);
  }, [items.length, lightboxIndex]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length, lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <>
      <section className="modelWatchGallery">
        <div className="contentWrap">
          <div className="rolex-grid">
            {items.map((item, index) => (
              <button
                type="button"
                key={index}
                className="item rolex-col-sm-6 rolex-col-md-3 rolex-col-lg-3 gallery-thumb"
                onClick={() => setLightboxIndex(index)}
              >
                <picture>
                  <source media="(max-width: 767px)" srcSet={`/${item.mobile}`} />
                  <source media="(min-width: 768px)" srcSet={`/${item.desktop}`} />
                  <img
                    src={`/${item.desktop}`}
                    {...(item.alt && { alt: item.alt })}
                    className="bannerRolex-img"
                    loading="lazy"
                  />
                </picture>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="modelGallery-lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">×</button>
          <button className="lightbox-arrow prev" onClick={showPrev} aria-label="Anterior">‹</button>
          <div className="lightbox-image">
            <img
              key={lightboxIndex}
              src={`/${items[lightboxIndex].desktop}`}
              {...(items[lightboxIndex].alt && { alt: items[lightboxIndex].alt })}
              className="lightbox-img"
              loading="lazy"
            />
          </div>
          <button className="lightbox-arrow next" onClick={showNext} aria-label="Siguiente">›</button>
          <div className="lightbox-dots">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === lightboxIndex ? "active" : ""}`}
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
