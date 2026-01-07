// app/routes/rolex.world-of-rolex._index.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import PushRolex from "~/rolex/PushRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";

export const meta = () => [{ title: "El mundo de Rolex | Casa Barros" }];

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "/rolex/collections/oyster-perpetual",
      desktop: "imgRolex/banners/rolex-generic-store-asset-cover2-landscape.jpg",
      mobile: "imgRolex/banners/rolex-generic-store-asset-cover2-portrait.jpg",
      alt: "imagen",
      style: "light",
    },
  ],
  introduction: {
    heading: "Rolex en Casa Barros",
    bodyStrong: "Casa Barros se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex en Chile,",
    bodyRest:
      "autorizados para vender y realizar el mantenimiento de los relojes Rolex.",
    cta: {label: "", href: ""},
  },
  pushSections: [
    {
      title: "",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push1-landscape.jpg",
            mobile: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-1-portrait.jpg",
            alt: "imagen",
          },
          eyebrow: "",
          heading: "Nuestro Showroom Rolex",
          body: "",
          cta: {label: "Más información", href: "/rolex/rolex-at-casa-barros/rolex-showroom"},
        },
      ],
    },
  ],
  pushSections2: [
    {
      title: "",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-2-landscape.jpg",
            mobile: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-2-portrait.jpg",
            alt: "imagen",
          },
          eyebrow: "",
          heading: "Nuestro equipo Rolex",
          body: "",
          cta: {label: "Más información", href: "/rolex/rolex-at-casa-barros/rolex-team"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-3-landscape.jpg",
            mobile: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-3-portrait.jpg",
            alt: "imagen",
          },
          eyebrow: "",
          heading: "Nuestra historia Rolex",
          body: "",
          cta: {label: "Más información", href: "/rolex/rolex-at-casa-barros/rolex-history"},
        },
      ],
    },
  ],
};

export default function RolexAtCasaBarros() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections2} />
    </section>
  );
}
