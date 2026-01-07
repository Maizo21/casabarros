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
  breadcrumb: "Procedimiento de mantenimiento Rolex"
};

const ROLEX_PAGE_CONTENT = {
  banner: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-procedure-cover_2301_rolex_sav_retailers_175_controle-final_fermoir_v2-landscape-scaled.jpg",
      mobile: "imgRolex/banners/662fca0acc23d662fc9fc276b5_ro18f81jpg.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  introduction: {
    heading: "Procedimiento de mantenimiento de los relojes Rolex en Casa Barros",
    bodyStrong: "Casa Barros se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex en Chile,",
    bodyRest:
      "autorizados para vender y realizar el mantenimiento de los relojes Rolex.",
    cta: {label: "", href: ""},
  },
  video: {
    youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xZOhQcFS--w?si=nFa7YJ57KS9yM7Qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "imagen",
    },
  },
  bodyText: {
    heading: "Examen del reloj",
    bodyStrong: "",
    bodyRest:
      "Su reloj es minuciosamente examinado por un relojero, que estima las operaciones que hay que realizar y establece un presupuesto. Una vez aceptado, comienza el servicio de mantenimiento.",
    cta: {label: "", href: "#"},
    className: "",
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
  bodyText2: {
    heading: "Preparación del servicio",
    bodyStrong: "",
    bodyRest:
      "El movimiento, todavía coronado por la esfera y las agujas, se extrae de la caja, de la que se ha desprendido previamente el brazalete. Movimiento, caja y brazalete se tratarán de forma separada durante el proceso de mantenimiento, antes de volver a montarlos al concluir el servicio.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_19_eclatement_enlevement-du-cadran_v2-landscape.jpg",
      mobile: "/imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_19_eclatement_enlevement-du-cadran_v2-landscape.jpg",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText3: {
    heading: "Desmontaje del movimiento",
    bodyStrong: "",
    bodyRest:
      "El movimiento se desmonta por completo y todos los componentes se examinan con el mayor de los cuidados. Los que no cumplen con los criterios de Rolex se sustituyen sistemáticamente.",
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
      desktop: "imgRolex/banners/rolex-servicing-procedure-sav_1910dh_005-landscape-scaled.jpg",
      mobile: "imgRolex/banners/662fcb216f72b662fcb10e380c_rolex-servicing-procedure-sav1910dh005-portrait.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText4: {
    heading: "Lavado de los componentes del movimiento",
    bodyStrong: "",
    bodyRest:
      "Los diferentes componentes se limpian mediante baños de ultrasonidos, de tal modo que se eliminan las impurezas hasta en las zonas de más difícil acceso.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_29_lavage-mouvement_cm3_v2-landscape.jpg",
      mobile: "/imgRolex/banners/662fcb547617e662fcb418a058_ro7d3c1jpg.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText5: {
    heading: "Montaje del movimiento y lubricación",
    bodyStrong: "",
    bodyRest:
      "Los componentes se secan y, a continuación, el movimiento se vuelve a montar por completo y se lubrica.<br /><br />El relojero ajusta una primera vez la precisión del movimiento de acuerdo con los criterios de la marca.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_40_assemblage-mouvement_pose-oscillateur_v1-landscape.jpg",
      mobile: "/imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_40_assemblage-mouvement_pose-oscillateur_v1-landscape.jpg",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText6: {
    heading: "Acabado de la caja y del brazalete",
    bodyStrong: "",
    bodyRest:
      "La caja se desmonta por completo y la carrura, el bisel, el fondo y el brazalete se pulen o satinan, en función del acabado original. Estas sutiles operaciones exigen destreza y delicadeza.",
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
  banner3: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_33_polissage_boite_fond_v1-landscape-scaled.jpg",
      mobile: "imgRolex/banners/662fcc5d26d9e662fcc4f2daa8_ro69531jpg.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText7: {
    heading: "Montaje de la caja",
    bodyStrong: "",
    bodyRest:
      "Una vez reavivados y limpios, los elementos de la caja se vuelven a montar y las juntas de hermeticidad se reemplazan. Se pone a prueba la hermeticidad de la caja.",
    cta: {label: "", href: "#"},
    className: "odd no-margin-top",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-procedure-2301_rolex_sav_corporate_61_controle-etancheite_etancheiscope_v3-landscape.jpg",
      mobile: "/imgRolex/banners/rolex-servicing-procedure-2301_rolex_sav_corporate_61_controle-etancheite_etancheiscope_v3-landscape.jpg",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText8: {
    heading: "Encajado del movimiento",
    bodyStrong: "",
    bodyRest:
      "El movimiento, sobre el cual se han vuelto a montar la esfera y las agujas, se recoloca en la caja después de que el relojero haya efectuado un riguroso control técnico y estético de todos los elementos.",
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
  banner4: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_47_assemblage_chasser-les-aiguilles_v1-landscape-scaled.jpg",
      mobile: "imgRolex/banners/662fccdd83451662fccd0a887b_rolex-4jpg.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText9: {
    heading: "Prueba de precisión",
    bodyStrong: "",
    bodyRest:
      "Tras el encajado del movimiento, se evalúa una vez más la precisión cronométrica. El relojero procede a los últimos ajustes para que cumpla con las exigencias de Rolex.<br /><br />A continuación, el relojero enrosca el fondo de la caja y entonces el reloj se pone a prueba, al menos durante veinticuatro horas. Esta prueba, propia de la marca, permite verificar el buen funcionamiento de su movimiento.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_54_controle-performance-emboite_micro-stella_v1-landscape.jpg",
      mobile: "/imgRolex/banners/662fcd13763c4662fccff17f79_rof2a91jpg.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText10: {
    heading: "Prueba de hermeticidad",
    bodyStrong: "",
    bodyRest:
      "La hermeticidad del reloj se controla con ayuda de una prueba realizada en el agua bajo presión y, a continuación, se vuelve a montar el brazalete en la caja.",
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
  banner5: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_66_controle-etancheite_fathometre_v2-landscape-scaled.jpg",
      mobile: "imgRolex/banners/662fcd64b6037662fcd4f97ccf_rof1f01jpg.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText11: {
    heading: "Control final",
    bodyStrong: "",
    bodyRest:
      "El reloj ya está preparado para un control final. Durante el mismo, el relojero comprueba que sus funciones estén perfectamente operativas y que su estética sea irreprochable.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-procedure-2234_rolex-sav_corporate_72_controle-final_fermoir_v1-landscape.png",
      mobile: "/imgRolex/banners/662fcdc1de020662fcd817a1ca_rolex-1png.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText12: {
    heading: "Devolución del reloj",
    bodyStrong: "",
    bodyRest:
      "Al concluir el servicio, se le devuelve el reloj en un estuche protector. El servicio tiene una garantía internacional de una duración de dos años que cubre tanto las piezas como la mano de obra.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-procedure-showroom_19-08dh_002-landscape.jpg",
      mobile: "/imgRolex/banners/rolex-servicing-procedure-showroom_19-08dh_002-landscape.jpg",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText13: {
    heading: "Un servicio de primer nivel",
    bodyStrong: "",
    bodyRest:
      "Rolex se compromete plenamente a ofrecerles a sus clientes un servicio posventa de primer nivel. Gracias a la exigencia y al savoirfaire de nuestros relojeros, su reloj Rolex puede mantenerse en el tiempo conservando una excelente fiabilidad y, al mismo tiempo, un brillo irreprochable.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-servicing-sav_barcelona_tousrolexboutique_2019gv_1124-landscape-1200x750.jpg",
      mobile: "/imgRolex/banners/6627b0544b2a76627af4d041d6_rolex-servicing-savbarcelonatousrolexboutique2019gv1124-portrait.webp",
      alt: "Imagen",
      className: "",
    },
  },
  banner6: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-servicing-procedure-manippos_2002pd_001-landscape-scaled.jpg",
      mobile: "imgRolex/banners/662fcec547aa3662fceb55c499_rolex-servicing-procedure-manippos2002pd001-portrait.webp",
      alt: "imagen",
      style: "light",
    },
  ],
};

export default function RolexPage() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText5} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText6} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText7} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText8} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner4} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText9} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText10} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner5} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText11} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText12} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText13} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner6} />
    </section>
  );
}
