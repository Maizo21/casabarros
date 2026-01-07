import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

/**
 * @param {{
 *   slides: {
 *     id: string | number;
 *     link: string;
 *     imageDesktop: string;
 *     imageMobile: string;
 *     title?: string;
 *     cta?: string;
 *   }[];
 * }}
 */
export function Slider({ slides = [] }) {
  if (!slides.length) return null;

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="home-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a href={slide.link}>
              <picture>
                {/* 👇 versión mobile (menor o igual a 768px) */}
                <source
                  media="(max-width: 768px)"
                  srcSet={slide.imageMobile}
                />
                {/* 👇 versión desktop (por defecto) */}
                <img
                  src={slide.imageDesktop}
                  alt={slide.title}
                  className="slide-image"
                  loading="lazy"
                />
              </picture>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}