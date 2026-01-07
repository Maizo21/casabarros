import React, { useEffect, useState } from "react";

/**
 * Componente de banner doble con color dinámico (desktop / mobile)
 * @param {{
 *   items: {
 *     imageDesktop: string;
 *     imageMobile: string;
 *     title: string;
 *     cta: string;
 *     link?: string;
 *     color?: string;
 *     colorDesktop?: string;
 *     colorMobile?: string;
 *   }[];
 * }}
 */
export default function BannerDoble({ items = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta el ancho del viewport una vez en el cliente
  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (!items.length) return null;

  return (
    <div className="banner-doble">
      {items.map((item, index) => {
        // ✅ Define color dinámico
        const color =
          (isMobile && item.colorMobile) ||
          (!isMobile && item.colorDesktop) ||
          item.color ||
          "#000";

        return (
          <div key={index} className="item">
            {item.link ? (
              <a href={item.link}>
                <div className="itemWrap">
                  <div className="image">
                    <picture>
                      {/* Mobile */}
                      <source
                        media="(max-width: 768px)"
                        srcSet={item.imageMobile}
                      />
                      {/* Desktop */}
                      <img
                        src={item.imageDesktop}
                        alt={item.title}
                        className="item-image"
                        loading="lazy"
                      />
                    </picture>
                  </div>

                  <div className="item-caption">
                    <h2 style={{ color }}>{item.title}</h2>
                    {item.cta && (
                      <span className="cta" style={{ color }}>
                        {item.cta}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ) : (
              <div className="itemWrap">
                <div className="image">
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={item.imageMobile}
                    />
                    <img
                      src={item.imageDesktop}
                      alt={item.title}
                      className="item-image"
                      loading="lazy"
                    />
                  </picture>
                </div>

                <div className="item-caption">
                  <h2 style={{ color }}>{item.title}</h2>
                  {item.cta && (
                    <span className="cta" style={{ color }}>
                      {item.cta}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}