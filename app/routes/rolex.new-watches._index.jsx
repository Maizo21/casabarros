// app/routes/rolex.new-watches._index.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import PushRolex from "~/rolex/PushRolex";

export const meta = () => [{ title: "Nuevos Relojes Rolex | Casa Barros - Distribuidor Oficial Rolex" }];

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-landscape/rolex-new-watches-2025-the-land-dweller-hub-cover_m127334-0001_2501fj_003-landscape.jpg",
      mobile: "imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-portrait/rolex-new-watches-2025-the-land-dweller-hub-cover_m127334-0001_2501fj_003-portrait.jpg",
      alt: "Nuevos Relojes Rolex",
      style: "light",
    }
  ],
  introduction: {
    heading: "Nuevos modelos Rolex 2025<br />Casa Barros",
    bodyStrong: "Rolex presenta sus novedades, fruto de una imaginación en perpetuo movimiento que impregna toda la manufactura.",
    bodyRest:
      "Esta singular visión de la relojería lleva la innovación a todos los ámbitos del savoir‑faire. Del movimiento a la caja y el brazalete, del diseño a la elección de los materiales, las últimas creaciones de Rolex hacen gala de una inventiva y un rigor constantemente renovados, de una voluntad de rebasar siempre los límites de la excelencia.<br />Estos relojes son producto de una serie de logros relojeros que amplían el espectro de posibilidades y esbozan nuevas perspectivas.",
    cta: {label: "", href: ""},
  },
  pushSections: [
    {
      title: "",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-landscape/rolex-new-watches-2025-land-dweller_m127334-0001_2501fj_001-landscape.jpg",
            mobile: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-portrait/rolex-new-watches-2025-land-dweller_m127334-0001_2501fj_001_portrait.jpg",
            alt: "Land-Dweller",
          },
          eyebrow: "Nuevos Modelos 2025",
          heading: "Land-Dweller",
          cta: {label: "", href: "/rolex/watches/land-dweller"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-landscape/rolex-new-watches-2025-gmt-master-ii_m126729vtnr-0001_2501stojan_001-landscape.jpg",
            mobile: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-portrait/rolex-new-watches-2025-gmt-master-ii_m126729vtnr-0001_2501stojan_001-portrait.jpg",
            alt: "GMT-Master II",
          },
          eyebrow: "Nuevos Modelos 2025",
          heading: "GMT-Master II",
          cta: {label: "", href: "/rolex/watches/gmt-master-ii"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-landscape/rolex-new-watches-2025-oyster-perpetual_m276200-0008_2501stojan_001-landscape.jpg",
            mobile: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-portrait/rolex-new-watches-2025-oyster-perpetual_m276200-0008_2501stojan_001-portrait.jpg",
            alt: "Oyster Perpetual",
          },
          eyebrow: "Nuevos Modelos 2025",
          heading: "Oyster Perpetual",
          cta: {label: "", href: "/rolex/watches/oyster-perpetual"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-landscape/rolex-new-watches-2025-perpetual-1908_m52508-0008_2501stojan_001-landscape.jpg",
            mobile: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-portrait/rolex-new-watches-2025-perpetual-1908_m52508-0008_2501stojan_001-portrait.jpg",
            alt: "1908",
          },
          eyebrow: "Nuevos Modelos 2025",
          heading: "1908",
          cta: {label: "", href: "/rolex/watches/1908"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-landscape/rolex-new-watches-2025-datejust-31_m278288rbr-0041_2501stojan_001-landscape.jpg",
            mobile: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-portrait/rolex-new-watches-2025-datejust-31_m278288rbr-0041_2501stojan_001-portrait.jpg",
            alt: "Datejust",
          },
          eyebrow: "Nuevos Modelos 2025",
          heading: "Datejust",
          cta: {label: "", href: "/rolex/watches/datejust"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-landscape/rolex-new-watches-2025-new-dials_m126518ln-0014_2501stojan_001-landscape.jpg",
            mobile: "/imgRolex/rolex-new-watches-2025-page-assets/1-rolex-new-watches-2025-page-assets-hub/rolex-new-watches-2025-hub-assets-portrait/rolex-new-watches-2025-new-dials_m126518ln-0014_2501stojan_001-portrait.jpg",
            alt: "Esferas inéditas",
          },
          eyebrow: "Nuevos Modelos 2025",
          heading: "Esferas inéditas",
          cta: {label: "", href: "/rolex/watches/exclusive-dials"},
        },
      ],
    },
  ],
};

export default function RolexNewWatchesIndexPage() {
  return (
    <>
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} className="newWatches" />
    </>
  );
}
