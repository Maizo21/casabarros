// app/routes/rolex.world-of-rolex.sailgp-rolex.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import PushRolex from "~/rolex/PushRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import ImagesRolex from "~/rolex/ImagesRolex";
import ArticleIntroduction from "~/rolex/ArticleIntroduction";
import VideoRolex from "~/rolex/VideoRolex";
import QuoteRolex from "~/rolex/QuoteRolex";

export const meta = () => [{ title: "Rolex SailGP Championship | El mundo de Rolex | Casa Barros" }];

export const handle = {
  breadcrumb: "SailGP Rolex"
};

const ROLEX_PAGE_CONTENT = {
  articleIntro: {
    heading: "Viaje al corazón del universo Rolex",
    subheading:
      "Hans Wilsdorf estaba íntimamente convencido de la capacidad del ser humano para innovar con la excelencia como objetivo.",
    meta: "Publicado el 9 de abril de 2024",
  },
  images: [
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-10 rolex-col-lg-10",
      image: {
        desktop: "/imgRolex/banners/rolex-history-wmfinalassembly_2201fl_004-landscape-1200x750.webp",
        mobile: "/imgRolex/banners/684fcdc444d4e684fcdb01442b_rolex-history-wmfinalassembly2201fl004-portrait.webp",
        alt: "imagen",
      },
    },
  ],
  bodyText: {
    heading: "",
    bodyStrong: "",
    bodyRest:
      "Casi 120 años después de la creación de la marca, el espíritu del fundador está más presente que nunca, tanto en lo que afecta a la fabricación de relojes como a los compromisos de Rolex en todo el mundo.",
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
  quote: {
    quote:
      "«En una primera impresión las dificultades parecían insalvables»",
    author: "",
  },
  bodyText2: {
    heading: "Compromiso con la excelencia",
    bodyStrong: "",
    bodyRest:
      "Desde sus orígenes, la historia de Rolex ha estado marcada por el anhelo de perfección y el deseo de ir siempre más allá.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/662fb1b91974a662fab1618ff0_rolex-history-superlative-certified19jva012-landscape.webp",
      mobile: "/imgRolex/banners/662fb1b91974a662fab1618ff0_rolex-history-superlative-certified19jva012-landscape.webp",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText3: {
    heading: "",
    bodyStrong: "",
    bodyRest:
      "A principios del siglo pasado, un emprendedor visionario, entonces radicado en Londres, está a punto de triunfar con tan solo su voluntad por bandera. ¿Cuál es su empeño? Dar a conocer al mundo relojero de la época una firma todavía ignorada: Rolex. Un nombre inédito, inventado en 1908, que en pocos decenios acabaría por convertirse en una de las marcas más famosas del mundo. «En una primera impresión las dificultades parecían insalvables»: con estas palabras recordaba Hans Wilsdorf en sus memorias los orígenes de su empresa.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/662fb201e258f662fb1f8df11b_ro3d471jpg.webp",
      mobile: "/imgRolex/banners/662fb201e258f662fb1f8df11b_ro3d471jpg.webp",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText4: {
    heading: "",
    bodyStrong: "",
    bodyRest:
      "En aquellos momentos, como empresario no poseía demasiados bienes, pero como hombre poseía algunas cualidades inestimables: visión, perseverancia y una capacidad de trabajo fuera de lo común. Huérfano desde los 12 años, sin nada de lo que echar mano que no fuera su determinación para superar todos los obstáculos, Hans Wilsdorf inventará el primer reloj de pulsera hermético de cuerda automática por rotor Perpetual del mundo. Un reloj que, a día de hoy, es una referencia en materia de calidad y de prestigio.",
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
      desktop: "imgRolex/banners/rolex-history-1910_early-rolex-model_191rg_001-landscape-scaled.webp",
      mobile: "imgRolex/banners/668ffaa2e4869668ffa968d5e2_corners-banner-1910early-rolex-model191rg001-portraitjpeg.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText5: {
    heading: "",
    bodyStrong: "",
    bodyRest:
      "«Demasiado complicado, demasiado frágil, demasiado fuera de lugar», le habían repetido hasta la saciedad. Gracias a sus profundas convicciones, Hans Wilsdorf logró, con su audacia y pese a todo, imponer el reloj Rolex —el Oyster Perpetual— como el arquetipo del reloj de pulsera hermético de cuerda automática, preciso y robusto, capaz de resistir a cualquier situación. Pero él no fue tan solo el visionario que dio a los relojes Rolex sus características técnicas y estéticas fundamentales. A su constante búsqueda de la perfección se sumaban una gran generosidad y una fe inquebrantable en el potencial del ser humano.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-history-datejust-m126231-0016_1801ac_009-landscape-1536x1083.webp",
      mobile: "/imgRolex/banners/rolex-history-datejust-m126231-0016_1801ac_009-landscape-1536x1083.webp",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText6: {
    heading: "La suma de múltiples savoir-faire",
    bodyStrong: "",
    bodyRest:
      "Como manufactura independiente y vertical, Rolex dispone de un aparato industrial que agrupa un savoir-faire incuantificable. Relojeros, ingenieros, diseñadores y otros especialistas colaboran estrechamente para concebir y, posteriormente, fabricar los relojes. La cultura de la empresa se basa, ante todo, en los valores humanos que ponen el savoir-faire y las relaciones sociales en el centro de las diferentes actividades.<br /><br />Rolex representa numerosos oficios distintos, encarnados por hombres y mujeres especialistas en sus respectivos ámbitos. La marca diseña y fabrica la mayoría de sus componentes esenciales, desde la fundición de las aleaciones de oro al ensamblaje del movimiento, la caja, la esfera y el brazalete, pasando por el mecanizado, el acabado y el engaste. Además, pone a disposición del mundo entero sus diferentes savoir-faire gracias a una red y a un servicio posventa excepcionales.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-history-18ra_v2_009-2234_rolex-sav_retailers_175_controle-final_fermoir_v1-landscape-1200x750.webp",
      mobile: "/imgRolex/banners/668ffb0541d67668ffaf6dfbe3_corners18rav2009-2234rolex-savretailers175controle-finalfermoirv1-portraitjpeg.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText7: {
    heading: "",
    bodyStrong: "",
    bodyRest:
      "Y para garantizar que ese savoir-faire no desaparezca nunca, Rolex dispone de su propio Centro de Formación, único en su género. Este centro, radicado en Ginebra y dedicado a potenciar nuevos talentos y a la capacitación de sus empleados, ofrece formación continua a todos sus colaboradores y a los directivos de la empresa y garantiza la formación de los aprendices. Espacio donde se comparten conocimientos y experiencias, tiene como misión asegurar el relevo para el día de mañana conforme a los valores de la marca.<br /><br />Entre los Testimoniales Rolex asociados con el Datejust, homenajeamos a la leyenda suiza del tenis Roger Federer, la tenista polaca Iga Świątek, la esquiadora suiza Lara Gut-Behrami y al cantante canadiense Michael Bublé.",
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
  banner2: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-history-training-centre_18ra_v3_002-landscape-scaled.webp",
      mobile: "imgRolex/banners/668ffb926a408668ffb7bc1067_corners-training-centre18rav3002-portraitjpeg.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText8: {
    heading: "Un reloj que no se parece a los demás",
    bodyStrong: "",
    bodyRest:
      "La colección Oyster Perpetual se construyó a partir del éxito del Oyster original, presentado en 1926. El Oyster, el primer reloj de pulsera hermético del mundo —con una arquitectura de caja patentada—, desempeñó un papel pionero en la evolución del reloj de pulsera moderno. En el transcurso de los años, fue incorporando otras muchas innovaciones —por ejemplo, la cuerda automática por rotor Perpetual (1931)— que han definido la identidad de los modelos de la colección y han forjado la reputación de excelencia de Rolex que, entre otras cosas, se fundamenta en la precisión cronométrica de sus relojes y en su fiabilidad.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-history-oyster-pertetual-original_0749_003-landscape-1200x750.webp",
      mobile: "/imgRolex/banners/668ffbf50064d668ffbe932ea0_corners-oyster-pertetual-original0749003-portraitjpeg.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText9: {
    heading: "",
    bodyStrong: "",
    bodyRest:
      "El Oyster ha ido incorporando gradualmente a su colección nuevas funcionalidades y tecnologías innovadoras. Los fundamentos de este arquetipo relojero se encuentran en todos los modelos, que comparten una identidad visual. La colección cuenta con doce gamas repartidas en dos categorías: relojes Clásicos como el Datejust y el Day-Date, y relojes Profesionales como el Explorer y el GMT-Master II.<br /><br />En tanto que marca pionera del reloj de pulsera moderno, Rolex se encuentra en el origen de múltiples e importantes adelantos en el sector de la relojería y ha registrado más de 600 patentes en el transcurso de su historia.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-history-explorer-m226570-0001_2205jva_001-landscape-1609x2048.webp",
      mobile: "/imgRolex/banners/rolex-history-explorer-m226570-0001_2205jva_001-landscape-1609x2048.webp",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  pushSections: [
    {
      title: "",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/66a226edbf181_rolex-collectionbanner-datejust-m126234-00512210jva001.webp",
            mobile: "/imgRolex/banners/66a2270686faa_rolex-collectionbanner-datejust-m126234-00512210jva001-portrait.webp",
            alt: "imagen",
          },
          eyebrow: "Rolex Datejust",
          heading: "Una fecha para recordar",
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
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <QuoteRolex content={ROLEX_PAGE_CONTENT.quote} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText5} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText6} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText7} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText8} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText9} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
    </section>
  );
}
