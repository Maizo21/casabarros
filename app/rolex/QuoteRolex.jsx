import React from "react";

const DEFAULT_QUOTE = {
  quote:
    "Quote50 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora ducimus odio atque fugit earum iusto, quos officiis tenetur, totam nobis.",
  author: "Body20",
};

/**
 * @param {{content?: typeof DEFAULT_QUOTE}}
 */
export default function QuoteRolex({content = DEFAULT_QUOTE}) {
  return (
    <div className="quoteRolex">
      <div className="contentWrap">
        <div className="rolex-grid center">
          <div className="rolex-col-sm-6 rolex-col-md-8 rolex-col-lg-6">
            <p className="quote50">{content.quote}</p>
            <p className="body20-light">{content.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
