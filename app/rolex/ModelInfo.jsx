import React from "react";

const DEFAULT_MODEL_INFO = {
  sections: [
    {
      heading: "Headline50",
      body:
        "Quo magni pariatur eum ducimus dolor assumenda iste natus deserunt dolorum eligendi quisquam ratione amet a, quaerat vero saepe nesciunt fuga in!",
      image: {
        desktop: "/imgRolex/dialFake.webp",
        mobile: "/imgRolex/dialFake.webp",
        alt: "imagen",
      },
    },
    {
      heading: "Headline50",
      body:
        "Quo magni pariatur eum ducimus dolor assumenda iste natus deserunt dolorum eligendi quisquam ratione amet a, quaerat vero saepe nesciunt fuga in!",
      image: {
        desktop: "/imgRolex/esferaFake.webp",
        mobile: "/imgRolex/esferaFake.webp",
        alt: "imagen",
      },
    },
    {
      heading: "Headline50",
      body:
        "Quo magni pariatur eum ducimus dolor assumenda iste natus deserunt dolorum eligendi quisquam ratione amet a, quaerat vero saepe nesciunt fuga in!",
      image: {
        desktop: "/imgRolex/materialFake.webp",
        mobile: "/imgRolex/materialFake.webp",
        alt: "imagen",
      },
    },
  ],
};

/**
 * @param {{content?: typeof DEFAULT_MODEL_INFO}}
 */
export default function ModelInfo({content = DEFAULT_MODEL_INFO}) {
  return (
    <div className="bodyTextRolex modelInfo">
      <div className="contentWrap">
        <div className="rolex-grid center column">
          {content.sections?.map((section, idx) => (
            <div
              className="rolex-col-sm-6 rolex-col-md-8 rolex-col-lg-6"
              key={`model-info-${idx}`}
            >
              <h2 className="headline70">{section.heading}</h2>
              <p className="body20-light">{section.body}</p>
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={section.image?.mobile}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={section.image?.desktop}
                />
                <img
                  src={section.image?.desktop}
                  {...(section.image?.alt && { alt: section.image.alt })}
                  className="bannerRolex-img"
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
