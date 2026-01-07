import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DEFAULT_BANNER_ITEMS = [
  {
    epigrafe: "Colección Rolex",
    titulo: "Oyster Perpetual",
    boton: "Descubrir más",
    link: "/rolex/collections/oyster-perpetual",
    desktop: "img/banners/banner1.webp",
    mobile: "img/banners/banner1-mob.webp",
    alt: "",
    style: "light",
  },
  {
    epigrafe: "Nuevos Modelos 2025",
    titulo: "Datejust 41",
    boton: "Ver detalles",
    link: "/rolex/collections/datejust-41",
    desktop: "img/banners/banner1.webp",
    mobile: "img/banners/banner1-mob.webp",
    alt: "",
    style: "dark",
  },
];

/**
 * @param {{items?: typeof DEFAULT_BANNER_ITEMS, className?: string}}
 */
export default function BannerRolex({items = DEFAULT_BANNER_ITEMS, className = ''}) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Si solo hay 1 slide → sin Swiper
  if (items.length === 1) {
    const item = items[0];
    const ImageContent = (
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`/${item.mobile}`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`/${item.desktop}`}
        />
        <img
          src={`/${item.desktop}`}
          {...(item.alt && { alt: item.alt })}
          className="bannerRolex-img"
          loading="lazy"
        />
      </picture>
    );

    return (
      <div className={`bannerRolex single${className ? ` ${className}` : ''}`} type={item.style}>
        {!item.boton && item.link ? (
          <a href={item.link}>
            {ImageContent}
          </a>
        ) : (
          ImageContent
        )}
        <div className="bannerRolex-content rolex-grid" style={{pointerEvents: !item.boton && item.link ? 'none' : 'auto'}}>
          <div className="rolex-col-sm-6 rolex-col-md-5 rolex-col-lg-5">
            {item.epigrafe && <p className="headline26" dangerouslySetInnerHTML={{__html: item.epigrafe}} />}
            {item.titulo && <h3 className="headline70" dangerouslySetInnerHTML={{__html: item.titulo}} />}
            {item.boton && item.link && (
              <a href={item.link} className="rolex-btn primary">
                {item.boton}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Si hay más de 1 → usa Swiper
  return (
    <div className={`bannerRolex${className ? ` ${className}` : ''}`}>
      <div className="bannerRolex-wrap">
        <button ref={prevRef} className="swiper-button-custom prev">
          <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12,7.5l-1.3,1.4L4.6,15l-1.5-1.5l6.1-6.1L3,1.4L4.5,0l6.1,6.1L12,7.5z"
              fill="currentColor"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="bannerRolex-swiper"
        >
          {items.map((item, index) => {
            const ImageContent = (
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={`/${item.mobile}`}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`/${item.desktop}`}
                />
                <img
                  src={`/${item.desktop}`}
                  {...(item.alt && { alt: item.alt })}
                  className="bannerRolex-img"
                  loading="lazy"
                />
              </picture>
            );

            return (
              <SwiperSlide key={index}>
                <div className="slide" type={item.style}>
                  {!item.boton && item.link ? (
                    <a href={item.link}>
                      {ImageContent}
                    </a>
                  ) : (
                    ImageContent
                  )}
                  <div className="bannerRolex-content rolex-grid" style={{pointerEvents: !item.boton && item.link ? 'none' : 'auto'}}>
                    <div className="rolex-col-sm-6 rolex-col-md-5 rolex-col-lg-5">
                      {item.epigrafe && <p className="headline26" dangerouslySetInnerHTML={{__html: item.epigrafe}} />}
                      {item.titulo && <h3 className="headline70" dangerouslySetInnerHTML={{__html: item.titulo}} />}
                      {item.boton && item.link && (
                        <a href={item.link} className="rolex-btn primary">
                          {item.boton}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button ref={nextRef} className="swiper-button-custom next">
          <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12,7.5l-1.3,1.4L4.6,15l-1.5-1.5l6.1-6.1L3,1.4L4.5,0l6.1,6.1L12,7.5z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
