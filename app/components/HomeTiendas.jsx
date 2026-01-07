import React from "react";

export default function HomeTiendas() {
  const tiendas = [
    {
      nombre: "Parque Arauco",
      telefono: "+56222420714",
      direccion: "Av. Presidente Kennedy 5413",
      tienda: "Tienda 437",
      horario: "Lunes a Sábado de 10:30 a 19:30",
      domingo: "Domingo de 11:00 a 19:30",
      imagen: "/img/casabarrosparquearauco-1.png",
    },
    {
      nombre: "Alto Las Condes",
      telefono: "+56222131638",
      direccion: "Av. Presidente Kennedy 9001",
      tienda: "Tienda 1057",
      horario: "Lunes a Sábado de 10:30 a 19:30",
      domingo: "Domingo de 10:30 a 19:30",
      imagen: "/img/casabarrosaltolascondes.png",
    },
    {
      nombre: "Costanera Center",
      telefono: "+56226189550",
      direccion: "Av. Andrés Bello 2447",
      tienda: "Tienda 2220",
      horario: "Lunes a Sábado de 10:00 a 19:30",
      domingo: "Domingo de 10:30 a 19:30",
      imagen: "/img/casabarroscostaneracenter-1.png",
    },
  ];

  return (
    <section className="home-tiendas">
      <div className="contentWrap">
        <div className="tiendas-grid">
          {tiendas.map((tienda, i) => (
            <div key={i} className="tienda-card">
              <img
                src={tienda.imagen}
                alt={tienda.nombre}
                className="tienda-imagen"
                loading="lazy"
              />
              <div className="tienda-info">
                <h3>{tienda.nombre}</h3>
                <p>Teléfono {tienda.telefono}</p>
                <p>{tienda.direccion}</p>
                <p>{tienda.tienda}</p>
                <p>{tienda.horario}</p>
                <p>{tienda.domingo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}