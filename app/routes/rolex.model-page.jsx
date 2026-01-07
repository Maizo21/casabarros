// app/routes/rolex.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import ModelRolex from "~/rolex/ModelRolex";
import ModelWatchGallery from "~/rolex/ModelWatchGallery";
import ModelKeySelling from "~/rolex/ModelKeySelling";
import ModelWatchSpecifications from "~/rolex/ModelWatchSpecifications";
import ModelInfo from "~/rolex/ModelInfo";
import ModelAvailability from "~/rolex/ModelAvailability";
import ModelContact from "~/rolex/ModelContact";
import PushRolex from "~/rolex/PushRolex";
import SingleStoreMap from "~/rolex/StoreMap/SingleStoreMap";
import locations from "~/rolex/StoreMap/locations";

export const meta = () => [{ title: "Rolex Model Page | Casa Barros" }];

export const handle = {
  breadcrumb: "Datejust 41"
};

const MODEL_PAGE_CONTENT = {
  model: {
    eyebrow: "Body24",
    title: "Headline50",
    subtitle: "Body20",
    highlight: "Body20",
    ctas: [
      {label: "Tertiary - White", type: "phone"},
      {label: "Tertiary - White", type: "chat"},
      {label: "Tertiary - White", type: "mail"},
      {label: "Tertiary - White", type: "appointment"},
      {label: "Tertiary - White", type: "place"},
    ],
    image: {
      desktop: "/imgRolex/model-fake.webp",
      mobile: "/imgRolex/model-fake.webp",
      alt: "imagen",
    },
  },
  gallery: [
    {
      desktop: "imgRolex/keep/rolex-keep-exploring-discover-rolex-shoot_shop_geneva_retail_campaign_logo_pub-2-iso_01-portrait.jpg",
      mobile: "imgRolex/keep/rolex-keep-exploring-discover-rolex-shoot_shop_geneva_retail_campaign_logo_pub-2-iso_01_landscape.jpg",
      alt: "imagen",
    },
    {
      desktop: "imgRolex/keep/rolex-keep-exploring-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-portrait.jpg",
      mobile: "imgRolex/keep/rolex-keep-exploring-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-landscape.jpg",
      alt: "imagen",
    },
    {
      desktop: "imgRolex/keep/rolex-keep-exploring-new-watches-2025_m127334-0001_2501fj_003-portrait.jpg",
      mobile: "imgRolex/keep/rolex-keep-exploring-new-watches-2025_m127334-0001_2501fj_003-landscape.jpg",
      alt: "imagen",
    },
    {
      desktop: "imgRolex/keep/rolex-keep-exploring-rolex-accessories-rolexcufflinks_2403jva_001-portrait.jpg",
      mobile: "imgRolex/keep/rolex-keep-exploring-rolex-accessories-rolexcufflinks_2403jva_001-landscape.jpg",
      alt: "imagen",
    },
  ],
  keySelling: {
    defaultOpen: 0,
    image: {
      desktop: "/img/banners/banner2.jpg",
      mobile: "/img/banners/banner2-mob.png",
      alt: "imagen",
    },
    items: [
      { 
        title: "Body24", 
        text: "Body20 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
      },
      { 
        title: "Body25", 
        text: "Body21 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
      },
      { 
        title: "Body26", 
        text: "Body22 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
      },
      { 
        title: "Body27", 
        text: "Body23 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo at saepe, rerum est veniam aspernatur rem cupiditate dolore perspiciatis sint. Illum repellat qui facilis soluta quibusdam suscipit obcaecati? Iure, praesentium.",
      },
    ],
  },
  specifications: {
    items: [
      { 
        title: "Body20 - Specifications", 
        body: "Body20 - Lorem ipsum dolor sit amet",
      },
      { 
        title: "Body21 - Specifications", 
        body: "Body21 - Lorem ipsum dolor sit amet",
      },
      { 
        title: "Body22 - Specifications", 
        body: "Body22 - Lorem ipsum dolor sit amet",
      },
      { 
        title: "Body23 - Specifications", 
        body: "Body23 - Lorem ipsum dolor sit amet",
      },
      { 
        title: "Body24 - Specifications", 
        body: "Body24 - Lorem ipsum dolor sit amet",
      },
      { 
        title: "Body25 - Specifications", 
        body: "Body25 - Lorem ipsum dolor sit amet",
      },
      { 
        title: "Body26 - Specifications", 
        body: "Body26 - Lorem ipsum dolor sit amet",
      },
      { 
        title: "Body27 - Specifications", 
        body: "Body27 - Lorem ipsum dolor sit amet",
      },
      {
        title: "Body28 - Specifications", 
        body: "Body28 - Lorem ipsum dolor sit amet",
      },
      {
        title: "Body29 - Specifications", 
        body: "Body29 - Lorem ipsum dolor sit amet",
      },
      {
        title: "Body30 - Specifications", 
        body: "Body30 - Lorem ipsum dolor sit amet",
      },
    ],
    cta: {
      label: "Primary CTA",
      href: "#",
      iconSrc: "/imgRolex/assets/download-back-button.svg",
      iconAlt: "icono descargar",
    },
  },
  availability: {
    crownSrc: "/imgRolex/crown-gold.svg",
    crownAlt: "Abrir menú",
    title: "Headline50",
    paragraphs: [
      "Body20 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum minus commodi rerum rem dicta expedita quo voluptatibus unde sequi esse cupiditate sapiente recusandae velit quas natus, obcaecati tempora nesciunt.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat laudantium modi iste iusto, sequi, temporibus dignissimos non amet quasi ipsam perspiciatis eveniet ab cupiditate? Doloribus repudiandae dolorem facilis laborum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat laudantium modi iste iusto, sequi, temporibus dignissimos non amet quasi ipsam perspiciatis eveniet ab cupiditate? Doloribus repudiandae dolorem facilis laborum.",
    ],
  },
  contact: {
    items: [
      {
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
    ],
    defaultOpen: 0,
  },
  pushSections: [
    {
      title: "Headline36",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/img/banners/collectionBanner.webp",
            mobile: "/img/banners/collectionBannerMob.webp",
            alt: "imagen",
          },
          eyebrow: "fixed16",
          heading: "Headline36",
          cta: {label: "Secondary CTA", href: "#"},
        },
      ],
    }
  ],
};

export default function RolexPage() {
  return (
    <section className="pageRolex">
      <ModelRolex content={MODEL_PAGE_CONTENT.model} />
      <ModelWatchGallery items={MODEL_PAGE_CONTENT.gallery} />
      <ModelKeySelling
        items={MODEL_PAGE_CONTENT.keySelling.items}
        defaultOpen={MODEL_PAGE_CONTENT.keySelling.defaultOpen}
        image={MODEL_PAGE_CONTENT.keySelling.image}
      />
      <ModelWatchSpecifications
        items={MODEL_PAGE_CONTENT.specifications.items}
        cta={MODEL_PAGE_CONTENT.specifications.cta}
      />
      <ModelInfo />
      <ModelAvailability content={MODEL_PAGE_CONTENT.availability} />
      <ModelContact
        items={MODEL_PAGE_CONTENT.contact.items}
        defaultOpen={MODEL_PAGE_CONTENT.contact.defaultOpen}
      />
      <PushRolex sections={MODEL_PAGE_CONTENT.pushSections} />
      <SingleStoreMap location={locations[2]} />
    </section>
  );
}
