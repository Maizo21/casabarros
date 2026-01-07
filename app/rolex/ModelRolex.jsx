import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DEFAULT_MODEL_CONTENT = {
  eyebrow: "Body24",
  title: "Headline50",
  subtitle: "Body20",
  highlight: "Body20",
  price: "Body20",
  ctas: [
    {label: "Tertiary - White", type: "phone"},
    {label: "Tertiary - White", type: "chat"},
    {label: "Tertiary - White", type: "mail"},
    {label: "Tertiary - White", type: "appointment"},
    {label: "Tertiary - White", type: "place"},
  ],
  image: {
    desktop: "/imgRolex/model-fake.webp",
    mobile: "/imgRolex/model-fake.webp",
    alt: "imagen",
  },
};

const DEFAULT_GALLERY_IMAGES = [];

/**
 * @param {{content?: typeof DEFAULT_MODEL_CONTENT, galleryImages?: typeof DEFAULT_GALLERY_IMAGES}}
 */
export default function ModelRolex({content = DEFAULT_MODEL_CONTENT, galleryImages = DEFAULT_GALLERY_IMAGES}) {
  const {eyebrow, title, subtitle, highlight, price, ctas = [], image} = content;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Filtrar imágenes de galería que tengan desktop y mobile
  const validGalleryImages = galleryImages.filter(img => img?.desktop && img?.mobile);

  // Para mobile: combinar imagen principal + galería
  const mobileCarouselImages = [
    {
      desktop: image?.desktop,
      mobile: image?.mobile,
      alt: image?.alt || "imagen principal"
    },
    ...validGalleryImages
  ];

  return (
    <section className="modelRolex">
      <div className="contentWrap">
        <div className="rolex-grid center">
          <div className="model-info rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-3">
            <h1 className="model-info-main">
              <div className="body24-bold">{eyebrow}</div>
              <div className="headline50">{title}</div>
              <div className="body20-light">{subtitle}</div>
              <div className="body20-light">{highlight}</div>
              <div className="price body20-light">{price}</div>
            </h1>
            <div className="model-info-btns">
              {ctas.map(({label, type}, idx) => (
                <button
                  key={`${type}-${idx}`}
                  className={`rolex-btn tertiary ${type ?? ""}`.trim()}
                >
                  <span className="icon-before"></span>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="model-image rolex-col-sm-6 rolex-col-md-5 rolex-col-lg-4">
            {/* Desktop: Imagen principal */}
            <picture className="model-image-desktop">
              <source
                media="(max-width: 767px)"
                srcSet={image?.mobile}
              />
              <source
                media="(min-width: 768px)"
                srcSet={image?.desktop}
              />
              <img
                src={image?.desktop}
                {...(image?.alt && { alt: image.alt })}
                className="bannerRolex-img"
                loading="lazy"
              />
            </picture>

            {/* Mobile: Carrusel con imagen principal + galería */}
            {mobileCarouselImages.length > 0 && (
              <div className="model-image-mobile">
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
                  className="model-gallery-swiper"
                >
                  {mobileCarouselImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <picture>
                        <source
                          media="(max-width: 767px)"
                          srcSet={index === 0 ? img.mobile : `/${img.mobile}`}
                        />
                        <source
                          media="(min-width: 768px)"
                          srcSet={index === 0 ? img.desktop : `/${img.desktop}`}
                        />
                        <img
                          src={index === 0 ? img.desktop : `/${img.desktop}`}
                          {...(img.alt && { alt: img.alt })}
                          className="bannerRolex-img"
                          loading="lazy"
                        />
                      </picture>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button ref={prevRef} className="swiper-button-custom prev">
                  <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12,7.5l-1.3,1.4L4.6,15l-1.5-1.5l6.1-6.1L3,1.4L4.5,0l6.1,6.1L12,7.5z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <button ref={nextRef} className="swiper-button-custom next">
                  <svg viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12,7.5l-1.3,1.4L4.6,15l-1.5-1.5l6.1-6.1L3,1.4L4.5,0l6.1,6.1L12,7.5z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
