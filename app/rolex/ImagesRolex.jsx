import React from "react";

const DEFAULT_IMAGE_BLOCKS = [
  {
    contentWrapClass: "contentWrap full",
    colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
    className: "",
    image: {
      desktop: "/img/banners/banner2.jpg",
      mobile: "/img/banners/banner2-mob.png",
      alt: "imagen",
    },
  },
  {
    contentWrapClass: "contentWrap",
    colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
    image: {
      desktop: "/img/banners/banner2.jpg",
      mobile: "/img/banners/banner2-mob.png",
      alt: "imagen",
    },
  },
  {
    contentWrapClass: "contentWrap",
    colClass: "rolex-col-sm-6 rolex-col-md-10 rolex-col-lg-10",
    image: {
      desktop: "/img/banners/banner2.jpg",
      mobile: "/img/banners/banner2-mob.png",
      alt: "imagen",
    },
  },
  {
    contentWrapClass: "contentWrap",
    colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    image: {
      desktop: "/img/banners/banner2.jpg",
      mobile: "/img/banners/banner2-mob.png",
      alt: "imagen",
    },
  },
];

/**
 * @param {{blocks?: typeof DEFAULT_IMAGE_BLOCKS}}
 */
export default function ImagesRolex({blocks = DEFAULT_IMAGE_BLOCKS}) {
  return (
    <>
      {blocks.map((block, idx) => (
        <div className={`imagesRolex${block.className ? ` ${block.className}` : ''}`} key={`image-block-${idx}`}>
          <div className={block.contentWrapClass}>
            <div className="rolex-grid center">
              <div className={block.colClass}>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={block.image.mobile}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={block.image.desktop}
                  />
                  <img
                    src={block.image.desktop}
                    {...(block.image.alt && { alt: block.image.alt })}
                    className="bannerRolex-img"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
