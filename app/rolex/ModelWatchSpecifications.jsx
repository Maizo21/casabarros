import React from "react";

const DEFAULT_SPEC_ITEMS = [
  { 
    title: "Body20 - Specifications", 
    body: "Body20 - Lorem ipsum dolor sit amet",
  },
  { 
    title: "Body21 - Specifications", 
    body: "Body21 - Lorem ipsum dolor sit amet",
  },
  { 
    title: "Body22 - Specifications", 
    body: "Body22 - Lorem ipsum dolor sit amet",
  },
  { 
    title: "Body23 - Specifications", 
    body: "Body23 - Lorem ipsum dolor sit amet",
  },
  { 
    title: "Body24 - Specifications", 
    body: "Body24 - Lorem ipsum dolor sit amet",
  },
  { 
    title: "Body25 - Specifications", 
    body: "Body25 - Lorem ipsum dolor sit amet",
  },
  { 
    title: "Body26 - Specifications", 
    body: "Body26 - Lorem ipsum dolor sit amet",
  },
  { 
    title: "Body27 - Specifications", 
    body: "Body27 - Lorem ipsum dolor sit amet",
  },
  {
    title: "Body28 - Specifications", 
    body: "Body28 - Lorem ipsum dolor sit amet",
  },
  {
    title: "Body29 - Specifications", 
    body: "Body29 - Lorem ipsum dolor sit amet",
  },
  {
    title: "Body30 - Specifications", 
    body: "Body30 - Lorem ipsum dolor sit amet",
  },
];

/**
 * @param {{items?: typeof DEFAULT_SPEC_ITEMS; cta?: {label?: string; href?: string; iconSrc?: string; iconAlt?: string}}}
 */
export default function ModelWatchSpecifications({
  items = DEFAULT_SPEC_ITEMS,
  cta,
}) {

  return (
    <section className="modelWatchSpecifications">
      <div className="contentWrap">
        <div className="specsGrid">
          {items.map((item, index) => (
            <div
              key={index}
              className="item"
            >
              <div className="specification-item">
                <span className="body24-bold">{item.title}</span>
                <p className="body24-light">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        {cta?.href && (
          <>
            <div className="divider-horizontal"></div>
            <a className="rolex-btn primary-icon" href={cta.href}>
              <span className="icon icon-before">
                <img className="white" src={cta.iconSrc} alt={cta.iconAlt} />
              </span>
              {cta.label}
            </a>
          </>
        )}
      </div>
    </section>
  );
}
