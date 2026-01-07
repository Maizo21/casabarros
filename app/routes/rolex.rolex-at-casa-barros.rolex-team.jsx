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
  breadcrumb: "Conozca nuestro Equipo Rolex"
};

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "/rolex/collections/oyster-perpetual",
      desktop: "imgRolex/banners/rolex-generic-store-asset-cover1-landscape.jpg",
      mobile: "imgRolex/banners/rolex-generic-store-asset-cover1-portrait.jpg",
      alt: "imagen",
      style: "light",
    },
  ],
  introduction: {
    heading: "Conozca nuestro Equipo Rolex | Casa Barros",
    bodyStrong: "Nunc interdum tempus nibh, vel consectetur nisi aliquam vel. Nunc pulvinar sem in venenatis maximus. Quisque et urna urna.",
    bodyRest:
      "<br /><br />Pellentesque lacinia ultrices massa, id mollis leo varius vel. Sed aliquet est ac ante commodo semper. Integer sed tellus molestie, maximus felis a, pulvinar mauris.",
    cta: {label: "", href: ""},
  },
  images: [
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
      image: {
        desktop: "/imgRolex/banners/rolex-generic-store-asset-fake1-landscape.jpg",
        mobile: "/imgRolex/banners/rolex-generic-store-asset-fake1-portrait.jpg",
        alt: "imagen",
      },
    },
  ],
  quote: {
    quote:
      "«Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora ducimus odio atque fugit earum iusto, quos officiis tenetur, totam nobis.»",
    author: "Lorem ipsum dolor",
  },
  bodyText: {
    heading: "Nulla pretium id mi quis lacinia",
    bodyStrong: "",
    bodyRest:
      "Phasellus ut nisi non nisl ultricies cursus et ut erat. Vivamus ante tortor, posuere ut euismod quis, elementum a metus. Vestibulum congue, sem facilisis pulvinar porttitor, quam urna iaculis enim, sit amet euismod tortor ipsum sed ligula. Nullam erat dolor, efficitur eget vehicula varius, aliquet ut felis. Mauris malesuada aliquet velit sed lacinia. Donec egestas quis ligula ut condimentum. Nam vitae libero feugiat, congue eros sit amet, tempor arcu.",
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
      desktop: "imgRolex/banners/rolex-generic-team-asset-fake-desktop.jpg",
      mobile: "imgRolex/banners/rolex-generic-team-asset-fake-mobile.jpg",
      alt: "imagen",
      style: "light",
    },
  ],
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
      desktop: "/imgRolex/banners/rolex-generic-team-asset-fake2-desktop.jpg",
      mobile: "/imgRolex/banners/rolex-generic-team-asset-fake2-desktop.jpg",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6"
    },
  },
};

export default function RolexAtCasaBarros() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <QuoteRolex content={ROLEX_PAGE_CONTENT.quote} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
    </section>
  );
}
