import React from "react";

const DEFAULT_PUSH_SECTIONS = [
  {
    title: "Headline36",
    items: [
      {
        colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
        image: {
          desktop: "/imgRolex/banners/banner2.jpg",
          mobile: "/img/banners/banner2-mob.png",
          alt: "imagen",
        },
        eyebrow: "fixed16",
        heading: "Headline36",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
        cta: {label: "Secondary CTA", href: "#"},
      },
    ],
  },
  {
    title: "Headline36",
    items: [
      {
        colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
        image: {
          desktop: "/img/banners/banner2.jpg",
          mobile: "/img/banners/banner2-mob.png",
          alt: "imagen",
        },
        eyebrow: "fixed16",
        heading: "Headline36",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
        cta: {label: "Secondary CTA", href: "#"},
      },
      {
        colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
        image: {
          desktop: "/img/banners/banner2.jpg",
          mobile: "/img/banners/banner2-mob.png",
          alt: "imagen",
        },
        eyebrow: "fixed16",
        heading: "Headline36",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
        cta: {label: "Secondary CTA", href: "#"},
      },
    ],
  },
  {
    title: "Headline36",
    items: [
      {
        colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/img/banners/banner2.jpg",
          mobile: "/img/banners/banner2-mob.png",
          alt: "imagen",
        },
        eyebrow: "fixed16",
        heading: "Headline36",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
        cta: {label: "Secondary CTA", href: "#"},
      },
      {
        colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/img/banners/banner2.jpg",
          mobile: "/img/banners/banner2-mob.png",
          alt: "imagen",
        },
        eyebrow: "fixed16",
        heading: "Headline36",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
        cta: {label: "Secondary CTA", href: "#"},
      },
      {
        colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/img/banners/banner2.jpg",
          mobile: "/img/banners/banner2-mob.png",
          alt: "imagen",
        },
        eyebrow: "fixed16",
        heading: "Headline36",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
        cta: {label: "Secondary CTA", href: "#"},
      },
    ],
  },
];

/**
 * @param {{sections?: typeof DEFAULT_PUSH_SECTIONS, className?: string}}
 */
export default function PushRolex({sections = DEFAULT_PUSH_SECTIONS, className = ''}) {
  return (
    <>
      {sections.map((section, idx) => (
        <div
          className={`pushRolex${className ? ` ${className}` : ''}`}
          key={`section-${idx}`}
        >
          <div className="contentWrap">
            <h2 className="headline36 main">{section.title}</h2>
            <div className="rolex-grid">
              {section.items.map((item, itemIdx) => (
                <div className={item.colClass} key={`item-${itemIdx}`}>
                  <a href={item.cta.href}>
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
                  </a>
                  {item.eyebrow && <h4 className="fixed14">{item.eyebrow}</h4>}
                  <h2 className="headline36" dangerouslySetInnerHTML={{__html: item.heading}} />
                  {item.body && <p className="body20-light" dangerouslySetInnerHTML={{__html: item.body}} />}
                  {item.cta.label && (
                    <a href={item.cta.href} className="rolex-btn secondaryNoBorder">
                      {item.cta.label}
                      <i className="icon-after"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
