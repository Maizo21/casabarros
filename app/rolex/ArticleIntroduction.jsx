import React from "react";

const DEFAULT_ARTICLE_INTRO = {
  heading: "Headline50",
  subheading:
    "Headline30 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni pariatur eum ducimus dolor",
  meta: "Body20 - Date",
};

/**
 * @param {{content?: typeof DEFAULT_ARTICLE_INTRO}}
 */
export default function ArticleIntroduction({content = DEFAULT_ARTICLE_INTRO}) {
  return (
    <div className="articleIntroduction">
      <div className="contentWrap">
        <div className="rolex-grid center">
          <div className="rolex-col-sm-6 rolex-col-md-8 rolex-col-lg-6">
            <h2 className="headline50">{content.heading}</h2>
            <p className="body24-light">{content.subheading}</p>
            <p className="body20-light">{content.meta}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
