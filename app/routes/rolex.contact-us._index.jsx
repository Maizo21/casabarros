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
import StoreMap from "~/rolex/StoreMap";

export const meta = () => [{ title: "Rolex | Casa Barros" }];

const ROLEX_PAGE_CONTENT = {
  banner: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-generic-store-asset-hub-retailer-push1-landscape.jpg",
      mobile: "imgRolex/banners/rolex-generic-store-asset-hub-retailer-push-s-1-portrait.jpg",
      alt: "imagen",
      style: "light",
    }
  ],
  introduction: {
    heading: "Casa Barros, su Distribuidor Oficial Rolex<br />Contáctanos",
    bodyStrong: "Gracias al conocimiento, la destreza y el equipo necesarios para darle el mejor servicio, podemos garantizar la autenticidad de todas y cada una de las piezas de su Rolex.",
    bodyRest:
      "Déjenos ayudarle a tomar una decisión que durará toda la vida o a dar respuesta a sus consultas. Le rogamos que nos proporcione sus datos y su forma de contacto deseada, le responderemos lo más pronto posible.",
    cta: {label: "", href: ""},
  },
  banner2: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-contact-rolex-bloor-robert-lowdon-photography-0007_r-landscape.jpg",
      mobile: "/imgRolex/banners/rolex-contact-rolex-bloor-robert-lowdon-photography-0007_r-portrait.jpg",
      alt: "imagen",
      style: "light",
    }
  ],
  pushSections: [
    {
      title: "Contáctanos",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/rolex-contact-message-7214_shoot_shop_geneva_retail_campaign_client_vendeur_pub_25_03_2019_sm_iso_01.jpg",
            mobile: "/imgRolex/banners/rolex-contact-message-7214_shoot_shop_geneva_retail_campaign_client_vendeur_pub_25_03_2019_sm_iso_01-portrait.jpg",
            alt: "imagen",
          },
          eyebrow: "",
          heading: "Envíanos un mensaje",
          body: "",
          cta: {label: "Contáctanos", href: "/rolex/contact-us/message"},
        },
      ],
    },
  ],
};

export default function ContactUsLayout() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <StoreMap />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} className="no-margin" />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} className="odd" />
    </section>
  );
}
