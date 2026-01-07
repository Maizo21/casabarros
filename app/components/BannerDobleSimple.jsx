import React from "react";

/**
 * Componente de banner doble tipo "Anillos / Novios" con imágenes responsive
 * @param {{
 *   items: {
 *     image?: string;
 *     imageDesktop?: string;
 *     imageMobile?: string;
 *     title: string;
 *     cta: string;
 *     link: string;
 *   }[];
 * }}
 */
export default function BannerDobleSimple({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="banner-doble-simple">
      <div className="contentWrap">
        <div className="banner-doble-simple-items">
          {items.map((item, index) => (
            <div key={index} className="banner-item">
              <a href={item.link} className="banner-link">
                <picture>
                  {/* 👇 Mobile */}
                  {item.imageMobile && (
                    <source
                      media="(max-width: 768px)"
                      srcSet={item.imageMobile}
                    />
                  )}
                  {/* 👇 Desktop */}
                  <img
                    src={item.imageDesktop || item.image}
                    alt={item.title}
                    className="banner-image"
                    loading="lazy"
                  />
                </picture>
              </a>

              <div className="banner-text">
                <h3>{item.title}</h3>
                <a href={item.link} className="banner-cta">
                  {item.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}