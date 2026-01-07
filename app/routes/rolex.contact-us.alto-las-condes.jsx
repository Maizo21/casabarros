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
import SingleStoreMap from "~/rolex/StoreMap/SingleStoreMap";
import locations from "~/rolex/StoreMap/locations";

export const meta = () => [{ title: "Rolex | Casa Barros" }];
export const handle = {
  breadcrumb: "Alto Las Condes"
};

const ROLEX_PAGE_CONTENT = {
  banner2: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-contact-rolex-bloor-robert-lowdon-photography-0007_r-landscape.jpg",
      mobile: "imgRolex/banners/rolex-contact-rolex-bloor-robert-lowdon-photography-0007_r-portrait.jpg",
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
      <SingleStoreMap location={locations[1]} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} className="no-margin" />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} className="odd" />
    </section>
  );
}
