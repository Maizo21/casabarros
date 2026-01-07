// app/routes/rolex.world-of-rolex._index.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import PushRolex from "~/rolex/PushRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import ImagesRolex from "~/rolex/ImagesRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";

export const meta = () => [{ title: "El mundo de Rolex | Casa Barros" }];

export const handle = {
  breadcrumb: "Nuestros locales Rolex"
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
    heading: "Nuestros locales Rolex",
    bodyStrong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut enim condimentum, elementum est et, auctor nibh.",
    bodyRest:
      "Duis cursus vestibulum diam, sit amet maximus nisi. Pellentesque nec hendrerit metus, vel luctus est. Proin a imperdiet purus. Maecenas ut pulvinar quam. Phasellus dictum volutpat venenatis.",
    cta: {label: "", href: ""},
  },
  images: [
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
      image: {
        desktop: "/imgRolex/banners/rolex-generic-store-asset-xl-image1-landscape.jpg",
        mobile: "/imgRolex/banners/rolex-generic-store-assetxl-image1-portrait.jpg",
        alt: "imagen",
      },
    },
  ],
  bodyText: {
    heading: "Lorem ipsum",
    bodyStrong: "",
    bodyRest:
      "Fusce ultricies finibus nunc, a laoreet est finibus eget. Donec hendrerit mi fermentum lacus venenatis, a sodales purus sagittis. Sed non lacus tempor mauris convallis aliquet. Praesent interdum lacinia mi, sed gravida orci accumsan vel. Donec eleifend augue et aliquam ornare. Nunc tempor elit sit amet est iaculis tincidunt. Nulla facilisi. Integer malesuada turpis in lacinia venenatis. Nunc tincidunt nunc vitae ante euismod congue.",
    cta: {label: "", href: "#"},
    className: "odd",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-2-landscape.jpg",
      mobile: "/imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-2-portrait.jpg",
      alt: "Imagen",
    },
  },
  bodyText2: {
    heading: "Dorlor sit amet",
    bodyStrong: "",
    bodyRest:
      "Vestibulum tempor pellentesque ligula, vel tincidunt erat venenatis ut. Sed ut tortor tellus. Phasellus sit amet dapibus libero. In aliquam justo justo, vel posuere orci tempus non. Pellentesque laoreet feugiat ipsum, vel ullamcorper erat dapibus eget. Proin eget nunc ut sem vestibulum venenatis eget vel lorem.",
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
      alt: "",
    },
  },
  banner: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "/rolex/collections/oyster-perpetual",
      desktop: "imgRolex/banners/rolex-generic-store-asset-xl-image2-landscape.jpg",
      mobile: "imgRolex/banners/rolex-generic-store-assetxl-image2-portrait.jpg",
      alt: "imagen",
      style: "light",
    },
  ],
};

export default function RolexAtCasaBarros() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
    </section>
  );
}
