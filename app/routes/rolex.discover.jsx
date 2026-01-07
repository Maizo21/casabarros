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
  hideBreadcrumbs: true
};

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "/rolex/collections/oyster-perpetual",
      desktop: "imgRolex/banners/m278288rbr-0041_2511stj_001_rvb-banner-generator_1920x1080_es.webp",
      mobile: "imgRolex/banners/m278288rbr-0041_2511stj_001_rvb-banner-generator_720x1280_es.webp",
      alt: "imagen",
      style: "light",
    },
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "/rolex/collections/datejust-41",
      desktop: "imgRolex/banners/RBA_SailGP_Website_Banner_FD1_3997-r_1920x1080_es.webp",
      mobile: "imgRolex/banners/RBA_SailGP_Website_Banner_FD1_3997-r_720x1280_es.webp",
      alt: "imagen",
      style: "dark",
    },
  ],
  introduction: {
    heading: "Bienvenido a Casa Barros,<br /> distribuidor oficial de Rolex en Chile",
    bodyStrong: "Casa Barros se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex en Chile,",
    bodyRest:
      "autorizados para vender y realizar el mantenimiento de los relojes Rolex.",
    cta: {label: "", href: ""},
  },
  pushSections: [
    {
      title: "Relojes Rolex",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/discover-rolex-watches-m126333_0010_1802jva_002-2048x683.jpg",
            mobile: "/imgRolex/banners/6615439686a996615438e61331_discover-rolex-watches-1945oysterperpetualdatejust1802jvam12633300101802jva002-portrait.webp",
            alt: "imagen",
          },
          eyebrow: "Encuentre su Rolex",
          heading: "Descubra la colección Rolex",
          body: "",
          cta: {label: "Más información", href: "/rolex/watches"},
        },
      ],
    },
    {
      title: "Accesorios Rolex",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/discover-rolex-accessories-rolexcufflinks_2403jva_001-landscape-1536x512.webp",
            mobile: "/imgRolex/banners/690ca204914f7690ca1f393124_rolex-accessories-cover-rolexcufflinks2403jva001-portrait.webp",
            alt: "imagen",
          },
          eyebrow: "Colección",
          heading: "Descubra los accesorios Rolex",
          body: "",
          cta: {label: "Más información", href: "/rolex/accessories"},
        },
      ],
    },
  ],
  pushSections2: [
    {
      title: "Descubra Rolex",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
          image: {
            desktop: "/imgRolex/banners/rolex-keep-exploring-hub-world-of-rolex-jb1_2564_070525_landscape.jpg",
            mobile: "/imgRolex/banners/rolex-keep-exploring-hub-world-of-rolex-jb1_2564_070525_landscape.jpg",
            alt: "imagen",
          },
          eyebrow: "Un compromiso con la excelencia",
          heading: "El mundo de Rolex",
          body: "",
          cta: {label: "Más información", href: "/rolex/world-of-rolex" },
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
          image: {
            desktop: "/imgRolex/banners/discover-rolex-watchmaking-b460356_rolex_mp_olv_watchmaking_manifesto_d_9x16_en-gb_75_25p_pp002-768x512.jpg",
            mobile: "/imgRolex/banners/discover-rolex-watchmaking-b460356_rolex_mp_olv_watchmaking_manifesto_d_9x16_en-gb_75_25p_pp002-768x512.jpg",
            alt: "imagen",
          },
          eyebrow: "Excelencia en desarrollo",
          heading: "«Savoir-faire» relojero",
          body: "",
          cta: {label: "Más información", href: "/rolex/watchmaking" },
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
          image: {
            desktop: "/imgRolex/banners/discover-rolex-servicing-2-sav1910dh_005c-768x512.jpg",
            mobile: "/imgRolex/banners/discover-rolex-servicing-2-sav1910dh_005c-768x512.jpg",
            alt: "imagen",
          },
          eyebrow: "Nuestra filosofía del mantenimiento",
          heading: "Mantenimiento",
          body: "",
          cta: {label: "Más información", href: "/rolex/servicing" },
        },
      ],
    },
  ],
  grid: {
    title: "Headline36",
    items: new Array(4).fill(null).map(() => ({
      colClass: "rolex-col-sm-3 rolex-col-md-4 rolex-col-lg-4",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
      eyebrow: "fixed16",
      heading: "Body24",
    })),
  },
  bodyText: {
    heading: "Headline50",
    bodyStrong: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bodyRest:
      "Quo magni pariatur eum ducimus dolor assumenda iste natus deserunt dolorum eligendi quisquam ratione amet a, quaerat vero saepe nesciunt fuga in!",
    cta: {label: "Primary CTA", href: "#"},
  },
  articleIntro: {
    heading: "Headline50",
    subheading:
      "Headline30 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni pariatur eum ducimus dolor",
    meta: "Body20 - Date",
  },
  quote: {
    quote:
      "Quote50 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora ducimus odio atque fugit earum iusto, quos officiis tenetur, totam nobis.",
    author: "Body20",
  },
  images: [
    {
      contentWrapClass: "contentWrap full",
      colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
    },
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
    },
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-10 rolex-col-lg-10",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
    },
    {
      contentWrapClass: "contentWrap",
      colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
      image: {
        desktop: "/img/banners/banner2.jpg",
        mobile: "/img/banners/banner2-mob.png",
        alt: "imagen",
      },
    },
  ],
  video: {
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "imagen",
    },
  },
  collection: {
    title: "headline50",
    products: new Array(4).fill(null).map((_, idx) => ({
      href: "#",
      image: {
        desktop: "/imgRolex/fake-watch.png",
        mobile: "/imgRolex/fake-watch.png",
        alt: `imagen ${idx + 1}`,
      },
      legendTop: "Lengend16",
      name: "Body24",
      legendBottom: "Lengend16",
    })),
    cta: {label: "Primary CTA", href: "#"},
  },
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
};

export default function RolexPage() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections2} className="odd" />
    </section>
  );
}
