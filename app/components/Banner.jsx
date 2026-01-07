import React from "react";

/**
 * Componente de banner de imagen completa con link opcional y soporte responsive
 * @param {{
 *   image?: string;            // Imagen base (retrocompatible)
 *   imageDesktop?: string;     // Imagen para desktop
 *   imageMobile?: string;      // Imagen para mobile
 *   alt?: string;
 *   link?: string;
 * }}
 */
export default function Banner({ image, imageDesktop, imageMobile, alt = "", link }) {
  // Si no hay imagen alguna, no renderiza nada
  if (!image && !imageDesktop && !imageMobile) return null;

  const content = (
    <picture>
      {/* 👇 Mobile */}
      {imageMobile && (
        <source media="(max-width: 768px)" srcSet={imageMobile} />
      )}

      {/* 👇 Desktop */}
      <img
        src={imageDesktop || image || imageMobile}
        alt={alt}
        className="banner-full-image"
        loading="lazy"
      />
    </picture>
  );

  return (
    <div className="banner-full">
      {link ? (
        <a href={link} className="banner-link">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}