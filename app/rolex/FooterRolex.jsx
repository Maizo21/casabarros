import React, { useState } from "react";

export default function FooterRolex() {
  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };

  return (
    <div className="footerRolex">
      <div className="ico">
        <img
          src="/imgRolex/crown-gold.svg"
          alt="Abrir menú"
          className="crown"
        />
      </div>
      <div className="gototop">
        <button
          type="button"
          className="iconTop fixed14"
          onClick={handleBackToTop}
          aria-label="Volver arriba"
        >
          <img
            src="/imgRolex/back-to-top-arrow-white-icon.svg"
            alt="Abrir menú"
            className="sep"
          />
          Back to top
        </button>
      </div>
    </div>
  );
}
