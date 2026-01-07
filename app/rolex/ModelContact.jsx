import React, { useState } from "react";
import ContactForm from "./ContactForm";

const DEFAULT_KEY_SELLING_ITEMS = [
  {
    title: "Body24",
    image: {
      desktop: "/img/banners/contactBanner.jpg",
      mobile: "/img/banners/contactBannerMob.webp",
      alt: "imagen",
    },
    epigrafe: "Body20",
    headline: "Headline50",
    text: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
    epigrafe2: "Body20",
    headline2: "Headline50",
    text2: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    epigrafe3: "Body20",
    headline3: "Headline50",
    text3a: "Body20 Bold - Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    text3b: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

/**
 * @param {{
 *  items?: typeof DEFAULT_KEY_SELLING_ITEMS;
 *  defaultOpen?: number | null;
 * }}
 */
export default function ModelContact({
  items = DEFAULT_KEY_SELLING_ITEMS,
  defaultOpen = 0,
}) {
  const [expandedIndex, setExpandedIndex] = useState(defaultOpen);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleFormSuccess = (formData) => {
    console.log("Formulario enviado con éxito:", formData);
    // Aquí puedes agregar lógica adicional, como enviar a una API
  };

  return (
    <section className="modelContact">
      <div className="contentWrap">
        <div className="rolex-grid">
          <div className="item rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12">
            <h4 className="headline36">Contáctenos</h4>
          </div>

          <div className="item rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12 accordion-container">

            {items.map((item, index) => {
              const image = item.image || {};

              return (
                <div key={index} className="item">
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
                      className={`accordion-content ${
                        expandedIndex === index ? "is-open" : ""
                      }`}
                    >
                      {/* Imagen */}
                      {image.desktop && (
                        <picture>
                          <source media="(max-width: 767px)" srcSet={image.mobile} />
                          <source media="(min-width: 768px)" srcSet={image.desktop} />
                          <img src={image.desktop} {...(image.alt && { alt: image.alt })} className="bannerRolex-img" />
                        </picture>
                      )}

                      <ContactForm content={item} onSuccess={handleFormSuccess} />
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}