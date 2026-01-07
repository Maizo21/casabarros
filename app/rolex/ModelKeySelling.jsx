import React, { useState } from "react";

const DEFAULT_KEY_SELLING_ITEMS = [
  { 
    title: "Body24", 
    text: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
  },
  { 
    title: "Body25", 
    text: "Body21 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
  },
  { 
    title: "Body26", 
    text: "Body22 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
  },
  { 
    title: "Body27", 
    text: "Body23 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
  },
];

/**
 * @param {{items?: typeof DEFAULT_KEY_SELLING_ITEMS; defaultOpen?: number | null; image?: {desktop: string; mobile: string; alt: string}}}
 */
export default function ModelKeySelling({
  items = DEFAULT_KEY_SELLING_ITEMS,
  defaultOpen = 0,
  image = {
    desktop: "/img/banners/banner2.jpg",
    mobile: "/img/banners/banner2-mob.png",
    alt: "imagen",
  },
}) {
  const [expandedIndex, setExpandedIndex] = useState(defaultOpen);

  const toggleAccordion = (index) => {
    // Si el mismo está abierto, ciérralo; si no, ábrelo
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="modelKeySelling">
      <div className="contentWrap">
        <div className="rolex-grid">
          <div className="item rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-6">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={image.mobile}
              />
              <source
                media="(min-width: 768px)"
                srcSet={image.desktop}
              />
              <img
                src={image.desktop}
                {...(image.alt && { alt: image.alt })}
                className="bannerRolex-img"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="item rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-1"></div>
          <div className="item rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-5 accordion-container">
            {items.map((item, index) => (
              <div
                key={index}
                className="item"
              >
                <div className="accordion">
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="headline26">{item.title}</span>
                    <span className="accordion-icon body24-light">
                      {expandedIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`accordion-content ${expandedIndex === index ? "is-open" : ""}`}
                    aria-hidden={expandedIndex !== index}
                  >
                    <div className="accordion-content-inner">{item.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
