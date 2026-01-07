import React from "react";

const DEFAULT_BODY_TEXT = {
  heading: "Headline50",
  bodyStrong:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  bodyRest:
    "Quo magni pariatur eum ducimus dolor assumenda iste natus deserunt dolorum eligendi quisquam ratione amet a, quaerat vero saepe nesciunt fuga in!",
  cta: {label: "Primary CTA", href: "#"},
  className: "",
  imageBefore: {
    desktop: "",
    mobile: "",
    alt: "Logo",
    className: "",
  },
  imageAfter: {
    desktop: "",
    mobile: "",
    alt: "Imagen",
    className: "",
  },
};

/**
 * @param {{content?: typeof DEFAULT_BODY_TEXT}}
 */
export default function BodyTextRolex({content = DEFAULT_BODY_TEXT}) {
  return (
    <div className={`bodyTextRolex${content.className ? ` ${content.className}` : ''}`}>
      <div className="contentWrap">
        <div className="rolex-grid center">
          <div className="rolex-col-sm-6 rolex-col-md-8 rolex-col-lg-6">
            {content.imageBefore && content.imageBefore.desktop && (
              <picture className={`img-before-wrapper ${content.imageBefore.className ? ` ${content.imageBefore.className}` : ''}`}>
                <source
                  media="(max-width: 767px)"
                  srcSet={content.imageBefore.mobile || content.imageBefore.desktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={content.imageBefore.desktop}
                />
                <img
                  src={content.imageBefore.desktop}
                  alt={content.imageBefore.alt}
                  className="image-before"
                  loading="lazy"
                />
              </picture>
            )}
            <h2 className="headline50" dangerouslySetInnerHTML={{__html: content.heading}} />
            <p className="body20-light">
              <strong dangerouslySetInnerHTML={{__html: content.bodyStrong}} /> <span dangerouslySetInnerHTML={{__html: content.bodyRest}} />
            </p>
            {content.cta.label && (
              <a href={content.cta.href} className="rolex-btn primary">
                {content.cta.label}
              </a>
            )}
          </div>
            {content.imageAfter && content.imageAfter.desktop && (
              <>
                {content.imageAfter.className && (
                  <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12"></div>
                )}
                <div className={`img-after-wrapper ${content.imageAfter.className ? ` ${content.imageAfter.className}` : 'rolex-col-sm-6 rolex-col-md-9 rolex-col-lg-9'}`}>
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={content.imageAfter.mobile || content.imageAfter.desktop}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={content.imageAfter.desktop}
                    />
                    <img
                      src={content.imageAfter.desktop}
                      alt={content.imageAfter.alt}
                      className="image-after"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
