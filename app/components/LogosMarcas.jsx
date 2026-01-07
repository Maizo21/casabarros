import React from "react";

/**
 * Componente que muestra una fila de logos de marcas
 * @param {{
 *   items: { src: string; alt?: string; width?: number; height?: number }[];
 * }}
 */
export default function LogosMarcas({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="logos-marcas">
      <div className="contentWrap">
        <div className="logos-items">
          {items.map((item, index) => (
            <div key={index} className="marca-item">
              <img
                src={item.src}
                alt={item.alt || ""}
                width={item.width || 300}
                height={item.height || 187}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}