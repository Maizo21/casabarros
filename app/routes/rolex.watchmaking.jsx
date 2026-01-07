// app/routes/rolex.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import KeepExploring from "~/rolex/KeepExploring";
import PushRolex from "~/rolex/PushRolex";
import GridRolex from "~/rolex/GridRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import ArticleIntroduction from "~/rolex/ArticleIntroduction";
import QuoteRolex from "~/rolex/QuoteRolex";
import ImagesRolex from "~/rolex/ImagesRolex";
import VideoRolex from "~/rolex/VideoRolex";
import CollectionRolex from "~/rolex/CollectionRolex";

export const meta = () => [{ title: "Rolex | Casa Barros" }];

export const handle = {
  breadcrumb: "«Savoir-faire» relojero de Rolex"
};

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-watchmaking-cover_2023-watchmaking-features-manifesto-still_digital_master_rgb-landscape-scaled.jpg",
      mobile: "imgRolex/banners/rolex-keep-exploring-watchmaking-2023.jpg",
      alt: "imagen",
      style: "light",
    }
  ],
  introduction: {
    heading: "Excelencia en desarrollo Relojería de Rolex",
    bodyStrong: "En el corazón de la filosofía y las actividades de Rolex reside una visión a largo plazo. El concepto de sostenibilidad siempre ha sentado los cimientos del desarrollo de la marca: ofrecer relojes atemporales y duraderos creados para perdurar, a la vez que se compromete con las generaciones futuras mediante varias colaboraciones, iniciativas y medidas.<br><br>",
    bodyRest:
      "Este enfoque refleja la filosofía «Perpetual» que ha impulsado a la empresa desde su creación. Una filosofía que reúne las destrezas de muchos y requiere un arduo trabajo, día tras día, año tras año. Es una labor exigente y rigurosa. La constante búsqueda de la excelencia de Rolex.",
    cta: {label: "", href: ""},
  },
  video: {
    youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OE0E8BmrvnI?si=YDI55oE5LpH-VPdj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "imagen",
    },
  },
  bodyText: {
    heading: "La visión fundadora de Hans Wilsdorf",
    bodyStrong: "",
    bodyRest:
      "Desde 1905 Rolex ha mantenido la visión fundadora de su creador, Hans Wilsdorf, quien vio el reloj de pulsera como un objeto del futuro, emblema de la era moderna. Hans Wilsdorf revolucionó el mundo de la relojería, superando tres importantes desafíos: fabricar movimientos pequeños pero precisos, desarrollar una caja robusta y hermética para proteger los movimientos de factores externos, y por último, equipar al reloj con un sistema de cuerda automática que ofrezca al usuario una gran comodidad de uso a diario.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-watchmaking-the-founding-vision-of-hans-wilsdorf-landscape.png",
      mobile: "/imgRolex/banners/6627acaa404bf6627ab6c2d2a6_rolex-watchmaking-the-founding-vision-of-hans-wilsdorf-portrait.webp",
      alt: "Imagen",
    },
  },
  bodyText2: {
    heading: "Los valores fundamentales de la manufactura Rolex",
    bodyStrong: "",
    bodyRest:
      "Cada reloj Rolex se diseña, fabrica y somete a pruebas con una atención constante al más mínimo detalle. Este enfoque «superlativo» se expresa a través de varias cualidades fundamentales que caracterizan cada reloj Rolex: precisión, hermeticidad, autonomía, robustez, sencillez, artesanía, comodidad y durabilidad. Estos grandes principios técnicos y estéticos siempre han guiado el trabajo de la manufactura Rolex. Prometen al usuario la experiencia de un reloj excepcional, cuyas características expresan el savoir-faire único.",
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
    },
  },
  banner2: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-watchmaking-wmmvmt_2212jb_0003_r-landscape-scaled.jpg",
      mobile: "imgRolex/banners/6627ad04e15c06627ab70ad135_rolex-watchmaking-wmmvmt2212jb0003r-portrait.webp",
      alt: "imagen",
      style: "light",
    }
  ],
  video2: {
    youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aHNEZg35ok8?si=UDM1XUMKgYiWFj6l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "imagen",
    },
  },
  bodyText3: {
    heading: "Un enfoque superlativo de la relojería",
    bodyStrong: "",
    bodyRest:
      "En sus esferas aparece la palabra «Superlative» (superlativo). Esta denominación confirma que cada reloj que sale de los talleres de la manufactura ha superado una serie de pruebas especialmente exigentes llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios, muy específicos. Estas pruebas no solo se efectúan al calibre, sino al conjunto del reloj, una vez encajado el movimiento, con el fin de garantizar su rendimiento superlativo en la muñeca en materia de precisión cronométrica, hermeticidad, cuerda automática y reserva de marcha.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-watchmaking-1931_oysterperpetual_2212th_0002-landscape.jpg",
      mobile: "/imgRolex/banners/6627ad3f654e96627ab6833e4a_rolex-watchmaking-1931oysterperpetual2212th0002-portrait.webp",
      alt: "Imagen",
    },
  },
  bodyText4: {
    heading: "Más que una certificación, un estado de ánimo",
    bodyStrong: "",
    bodyRest:
      "Por extensión, todos los componentes de un reloj Rolex se pueden describir como «superlativos». De hecho, cada uno de ellos está sujeto a continuos y rigurosos controles, desde su diseño hasta su ensamblaje final. Por tanto, el término «Superlative» se refiere a mucho más que una certificación cronométrica. También expresa un estado de ánimo que impregna cada departamento de la empresa e impulsa a todas las personas que trabajan para Rolex, independientemente de su cargo.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-watchmaking-wmfinalassembly_2212jb_0001_v2-landscape.jpg",
      mobile: "/imgRolex/banners/6627ad7a572d56627ab6f46aa3_rolex-watchmaking-wmfinalassembly2212jb0001v2-portrait.webp",
      alt: "Imagen",
    },
  },
  video3: {
    youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wclKW2Gprco?si=1Ijgnan9L2fwuBep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "imagen",
    },
  },
  bodyText5: {
    heading: "Innovación en movimiento",
    bodyStrong: "",
    bodyRest:
      "El rendimiento excepcional se hizo posible gracias al esfuerzo humano e industrial constante, basado en un permanente cuestionamiento de lo que se ha aprendido y la constante mejora de técnicas, herramientas y pruebas. Esta innovación es inherente a la marca, como lo demuestran las más de 600 solicitudes de patentes presentadas por Rolex desde su creación.",
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
    },
  },
  banner3: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-watchmaking-wmrd_2212jb_0002-landscape-scaled.jpg",
      mobile: "imgRolex/banners/6627ade0176f66627ab73a3279_rolex-watchmaking-wmrd2212jb0002-portrait.webp",
      alt: "imagen",
      style: "light",
    }
  ],
  bodyText6: {
    heading: "Integración de todas las áreas del conocimiento",
    bodyStrong: "",
    bodyRest:
      "Al integrar progresivamente todas las áreas del savoir-faire relojero en su manufactura, Rolex es capaz de imponer sus propias reglas y perpetuar su búsqueda de la excelencia. La elección de autonomía ha conformado la identidad de la marca, que vive en la encrucijada de la noble tradición y la tecnología vanguardista. Esto se traduce en sus cuatro sedes de fabricación, todas situadas en Suiza, donde reúnen a más de 9000 colaboradores.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "/imgRolex/banners/rolex-watchmaking-wmpolish_2212jb_0005-landscape.jpg",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "",
      mobile: "",
      alt: "Imagen",
    },
  },
  banner4: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-watchmaking-2023-watchmaking-features-oyster-case-still_digital_master_rgb-landscape-scaled.jpg",
      mobile: "imgRolex/banners/6627ae3d178306627ab6979700_rolex-watchmaking-2023-watchmaking-features-oyster-case-stilldigitalmasterrgb-portrait.webp",
      alt: "imagen",
      style: "light",
    }
  ],
};

export default function RolexPage() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText5} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText6} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner4} />
    </section>
  );
}
