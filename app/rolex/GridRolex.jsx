import React from "react";

const DEFAULT_GRID = {
  title: "Headline36",
  items: [
    {
      colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
      eyebrow: "fixed16",
      heading: "Body24",
      link: "",
    },
    {
      colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
      eyebrow: "fixed16",
      heading: "Body24",
      link: "",
    },
    {
      colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
      eyebrow: "fixed16",
      heading: "Body24",
      link: "",
    },
    {
      colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
      eyebrow: "fixed16",
      heading: "Body24",
      link: "",
    },
  ],
};

/**
 * @param {{grid?: typeof DEFAULT_GRID}}
 */
export default function GridRolex({grid = DEFAULT_GRID}) {
  return (
    <div className="pushRolex pushRolexGrid">
      <div className="contentWrap">
        <h2 className="headline36 main">{grid.title}</h2>
        <div className="rolex-grid">
          {grid.items.map((item, idx) => {
            const content = (
              <>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={item.image.mobile}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={item.image.desktop}
                  />
                  <img
                    src={item.image.desktop}
                    {...(item.image.alt && { alt: item.image.alt })}
                    className="bannerRolex-img"
                    loading="lazy"
                  />
                </picture>
                <h4 className="fixed14">{item.eyebrow}</h4>
                <h2 className="body24-bold">{item.heading}</h2>
              </>
            );

            return (
              <div className={item.colClass} key={`grid-${idx}`}>
                {item.link ? (
                  <a href={item.link} className="grid-item-link">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
