import React from "react";

const DEFAULT_VIDEO = {
  image: {
    desktop: "/imgRolex/videoPlayer.png",
    mobile: "/imgRolex/videoPlayer.png",
    alt: "imagen",
  },
  youtubeEmbed: "",
};

/**
 * @param {{content?: typeof DEFAULT_VIDEO}}
 */
export default function VideoRolex({content = DEFAULT_VIDEO}) {
  return (
    <div className="imagesRolex">
      <div className="contentWrap">
        <div className="rolex-grid center">
          <div className="rolex-col-sm-6 rolex-col-md-10 rolex-col-lg-10">
            {content.youtubeEmbed ? (
              <div
                className="video-embed-container"
                dangerouslySetInnerHTML={{__html: content.youtubeEmbed}}
              />
            ) : (
              content.image && content.image.desktop && (
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={content.image.mobile}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={content.image.desktop}
                  />
                  <img
                    src={content.image.desktop}
                    {...(content.image.alt && { alt: content.image.alt })}
                    className="bannerRolex-img"
                    loading="lazy"
                  />
                </picture>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
