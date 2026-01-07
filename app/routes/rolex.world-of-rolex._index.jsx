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
      desktop: "imgRolex/banners/world-of-rolex-cover-jb1_2564_070525_iso_01-landscape-scaled.jpg",
      mobile: "imgRolex/banners/690caa9edc65a_world-of-rolex-cover-jb12564070525iso01-portrait.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  introduction: {
    heading: "El mundo de Rolex",
    bodyStrong: "Durante casi un siglo, Rolex ha desarrollado colaboraciones con un grupo diverso y extraordinario de talentos de una miríada de disciplinas.",
    bodyRest:
      "La marca colabora con la exploración, los deportes de élite y las artes, así como con diversos eventos y organizaciones.",
    cta: {label: "", href: ""},
  },
  pushSections: [
    {
      title: "",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/68b960554d49768b96041ae7a1_world-of-rolex-sailgp-rp3-0355-1-lanscape-full-2048x683.webp",
            mobile: "/imgRolex/banners/6615439686a996615438e61331_discover-rolex-watches-1945oysterperpetualdatejust1802jvam12633300101802jva002-portrait.webp",
            alt: "imagen",
          },
          eyebrow: "Publicado el Julio 10, 2025",
          heading: "Rolex SailGP Championship",
          body: "Catamaranes aerodinámicos ultraligeros. Regatas espectaculares en los mares a través de cinco continentes. Una experiencia única para el público. El Rolex SailGP Championship, con Rolex como Title Partner y Reloj Oficial, ha revolucionado las regatas y ha impulsado la vela de competición hacia el futuro.",
          cta: {label: "Más información", href: "/rolex/world-of-rolex/sailgp-rolex"},
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
            desktop: "/imgRolex/banners/68b960d8ade98_world-of-rolex-endurance-24hrlemansiso04-lanscape.webp",
            mobile: "/imgRolex/banners/68b960f31ca7e_world-of-rolex-endurance-24hrlemansiso04-portrait.webp",
            alt: "imagen",
          },
          eyebrow: "Publicado el Junio 13, 2025",
          heading: "Resistencia",
          body: "Dominar el poder de la mecánica para desafiar las leyes del tiempo. Controlar el riesgo para determinar la trayectoria ideal. Hasta la victoria. Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo.",
          cta: {label: "Más información", href: "/rolex/world-of-rolex/resistencia"},
        },
        {
          colClass: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
          image: {
            desktop: "/imgRolex/banners/66856ba200651_6684068574decworld-of-rolex-a-voyage-into-the-world-of-rolex-push03.webp",
            mobile: "/imgRolex/banners/66856ba37a792_6684068574decworld-of-rolex-a-voyage-into-the-world-of-rolex-push03-1.webp",
            alt: "imagen",
          },
          eyebrow: "Publicado el Abril 9, 2024",
          heading: "Viaje al corazón del universo Rolex",
          body: "Hans Wilsdorf estaba íntimamente convencido de la capacidad del ser humano para innovar con la excelencia como objetivo. Casi 120 años después de la creación de la marca, el espíritu del fundador está más presente que nunca, tanto en lo que afecta a la fabricación de relojes como a los compromisos de Rolex en todo el mundo.",
          cta: {label: "Más información", href: "/rolex/world-of-rolex/viaje-al-corazon-del-universo-rolex"},
        },
      ],
    },
  ],
};

export default function WorldOfRolexIndexPage() {
  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections2} />
    </section>
  );
}
