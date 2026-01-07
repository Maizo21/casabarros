import React from "react";
import ContactForm from "./ContactForm";

const DEFAULT_CONTENT = {
  title: "Headline36",
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
};

/**
 * @param {{
 *  content?: typeof DEFAULT_CONTENT;
 *  onSuccess?: (formData: any) => void;
 *  showImage?: boolean;
 *  showTitle?: boolean;
 *  className?: string;
 * }}
 */
export default function ContactSection({
  content = DEFAULT_CONTENT,
  onSuccess,
  showImage = true,
  showTitle = true,
  className = '',
}) {
  const image = content.image || {};

  const handleFormSuccess = (formData) => {
    console.log("Formulario enviado con éxito:", formData);
    if (onSuccess) {
      onSuccess(formData);
    }
  };

  return (
    <section className={`modelContact${className ? ` ${className}` : ''}`}>
      <div className="contentWrap">
        <div className="rolex-grid">
          {showTitle && (
            <div className="item rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12">
              <h4 className="headline36">{content.title}</h4>
            </div>
          )}

          <div className="item rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12">
            {/* Imagen */}
            {showImage && image.desktop && (
              <picture>
                <source media="(max-width: 767px)" srcSet={image.mobile} />
                <source media="(min-width: 768px)" srcSet={image.desktop} />
                <img src={image.desktop} {...(image.alt && { alt: image.alt })} className="bannerRolex-img" />
              </picture>
            )}

            <ContactForm content={content} onSuccess={handleFormSuccess} />
          </div>
        </div>
      </div>
    </section>
  );
}
