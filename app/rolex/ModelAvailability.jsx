import React from "react";

const DEFAULT_AVAILABILITY_CONTENT = {
  crownSrc: "/imgRolex/crown-gold.svg",
  crownAlt: "Crown icon",
  title: "Disponibilidad de los modelos",
  paragraphs: [
    "Todos los relojes Rolex se ensamblan a mano con sumo cuidado para garantizar una calidad excepcional. Unos estándares tan altos limitan naturalmente la capacidad de producción de Rolex y, a veces, la demanda de relojes Rolex supera esta capacidad.",
    "Por lo tanto, la disponibilidad de ciertos modelos puede ser limitada. Los relojes Rolex nuevos se venden exclusivamente a través de los Distribuidores Oficiales Rolex, que reciben entregas habituales y gestionan de manera independiente la distribución y las ventas a sus clientes.",
    "Casa Barros se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, y puede proporcionar información sobre la disponibilidad de los relojes Rolex.",
  ],
};

/**
 * Permite definir contenido dinámico para el bloque de disponibilidad.
 * @param {{content?: typeof DEFAULT_AVAILABILITY_CONTENT}} props
 */
export default function ModelAvailability({content = DEFAULT_AVAILABILITY_CONTENT}) {
  const {crownSrc, crownAlt, title, paragraphs = []} = content;

  return (
    <section className="modelAvailability">
      <div className="contentWrap">
        <div className="rolex-grid center">
          <div className="rolex-col-sm-6 rolex-col-md-2 rolex-col-lg-3"></div>
          <div className="rolex-col-sm-5 rolex-col-md-8 rolex-col-lg-6">
            <img
              src={crownSrc}
              alt={crownAlt}
              className="crown"
            />
            <h3 className="headline70">{title}</h3>
            <div className="content-body body24-light">
              {paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
          <div className="rolex-col-sm-6 rolex-col-md-2 rolex-col-lg-3"></div>
        </div>
      </div>
    </section>
  );
}
