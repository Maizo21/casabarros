import React from "react";

/**
 * Componente de título de sección con subtítulo
 * @param {{
 *   titulo: string;
 *   subtitulo?: string;
 * }}
 */
export default function TituloSeccion({ titulo, subtitulo }) {
  return (
    <div className="titulo-seccion">
      <h2>{titulo}</h2>
      {subtitulo && <h5>{subtitulo}</h5>}
    </div>
  );
}