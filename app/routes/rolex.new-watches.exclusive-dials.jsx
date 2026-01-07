// app/routes/rolex.new-watches.exclusive-dials.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import VideoRolex from "~/rolex/VideoRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import ImagesRolex from "~/rolex/ImagesRolex";

export const meta = () => [{ title: "Esferas Inéditas | Nuevos Modelos Rolex 2025 | Casa Barros" }];

export const handle = {
  breadcrumb: "Esferas Inéditas"
};

const ROLEX_PAGE_CONTENT = {
  banner1: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-cover_m126518ln-0014_2501-landscape.jpg",
      mobile: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-cover_m126518ln-0014_2501-portrait.jpg",
      alt: "Esferas Inéditas Rolex",
      style: "light",
    }
  ],
  introduction: {
    heading: "Esferas inéditas<br />El brillo de lo inesperado",
    bodyStrong: "Modelos de osadas configuraciones. Originales combinaciones de colores y materiales que provocan emociones inusitadas.",
    bodyRest:
      "Los Oyster Perpetual Cosmograph Daytona, GMT-Master II y Sky-Dweller se visten con nuevas esferas que reafirman su aura.",
    cta: {label: "", href: ""},
  },
  video: {
    youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gdLZkkDClv4?si=zRFeS0JyelZozJCj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "Video Day-Date",
    },
  },
  bodyText1: {
    heading: "Rolex crea un vistoso semblante para tres de sus modelos icónicos, célebres por su tecnicidad y su diseño emblemático.",
    bodyStrong: "",
    bodyRest: "El Oyster Perpetual Cosmograph Daytona está disponible con una luminosa esfera lacada azul turquesa sobre la que destacan unos contadores negro vivo. Fabricado en oro amarillo de 18 quilates, este nuevo reloj está coronado por un bisel Cerachrom negro con la famosa escala taquimétrica. El conjunto se completa con un brazalete Oysterflex, siempre provisto de un cierre de seguridad Oysterlock.",
    cta: {label: "", href: ""},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "",
      className: "",
    },
    imageAfter: {
      desktop: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch_m126518ln-0014_2501ad_002-landscape.jpg",
      mobile: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch_m126518ln-0014_2501ad_002-portrait.jpg",
      alt: "",
      className: "",
    },
  },
  bodyText2: {
    heading: "",
    bodyStrong: "",
    bodyRest: "El Oyster Perpetual GMT Master II se propone con una novedosa esfera, realizada en ojo de hierro. Esta piedra natural, compuesta por ojo de tigre, jaspe rojo y hematita, fascina por su aspecto híbrido. La modalidad presentada, en oro Everose de 18 quilates, cuenta con un bisel Cerachrom marrón y negro y está dotada de un brazalete Oyster, equipado con un cierre de seguridad Oysterlock.",
    cta: {label: "", href: ""},
    className: ""
  },
  banner2: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-gmt-master-ii_m126715chnr-0002_2501stojan_002-landscape.jpg",
      mobile: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-gmt-master-ii_m126715chnr-0002_2501stojan_002-portrait.jpg",
      alt: "Banner 2",
      style: "light",
    }
  ],
  bodyText3: {
    heading: "",
    bodyStrong: "",
    bodyRest: "El Oyster Perpetual Sky Dweller acompaña a los grandes viajeros a cualquier latitud. Este año, una versión en oro amarillo de 18 quilates se viste con una esfera verde vivo con acabado tipo sol, una tonalidad intensa que combina a las mil maravillas con el color del reloj. El brazalete Jubilee, igualmente en oro amarillo de 18 quilates y con cierre Oysterclasp, le aporta un toque adicional de exquisitez.",
    cta: {label: "", href: ""},
    className: "",
  },
  images1: [
    {
      contentWrapClass: "contentWrap",
      className: "odd noMarginBottom",
      colClass: "rolex-col-sm-6 rolex-col-md-9 rolex-col-lg-9",
      image: {
        desktop: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-high-technology-ceramic_m126518ln-0014_2412uf_001_and_m126715chnr-0002_412uf_001-landscape.jpg",
        mobile: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-high-technology-ceramic_m126518ln-0014_2412uf_001_and_m126715chnr-0002_412uf_001-portrait.jpg",
        alt: "Imagen 1",
      },
    },
  ],
  bodyText4: {
    heading: "Cerámica de alta tecnología",
    bodyStrong: "",
    bodyRest: "Rolex ha desempeñado un papel pionero en el desarrollo de cerámicas especiales para la fabricación de algunos elementos externos. Particularmente resistentes a las rayaduras, estos materiales presentan colores inalterables y de una intensidad poco común. Además, por la naturaleza de su composición química, estas cerámicas de alta tecnología son inertes y resisten a la corrosión. La marca ha desarrollado un savoir faire y unos métodos de fabricación exclusivos e innovadores que le permiten producir estos componentes de cerámica con total independencia.<br /><br />El Cosmograph Daytona en oro amarillo de 18 quilates con esfera lacada azul turquesa está provisto de un bisel Cerachrom monobloque de cerámica negra. En el GMT Master II en oro Everose de 18 quilates con esfera de ojo de hierro, el bisel giratorio bidireccional está dotado de un disco Cerachrom graduado 24 horas bicolor de cerámica marrón y negra.",
    cta: {label: "", href: ""},
    className: "odd"
  },
  bodyText5: {
    heading: "El bisel estriado, una característica distintiva",
    bodyStrong: "",
    bodyRest: "El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.<br /><br />El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.",
    cta: {label: "", href: ""},
    className: "",
    imageBefore: {
      desktop: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-sky-dweller_m336938-0008_2412uf_001-landscape.jpg",
      mobile: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-sky-dweller_m336938-0008_2412uf_001-portrait.jpg",
      alt: "",
      className: "",
    },
  },
  images2: [
    {
      contentWrapClass: "contentWrap",
      className: "",
      colClass: "rolex-col-sm-6 rolex-col-md-8 rolex-col-lg-8",
      image: {
        desktop: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-oyster-case_m126518ln-0014_2501_and_m126715chnr-0002_m336938-0008-landscape.jpg",
        mobile: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-oyster-case_m126518ln-0014_2501_and_m126715chnr-0002_m336938-0008-portrait.jpg",
        alt: "Imagen 2",
      },
    },
  ],
  bodyText6: {
    heading: "Caja Oyster, símbolo de hermeticidad",
    bodyStrong: "",
    bodyRest: "Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT Master II ―ambas de 40 mm de diámetro―, así como la del Sky Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.",
    cta: {label: "", href: ""},
    className: ""
  },
  banner3: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch_m126518ln-0014_2501ad_001-landscape.jpg",
      mobile: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch_m126518ln-0014_2501ad_001-portrait.jpg",
      alt: "Banner 3",
      style: "light",
    }
  ],
  bodyText7: {
    heading: "Calibre 4131, calibre 3285 y calibre 9002",
    bodyStrong: "",
    bodyRest: "El Cosmograph Daytona, el GMT Master II y el Sky Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.<br /><br />El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.<br /><br />El GMT Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.<br /><br />El Sky Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.<br /><br />Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.",
    cta: {label: "", href: ""},
    className: "",
    imageBefore: {
      desktop: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-movements-4131-3285-9002_movt4131_3285_9002_2411uf_002-landscape.jpg",
      mobile: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-movements-4131-3285-9002_movt4131_3285_9002_2411uf_002-portrait.jpg",
      alt: "",
      className: "",
    },
  },
  banner4: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-new-dials-sky-dweller-ambiance_m336938-0008_2501-landscape.jpg",
      mobile: "imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-new-dials-sky-dweller-ambiance_m336938-0008_2501-portrait.jpg",
      alt: "Banner 4",
      style: "light",
    }
  ],
  bodyText8: {
    heading: "Brazaletes Oysterflex, Oyster y Jubilee",
    bodyStrong: "",
    bodyRest: "El Cosmograph Daytona con esfera lacada azul turquesa y contadores negro vivo está dotado de un brazalete Oysterflex. Desarrollado por Rolex y patentado, está formado por dos láminas metálicas combadas y flexibles ―una para cada uno de los ramales― revestidas de elastómero negro de alto rendimiento.<br /><br />Por su parte, el GMT Master II con esfera de ojo de hierro está provisto de un brazalete Oyster. Este brazalete metálico de tres elementos, desarrollado a finales de la década de 1930, destaca por su solidez.<br /><br />En cuanto al Sky Dweller con esfera verde vivo, luce un brazalete Jubilee. Fluido y confortable, este brazalete metálico de cinco elementos se creó específicamente para el Oyster Perpetual Datejust, lanzado en 1945.<br /><br />Tanto el brazalete Oysterflex del Cosmograph Daytona como el brazalete Oyster del GMT Master II están equipados con el cierre de seguridad desplegable Oysterlock, que previene cualquier apertura involuntaria, mientras que el brazalete Jubilee del Sky Dweller está equipado con un cierre desplegable Oysterclasp.",
    cta: {label: "", href: ""},
    className: ""
  },
  bodyText9: {
    heading: "Certificación de Cronómetro Superlativo",
    bodyStrong: "",
    bodyRest: "Como todos los relojes Rolex, el Oyster Perpetual Cosmograph Daytona, el Oyster Perpetual GMT Master II y el Oyster Perpetual Sky Dweller cuentan con la certificación de Cronómetro Superlativo redefinida por Rolex en 2015. Esta denominación atestigua que cada reloj que sale de los talleres de la marca ha superado con éxito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios, que siguen a la certificación oficial del movimiento por parte del Control Oficial Suizo de Cronómetros (COSC). Las pruebas de certificación internas se efectúan al conjunto del reloj, una vez encajado el movimiento, con el fin de garantizar su rendimiento superlativo en la muñeca en materia de precisión, hermeticidad, cuerda automática y autonomía. La precisión de un Cronómetro Superlativo Rolex es del orden de -2 /+2 segundos al día (la desviación de marcha tolerada por la marca para un reloj terminado es mucho menor que la admitida por el COSC para la certificación oficial del movimiento por sí solo).<br /><br />El estatus de Cronómetro Superlativo se simboliza mediante el sello verde que incluyen todos los relojes Rolex y que va acompañado de una garantía internacional de cinco años.",
    cta: {label: "", href: ""},
    className: "",
    imageBefore: {
      desktop: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-landscape/rolex-new-watches-2025-superlative-chronometer-certification_sceau_lumiere_lancia-landscape.jpg",
      mobile: "/imgRolex/rolex-new-watches-2025-page-assets/7-rolex-new-watches-2025-page-assets-new-dials/rolex-new-watches-2025-new-dials-page-assets-portrait/rolex-new-watches-2025-superlative-chronometer-certification_sceau_lumiere_lancia-landscape.jpg",
      alt: "",
      className: "",
    },
  },
};

export default function ExclusiveDialsPage() {
  return (
    <>
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner1} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText1} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images1} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText5} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText6} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText7} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner4} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText8} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText9} />
    </>
  );
}
