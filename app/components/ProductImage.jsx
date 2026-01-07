import {useEffect, useRef, useState} from 'react';
import {Image} from '@shopify/hydrogen';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Thumbs, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ChevronLeft, ChevronRight} from 'lucide-react';

/**
 * @param {{
 *   images?: {node: {id: string, url: string, altText?: string, width?: number, height?: number}}[];
 *   mainImage?: ProductVariantFragment['image'];
 * }}
 */
export function ProductImage({images, mainImage}) {
  const galleryRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const gallery = images?.length
    ? images.map(({node}) => node)
    : mainImage
      ? [mainImage]
      : [];

  // 🔹 Inicializa PhotoSwipe solo en desktop
  useEffect(() => {
    if (!galleryRef.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  if (!gallery.length) {
    return <div className="product-image" />;
  }

  return (
    <>
      {/* 💻 Desktop gallery (PhotoSwipe) */}
      <div
        ref={galleryRef}
        className="product-gallery desktop-only"
      >
        {gallery.map((img, i) => (
          <a
            href={img.url}
            data-pswp-width={img.width || 1200}
            data-pswp-height={img.height || 1200}
            key={img.id || i}
            className="product-image"
          >
            <Image
              alt={img.altText || 'Product Image'}
              aspectRatio="1/1"
              data={img}
              sizes="(min-width: 45em) 50vw, 100vw"
            />
          </a>
        ))}
      </div>

      {/* 📱 Mobile Swiper with thumbnails */}
      <div className="product-gallery-slider mobile-only">
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs, Pagination, Navigation]}
          className="main-swiper"
          loop={true}
        >
          {gallery.map((img, i) => (
            <SwiperSlide key={img.id || i}>
              <Image
                alt={img.altText || 'Product Image'}
                aspectRatio="1/1"
                data={img}
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
              />
            </SwiperSlide>
          ))}

          {/* Contenedores para las flechas y paginación */}
          <div className="swiper-button-prev custom-arrow">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </div>
          <div className="swiper-button-next custom-arrow">
            <ChevronRight size={20} strokeWidth={2.5} />
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>

        {/* Thumbnails slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumbs-swiper"
        >
          {gallery.map((img, i) => (
            <SwiperSlide key={`thumb-${img.id || i}`}>
              <Image
                alt={img.altText || 'Thumbnail'}
                aspectRatio="1/1"
                data={img}
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}