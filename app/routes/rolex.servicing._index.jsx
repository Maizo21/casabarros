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
  breadcrumb: "Mantenimiento Rolex"
};

const ROLEX_PAGE_CONTENT = {
  banner: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-cover_sav_1910dh_001-landscape-scaled.jpg",
      mobile: "imgRolex/banners/6627af60d429a6627af4900189_rolex-servicing-coversav1910dh001-portrait.webp",
      alt: "imagen",
      style: "light",
    }
  ],
  introduction: {
    heading: "Mantenimiento y reparación de los relojes Rolex en Casa Barros",
    bodyStrong: "Los relojes Rolex están diseñados y creados para perdurar.<br /><br />",
    bodyRest:
      "Desde el diseño de un reloj Rolex hasta el momento en el que sale del taller, cada paso de su desarrollo y de su fabricación sigue un solo requisito crítico: la calidad. Es por ello que cada uno de los relojes estampados con la corona está preparado para cumplir plenamente con sus funciones sin límite de tiempo, transmitirse de una generación a la siguiente y vivir, así, varias vidas.",
    cta: {label: "", href: ""},
  },
  images: [
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-9 rolex-col-lg-9",
      image: {
        desktop: "/imgRolex/banners/RO7C681-1536x722.jpg",
        mobile: "/imgRolex/banners/6627af95f0be36627af4e88215_rolex-3jpg.webp",
        alt: "imagen",
      },
    }
  ],
  bodyText: {
    heading: "Déjese aconsejar por un experto",
    bodyStrong: "",
    bodyRest:
      "Al pasar muchos años entre un servicio y otro, su reloj merece la mayor de las atenciones. Como Distribuidor Oficial Rolex, Casa Barros puede hacerse cargo de su reloj Rolex para su servicio. Gracias a nuestros conocimientos, destreza y savoir-faire, estamos a su disposición para informarle acerca de las características técnicas de los relojes Rolex.",
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
  bodyText2: {
    heading: "Mantenimiento Rolex en Casa Barros",
    bodyStrong: "",
    bodyRest:
      "Casa Barros forma parte de nuestra red mundial de relojeros formados por Rolex. El procedimiento del servicio Rolex está diseñado para garantizar que todas y cada una de las piezas que abandonan un taller Rolex cumplan con sus especificaciones estéticas y funcionales originales.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-2234_rolex-sav_retailers_104_estimation_verification_no_de_serie_boite_v5-landscape-1200x750.jpg",
      mobile: "/imgRolex/banners/6627b01532d476627af460ecaa_rolex-servicing-2234rolex-savretailers104estimationverificationnodeserieboitev5-portrait.webp",
      alt: "Imagen",
    },
  },
  bodyText3: {
    heading: "Su centro de servicio autorizado",
    bodyStrong: "",
    bodyRest:
      "Nuestros centros, a la vanguardia de la tecnología, cuentan con relojeros que han recibido formación basada en unos estrictos criterios de excelencia que Rolex evalúa con regularidad. Desde el ajuste de la longitud del brazalete a la reparación completa, todas las operaciones relacionadas con el mantenimiento de un reloj Rolex pueden confiarse a Casa Barros.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "/imgRolex/banners/rolex-plaques-300x150-es.jpg",
      mobile: "/imgRolex/banners/rolex-plaques-300x150-es.jpg",
      alt: "Logo",
      className: "logo-rolex-before",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-sav_barcelona_tousrolexboutique_2019gv_1124-landscape-1200x750.jpg",
      mobile: "/imgRolex/banners/6627b0544b2a76627af4d041d6_rolex-servicing-savbarcelonatousrolexboutique2019gv1124-portrait.webp",
      alt: "Imagen",
    },
  },
  bodyText4: {
    heading: "Procedimiento del servicio Rolex",
    bodyStrong: "",
    bodyRest:
      "El procedimiento del servicio Rolex está diseñado para asegurar que todas y cada una de las piezas que abandonan un taller Rolex cumplen con sus especificaciones estéticas y funcionales originales. Cada movimiento queda completamente ajustado, y cada caja y brazalete son meticulosamente restaurados para recuperar su lustre. La precisión y la hermeticidad son sometidas a pruebas estrictas para garantizar el nivel de calidad y fiabilidad que se espera de un reloj Rolex.",
    cta: {label: "Descubra más", href: "/rolex/servicing/the-servicing"},
    className: "",
  },
  banner2: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-2301_rolex_sav_retailers_175_controle-final_fermoir_v2-landscape-scaled.jpg",
      mobile: "imgRolex/banners/6627b0e7a61ac6627af4795fdf_rolex-servicing-2301rolexsavretailers175controle-finalfermoirv2-portrait.webp",
      alt: "imagen",
      style: "light",
    }
  ],
  bodyText5: {
    heading: "La garantía de servicio de dos años",
    bodyStrong: "",
    bodyRest:
      "Después de un servicio completo, su reloj Rolex queda cubierto por una garantía de servicio de dos años. Esta garantía excluye cualquier daño o deterioro que resulte de un accidente o de una utilización inapropiada del reloj. Toda intervención realizada por terceras personas no autorizadas por Rolex o toda adición de piezas o accesorios no fabricados por Rolex anula esta garantía.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-rolex_service_card_front_v2-landscape-1200x750.jpg",
      mobile: "/imgRolex/banners/6627b113337b06627af4a5af8e_rolex-servicing-rolexservicecardfrontv2-portrait.webp",
      alt: "Imagen",
    },
  },
  banner3: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-sav_1910dh_005-landscape-scaled.jpg",
      mobile: "imgRolex/banners/6627b14e4cd1f6627af4b9a493_rolex-servicing-sav1910dh005-portrait.webp",
      alt: "imagen",
      style: "light",
    }
  ],
};

export default function RolexPage() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText5} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner3} />
    </section>
  );
}
