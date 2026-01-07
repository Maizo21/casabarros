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
  bannerItems: [
    {
      epigrafe: "Colección Rolex",
      titulo: "Oyster Perpetual",
      boton: "Descubrir más",
      link: "/rolex/collections/oyster-perpetual",
      desktop: "img/banners/banner1.webp",
      mobile: "img/banners/banner1-mob.webp",
      alt: "imagen",
      style: "light",
    },
    {
      epigrafe: "Nuevos Modelos 2025",
      titulo: "Datejust 41",
      boton: "Ver detalles",
      link: "/rolex/collections/datejust-41",
      desktop: "img/banners/banner1.webp",
      mobile: "img/banners/banner1-mob.webp",
      alt: "imagen",
      style: "dark",
    },
  ],
  pushSections: [
    {
      title: "Headline36",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/img/banners/banner2.jpg",
            mobile: "/img/banners/banner2-mob.png",
            alt: "imagen",
          },
          eyebrow: "fixed16",
          heading: "Headline36",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
          cta: {label: "Secondary CTA", href: "#"},
        },
      ],
    },
    {
      title: "Headline36",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/img/banners/banner2.jpg",
            mobile: "/img/banners/banner2-mob.png",
            alt: "imagen",
          },
          eyebrow: "fixed16",
          heading: "Headline36",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
          cta: {label: "Secondary CTA", href: "#"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/img/banners/banner2.jpg",
            mobile: "/img/banners/banner2-mob.png",
            alt: "imagen",
          },
          eyebrow: "fixed16",
          heading: "Headline36",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
          cta: {label: "Secondary CTA", href: "#"},
        },
      ],
    },
    {
      title: "Headline36",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
          image: {
            desktop: "/img/banners/banner2.jpg",
            mobile: "/img/banners/banner2-mob.png",
            alt: "imagen",
          },
          eyebrow: "fixed16",
          heading: "Headline36",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
          cta: {label: "Secondary CTA", href: "#"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
          image: {
            desktop: "/img/banners/banner2.jpg",
            mobile: "/img/banners/banner2-mob.png",
            alt: "imagen",
          },
          eyebrow: "fixed16",
          heading: "Headline36",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
          cta: {label: "Secondary CTA", href: "#"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-4 rolex-col-lg-4",
          image: {
            desktop: "/img/banners/banner2.jpg",
            mobile: "/img/banners/banner2-mob.png",
            alt: "imagen",
          },
          eyebrow: "fixed16",
          heading: "Headline36",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis neque voluptates est nulla voluptatum magni ipsa eligendi, praesentium illo ullam quae commodi? Similique molestias commodi officiis? Animi, mollitia quia.",
          cta: {label: "Secondary CTA", href: "#"},
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
  introduction: {
    heading: "Headline50",
    bodyStrong: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bodyRest:
      "Quo magni pariatur eum ducimus dolor assumenda iste natus deserunt dolorum eligendi quisquam ratione amet a, quaerat vero saepe nesciunt fuga in!",
    cta: {label: "Secondary CTA", href: "#"},
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
      <StoreMap />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
      <GridRolex grid={ROLEX_PAGE_CONTENT.grid} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <ArticleIntroduction content={ROLEX_PAGE_CONTENT.articleIntro} />
      <QuoteRolex content={ROLEX_PAGE_CONTENT.quote} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video} />
      <CollectionRolex content={ROLEX_PAGE_CONTENT.collection} />
    </section>
  );
}
