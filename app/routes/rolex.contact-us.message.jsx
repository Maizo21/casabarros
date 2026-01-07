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
import ContactSection from "~/rolex/ContactSection";

export const meta = () => [{ title: "Rolex | Casa Barros" }];

const ROLEX_PAGE_CONTENT = {
  banner: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/rolex-message-cover-landscape.jpg",
      mobile: "imgRolex/banners/rolex-message-cover-portrait.jpg",
      alt: "imagen",
      style: "light",
    }
  ],
  contact: {
    title: "Body24",
    image: {
      desktop: "/img/banners/contactBanner.jpg",
      mobile: "/img/banners/contactBannerMob.webp",
      alt: "imagen",
    },
    epigrafe: "Body20",
    headline: "Headline50",
    text: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
    epigrafe2: "Body20",
    headline2: "Headline50",
    text2: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    epigrafe3: "Body20",
    headline3: "Headline50",
    text3a: "Body20 Bold - Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    text3b: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
};

export default function ContactUsLayout() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <ContactSection
        content={ROLEX_PAGE_CONTENT.contact}
        showImage={false}
        showTitle={false}
        onSuccess={(formData) => console.log(formData)}
      />
    </section>
  );
}
