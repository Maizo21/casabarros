// app/routes/rolex.world-of-rolex.sailgp-rolex.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import PushRolex from "~/rolex/PushRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import ImagesRolex from "~/rolex/ImagesRolex";
import ArticleIntroduction from "~/rolex/ArticleIntroduction";
import VideoRolex from "~/rolex/VideoRolex";

export const meta = () => [{ title: "Rolex SailGP Championship | El mundo de Rolex | Casa Barros" }];

export const handle = {
  breadcrumb: "SailGP Rolex"
};

const ROLEX_PAGE_CONTENT = {
  articleIntro: {
    heading: "Superar los límites hasta el último segundo",
    subheading:
      "Dominar el poder de la mecánica para desafiar las leyes del tiempo. Controlar el riesgo para determinar la trayectoria ideal. Hasta la victoria. Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo.",
    meta: "Publicado el 13 de junio de 2025",
  },
  video: {
    youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fMJ_jE_0A0A?si=o8-W4fcUEyUM3jib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "imagen",
    },
  },
  bodyText: {
    heading: "Las 24 Horas de Le Mans, la carrera de resistencia más antigua de automovilismo",
    bodyStrong: "",
    bodyRest:
      "Las 24 Horas de Le Mans celebran la resistencia y la excelencia del automovilismo. A medida que cae la noche en el icónico Circuit de la Sarthe, la carrera va más allá de la habilidad y la resiliencia de cada piloto. Inaugurada en 1923, en su primera edición participaron 33 equipos de dos pilotos. En la actualidad, más de 60 coches con tres pilotos se esfuerzan por alcanzar el ascenso, mientras los grandes fabricantes y equipos privados muestran su pericia tecnológica. Desde 2001, Rolex es el ilustre Patrocinador Exclusivo y Reloj Oficial de este impresionante reto, que celebra los esfuerzos de los pilotos en su búsqueda del logro supremo que es terminar primero.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-endurance-LEMANS_2406aw_0393-LEMANS20js_11892_XL-landscape-1200x750.webp",
      mobile: "/imgRolex/banners/68495861bbbb668495843b64d6_rolex-endurance-lemans2406aw0393-lemans20js11892xl-portrait.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText2: {
    heading: "Rolex 24 At DAYTONA, circuito legendario, carrera épica",
    bodyStrong: "",
    bodyRest:
      "En el Daytona International Speedway de 5,73 kilómetros en Florida, los mejores pilotos y equipos de resistencia compiten durante 24 horas. Solo los temperamentos más fuertes y las mejores prestaciones mecánicas y técnicas pueden prevalecer. Las clasificaciones se basan en la distancia recorrida dentro del tiempo asignado. Rolex es Sponsor Oficial y Reloj Oficial del evento desde 1992.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-endurance-DAYT25zs_00542-landscape-1536x1006.webp",
      mobile: "/imgRolex/banners/rolex-endurance-DAYT25zs_00542-landscape-1536x1006.webp",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText3: {
    heading: "Las 12 Horas de Sebring, rendimiento bajo presión",
    bodyStrong: "",
    bodyRest:
      "Creada en Estados Unidos en 1952, las 12 Horas de Sebring tiene la reputación de ser una de las carreras de resistencia más desafiantes del mundo. Con su superficie irregular, Sebring International Raceway es una verdadera prueba de fiabilidad de los coches. Es aquí, en marzo, donde muchos competidores de las 24 Horas de Le Mans vienen a probar la resistencia mecánica de sus coches. Rolex es Reloj Oficial de la competición.<br /><br />La marca entrega un Cosmograph Daytona a los ganadores de cada uno de estos tres eventos emblemáticos, que constituyen la triple corona de las carreras de resistencia.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "",
      mobile: "",
      alt: "Imagen",
      className: "",
    },
  },
   banner: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-endurance-lemans17js_0048-landscape.webp",
      mobile: "imgRolex/banners/68496e274fcad68495a179adc8_rolex-endurance-lemans17js0048-portrait.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText4: {
    heading: "Fiabilidad a lo largo del tiempo",
    bodyStrong: "",
    bodyRest:
      "Rolex mantiene colaboraciones con las organizaciones más importantes de las carreras de resistencia. Desde 2001, la marca apoya al Automobile Club de l’Ouest (ACO), que organiza las 24 Horas de Le Mans y supervisa el Campeonato Mundial de Resistencia de la FIA (WEC), la mayor serie de competiciones internacionales de coches deportivos.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "",
      mobile: "",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText5: {
    heading: "La mecánica del progreso",
    bodyStrong: "",
    bodyRest:
      "Hacerlo mejor con menos. Este es el doble desafío deportivo y medioambiental al que los equipos de carreras y los fabricantes se enfrentan hoy en día: lograr rendimiento energético superando aún más los límites del rendimiento. Rolex siempre se ha comprometido con la dinámica del progreso y apoya al automovilismo en esta profunda transformación",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-endurance-tkristensen2501cc_1568_upsized_rvb-lemans14js_8025-landscape-1200x750.webp",
      mobile: "/imgRolex/banners/68496f81df03b68496f74495f1_rolex-endurance-tkristensen2501cc1568upsizedrvb-lemans14js8025-portrait.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText6: {
    heading: "Tom Kristensen, «Monsieur Le Mans»",
    bodyStrong: "",
    bodyRest:
      "Con nueve victorias en las 24 Horas de Le Mans, Tom Kristensen, Testimonial Rolex desde 2010, es el piloto con más éxito de la historia de la carrera. Triunfó en su primera aparición en 1997 y reinó de 2000 a 2005. El danés añadió dos victorias más, en 2008 y 2013. En 18 participaciones, Kristensen logró subirse al podio 15 veces. Su trayectoria también incluye un título del Campeonato Mundial de Resistencia de la FIA (WEC) en 2013 y seis victorias en las 12 Horas de Sebring.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "",
      mobile: "",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText7: {
    heading: "Jamie Chadwick, piloto del futuro",
    bodyStrong: "",
    bodyRest:
      "Jamie Chadwick no había cumplido aún los 16 años cuando se proclamó vencedora de las 24 Horas de Silverstone en 2015. Primera campeona del British GT Championship y tres veces campeona de la W Series para mujeres (Formula 3), Chadwick representa el futuro del automovilismo. Testimonial Rolex desde 2022, alcanzó sus victorias en la carrera en su primera temporada compitiendo en la European Le Mans Series de 2025.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "/imgRolex/banners/rolex-endurance-jchadwick2503bh_301-landscape-1536x1536.webp",
      mobile: "/imgRolex/banners/rolex-endurance-jchadwick2503bh_301-landscape-1536x1536.webp",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "",
      mobile: "",
      alt: "Imagen",
      className: "",
    },
  },
  pushSections: [
    {
      title: "",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/rolex-cosmograph-daytona-cover-m126508-0008_2503stojan_001-landscape-scaled.webp",
            mobile: "/imgRolex/banners/684955874ba0a_rolex-collectionbanner-the-cosmograph-daytona-coverm126508-0008-portrait.webp",
            alt: "imagen",
          },
          eyebrow: "La colección Rolex Cosmograph Daytona",
          heading: "El triunfo de la resistencia",
          body: "",
          cta: {label: "Más información", href: "/rolex/watches"},
        },
      ],
    }
  ],
};

export default function SailGPRolexPage() {
  return (
    <section className="pageRolex" id="introduction">
      <br /><br /><br /><br />
      <ArticleIntroduction content={ROLEX_PAGE_CONTENT.articleIntro} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText5} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText6} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText7} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
    </section>
  );
}
