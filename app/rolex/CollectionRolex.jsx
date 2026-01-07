import React from "react";

const DEFAULT_COLLECTION = {
  title: "headline50",
  products: new Array(4).fill(null).map((_, idx) => ({
    href: "#",
    image: {
      desktop: "/imgRolex/fake-watch.png",
      mobile: "/imgRolex/fake-watch.png",
      alt: `imagen ${idx + 1}`,
    },
    legendTop: "Lengend16",
    name: "Body24",
    legendBottom: "Lengend16",
  })),
  cta: {label: "Primary CTA", href: "#"},
  className: "",
};

/**
 * @param {{content?: typeof DEFAULT_COLLECTION}}
 */
export default function CollectionRolex({content = DEFAULT_COLLECTION}) {
  return (
    <div className={`collectionRolex${content.className ? ` ${content.className}` : ''}`}>
      <div className="contentWrap">
        <h2 className="headline50 collection-title">{content.title}</h2>
        <div className="rolex-grid center">
          <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-8">
            <div className="rolex-grid center collection-grid">
              {content.products.map((product, idx) => (
                <a
                  className="rolex-item rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4"
                  href={product.href}
                  key={`product-${idx}`}
                >
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={product.image.mobile}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={product.image.desktop}
                    />
                    <img
                      src={product.image.desktop}
                      {...(product.image.alt && { alt: product.image.alt })}
                      className="bannerRolex-img"
                      loading="lazy"
                    />
                  </picture>
                  <div className="product-info">
                    <h4 className="fixed14">{product.legendTop}</h4>
                    <h3 className="headline26">{product.name}</h3>
                    <h5 className="fixed14">{product.legendBottom}</h5>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        {content.cta.href && (
          <div className="rolex-btn-wrap">
            <a className="rolex-btn primary" href={content.cta.href}>
              {content.cta.label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
