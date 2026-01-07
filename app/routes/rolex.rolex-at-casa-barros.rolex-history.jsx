// app/routes/rolex.world-of-rolex._index.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import PushRolex from "~/rolex/PushRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import ImagesRolex from "~/rolex/ImagesRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import QuoteRolex from "~/rolex/QuoteRolex";

export const meta = () => [{ title: "El mundo de Rolex | Casa Barros" }];

export const handle = {
  breadcrumb: "Nuestra historia Rolex"
};

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "/rolex/collections/oyster-perpetual",
      desktop: "imgRolex/banners/rolex-generic-store-asset-cover3-landscape.jpg",
      mobile: "imgRolex/banners/rolex-generic-store-asset-cover3-portrait.jpg",
      alt: "imagen",
      style: "light",
    },
  ],
  introduction: {
    heading: "Nuestra historia Rolex",
    bodyStrong: "Nunc interdum tempus nibh, vel consectetur nisi aliquam vel. Nunc pulvinar sem in venenatis maximus. Quisque et urna urna.",
    bodyRest:
      "<br />Fusce eu dui sed mauris porttitor ultrices. Donec ullamcorper scelerisque ultricies. Ut pulvinar congue dolor, ut porttitor ligula fringilla at.",
    cta: {label: "", href: ""},
  },
  images: [
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
      image: {
        desktop: "/imgRolex/banners/rolex-generic-history-asset-fake1-desktop.jpg",
        mobile: "/imgRolex/banners/rolex-generic-history-asset-fake1-mobile.jpg",
        alt: "imagen",
      },
    },
  ],
  bodyText: {
    heading: "Nulla tristique sed mauris id vestibulum. Sed mi leo",
    bodyStrong: "",
    bodyRest:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac mi sed felis maximus ultrices. Aenean volutpat felis vel sollicitudin sodales. Suspendisse lorem nibh, dignissim in sapien nec, mattis congue diam. Donec bibendum sed nibh vitae luctus. Cras aliquet lectus ante, in interdum libero congue eget.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-generic-team-asset-fake2-desktop.jpg",
      mobile: "/imgRolex/banners/rolex-generic-team-asset-fake2-desktop.jpg",
      alt: "Image",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6"
    },
  },
  bodyText2: {
    heading: "Nulla tristique sed mauris id vestibulum. Sed mi leo",
    bodyStrong: "",
    bodyRest:
      "Maecenas aliquet lorem sed mi commodo placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed venenatis nibh. Vivamus nibh justo, placerat id luctus quis, hendrerit at tortor. Sed sit amet justo arcu. Ut ut justo dapibus, molestie augue vitae, volutpat odio. Vestibulum blandit tortor et dignissim tempor.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/66856ba200651_6684068574decworld-of-rolex-a-voyage-into-the-world-of-rolex-push03.webp",
      mobile: "/imgRolex/banners/66856ba37a792_6684068574decworld-of-rolex-a-voyage-into-the-world-of-rolex-push03-1.webp",
      alt: "Imagen",
      className: ""
    },
  },
};

export default function RolexAtCasaBarros() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
    </section>
  );
}
