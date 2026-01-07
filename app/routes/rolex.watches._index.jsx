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
  breadcrumb: "Relojes Rolex"
};

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/discover-rolex-watches-m126333_0010_1802jva_002-1536x512.jpg",
      mobile: "imgRolex/banners/rolex-watches-m126333-0010_1606jva_006-portrait.jpg",
      alt: "imagen",
      style: "light",
    }
  ],
  introduction: {
    heading: "Relojes Rolex en Casa Barros en Chile",
    bodyStrong: "Esta selección de modelos Rolex proviene del catálogo oficial y no representa las existencias disponibles en la joyería.",
    bodyRest:
      "Si quiere realizar una consulta sobre algún reloj en particular, no dude en ponerse en contacto con nosotros.",
    cta: {label: "", href: ""},
  },
  pushSections: [
    {
      title: "Nuevos modelos 2025",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/rolex-new-watches-2025-the-land-dweller-hub-cover_m127334-0001_2501fj_003-landscape.jpg",
            mobile: "/imgRolex/banners/rolex-watches-watches-new-watches-2025-the-land-dweller_m127334-0001_2501fj_003-portrait.jpg",
            alt: "imagen",
          },
          eyebrow: "Nuevos modelos 2025",
          heading: "Ampliar horizontes",
          body: "",
          cta: {label: "Más información", href: "/rolex/new-watches"},
        },
      ],
    },
  ],
  grid: {
    title: "Relojes clásicos",
    items: [
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-land-dweller.jpg",
          mobile: "/imgRolex/banners/rolex-watches-land-dweller.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Land-Dweller",
        link: "watches/land-dweller",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-day-date.jpg",
          mobile: "/imgRolex/banners/rolex-watches-day-date.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Day-Date",
        link: "watches/day-date",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-sky-dweller.jpg",
          mobile: "/imgRolex/banners/rolex-watches-sky-dweller.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Sky Dweller",
        link: "watches/sky-dweller",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-lady-datejust.jpg",
          mobile: "/imgRolex/banners/rolex-watches-lady-datejust.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Lady-datejust",
        link: "watches/lady-datejust",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-datejust.jpg",
          mobile: "/imgRolex/banners/rolex-watches-datejust.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Datejust",
        link: "watches/datejust",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-oyster-perpetual.jpg",
          mobile: "/imgRolex/banners/rolex-watches-oyster-perpetual.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Oyster Perpetual",
        link: "watches/oyster-perpetual",
      },
    ],
  },
  grid2: {
    title: "Relojes Profesionales",
    items: [
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-cosmograph-daytona.jpg",
          mobile: "/imgRolex/banners/rolex-watches-cosmograph-daytona.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Cosmograph Daytona",
        link: "watches/cosmograph-daytona",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-submariner.jpg",
          mobile: "/imgRolex/banners/rolex-watches-submariner.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Submariner",
        link: "watches/submariner",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-sea-dweller.jpg",
          mobile: "/imgRolex/banners/rolex-watches-sea-dweller.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Sea-Dweller",
        link: "watches/sea-dweller",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-deepsea.jpg",
          mobile: "/imgRolex/banners/rolex-watches-deepsea.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Deepsea",
        link: "watches/deepsea",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-gmt-master-II.jpg",
          mobile: "/imgRolex/banners/rolex-watches-gmt-master-II.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "GMT-Master-II",
        link: "watches/gmt-master-ii",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-yacht-master.jpg",
          mobile: "/imgRolex/banners/rolex-watches-yacht-master.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Yacht-Master",
        link: "watches/yacht-master",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-collections-keep-exploring-explorer-portrait.jpg",
          mobile: "/imgRolex/banners/rolex-collections-keep-exploring-explorer-portrait.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Explorer",
        link: "watches/explorer",
      },
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-air-king.jpg",
          mobile: "/imgRolex/banners/rolex-watches-air-king.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "Air-King",
        link: "watches/air-king",
      },
    ],
  },
  grid3: {
    title: "Perpetual",
    items: [
      {
        colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
        image: {
          desktop: "/imgRolex/banners/rolex-watches-1908.jpg",
          mobile: "/imgRolex/banners/rolex-watches-1908.jpg",
          alt: "imagen",
        },
        eyebrow: "Rolex",
        heading: "1908",
        link: "watches/1908",
      },
    ],
  },
};

export default function RolexPage() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
      <GridRolex grid={ROLEX_PAGE_CONTENT.grid} />
      <GridRolex grid={ROLEX_PAGE_CONTENT.grid2} />
      <GridRolex grid={ROLEX_PAGE_CONTENT.grid3} />
    </section>
  );
}
