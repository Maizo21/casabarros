import React from "react";

const DEFAULT_INTRO = {
  heading: "Headline50",
  bodyStrong:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  bodyRest:
    "Quo magni pariatur eum ducimus dolor assumenda iste natus deserunt dolorum eligendi quisquam ratione amet a, quaerat vero saepe nesciunt fuga in!",
  cta: {label: "Secondary CTA", href: "#"},
};

/**
 * @param {{content?: typeof DEFAULT_INTRO}}
 */
export default function IntroductionRolex({content = DEFAULT_INTRO}) {
  return (
    <div className="introductionRolex">
      <div className="contentWrap">
        <div className="rolex-grid">
          <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-5">
            <h2 className="headline50" dangerouslySetInnerHTML={{__html: content.heading}} />
          </div>
          <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-1"></div>
          <div className="rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-5">
            <p className="body20-light">
              <strong dangerouslySetInnerHTML={{__html: content.bodyStrong}} /> <span dangerouslySetInnerHTML={{__html: content.bodyRest}} />
            </p>
            {content.cta.label && (
              <a href={content.cta.href} className="rolex-btn secondaryNoBorder">
                {content.cta.label}
                <i className="icon-after"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
