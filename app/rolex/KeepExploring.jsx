import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DEFAULT_KEEP_EXPLORING_ITEMS = [
  {
    title: "Descubra Rolex",
    desktop: "imgRolex/keep/rolex-keep-exploring-discover-rolex-shoot_shop_geneva_retail_campaign_logo_pub-2-iso_01-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-discover-rolex-shoot_shop_geneva_retail_campaign_logo_pub-2-iso_01_landscape.jpg",
    alt: "",
    link: "/rolex/discover",
  },
  {
    title: "Rolejes Rolex",
    desktop: "imgRolex/keep/rolex-keep-exploring-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-landscape.jpg",
    alt: "",
    link: "/rolex/watches",
  },
  {
    title: "Nuevos Modelos 2025",
    desktop: "imgRolex/keep/rolex-keep-exploring-new-watches-2025_m127334-0001_2501fj_003-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-new-watches-2025_m127334-0001_2501fj_003-landscape.jpg",
    alt: "",
    link: "/rolex/new-watches",
  },
  {
    title: "Accesorios Rolex",
    desktop: "imgRolex/keep/rolex-keep-exploring-rolex-accessories-rolexcufflinks_2403jva_001-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-rolex-accessories-rolexcufflinks_2403jva_001-landscape.jpg",
    alt: "",
    link: "/rolex/accessories",
  },
  {
    title: "«Savoir-faire» relojero de Rolex",
    desktop: "imgRolex/keep/rolex-keep-exploring-watchmaking-2023 watchmaking features manifesto still_digital_master_rgb-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-watchmaking-2023 watchmaking features manifesto still_digital_master_rgb-landscape.jpg",
    alt: "",
    link: "/rolex/watchmaking",
  },
  {
    title: "Asistencia Rolex",
    desktop: "imgRolex/keep/rolex-keep-exploring-servicing-2234_rolex-sav_retailers_176_controle-final_mise_heure_v2-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-servicing-2234_rolex-sav_retailers_176_controle-final_mise_heure_v2-landscape.jpg",
    alt: "",
    link: "/rolex/service",
  },
  {
    title: "Rolex en Casa Barros",
    desktop: "imgRolex/keep/68b9aa7faa42468b9aa74bcb65_boutiquerolex12-min.webp",
    mobile: "imgRolex/keep/68b9aa7faa42468b9aa74bcb65_boutiquerolex12-min.webp",
    alt: "",
    link: "/rolex/rolex-at-casa-barros",
  },
  {
    title: "El mundo de Rolex",
    desktop: "imgRolex/keep/rolex-keep-exploring-hub-world-of-rolex-jb1_2564_070525_portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-hub-world-of-rolex-jb1_2564_070525_landscape.jpg",
    alt: "",
    link: "/rolex/world-of-rolex",
  },
  {
    title: "Contáctenos",
    desktop: "imgRolex/keep/rolex-keep-exploring-contact-us-A7404109-portrait.jpg",
    mobile: "imgRolex/keep/rolex-keep-exploring-contact-us-A7404109-landscape.jpg",
    alt: "",
    link: "/rolex/contact-us",
  },
];

/**
 * @param {{items?: typeof DEFAULT_KEEP_EXPLORING_ITEMS; heading?: string}}
 */
export default function KeepExploring({
  items = DEFAULT_KEEP_EXPLORING_ITEMS,
  heading = "Explora más",
}) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="keepExploring">
      <div className="contentWrap">
        <h3 className="headline36">{heading}</h3>

        {/* Contenedor externo que envuelve Swiper y botones */}
        <div className="rolex-swiper-wrap">
          {/* Botones fuera del Swiper */}
          <button ref={prevRef} className="swiper-button-custom prev">
            <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
              <path
                className="st0"
                d="M12,7.5l-1.3,1.4L4.6,15l-1.5-1.5l6.1-6.1L3,1.4L4.5,0l6.1,6.1L12,7.5z"
                fill="currentColor"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={7}
            slidesPerView={2}
            slidesPerGroup={2}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 8,
              },
            }}
            className="rolex-swiper"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  href={item.link}
                  className="rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-3 rolex-slide-item"
                >
                  <img
                    src={`/${item.desktop}`}
                    srcSet={`/${item.mobile} 600w, /${item.desktop} 1200w`}
                    sizes="(max-width: 767px) 100vw, 33vw"
                    {...(item.alt && { alt: item.alt })}
                    className="rolex-item-image"
                    loading="lazy"
                  />
                  <h4 className="body20-bold">{item.title}</h4>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <button ref={nextRef} className="swiper-button-custom next">
            <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
              <path
                className="st0"
                d="M12,7.5l-1.3,1.4L4.6,15l-1.5-1.5l6.1-6.1L3,1.4L4.5,0l6.1,6.1L12,7.5z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
