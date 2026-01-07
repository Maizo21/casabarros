// app/routes/rolex.world-of-rolex.sailgp-rolex.jsx
import React from "react";
import BannerRolex from "~/rolex/BannerRolex";
import PushRolex from "~/rolex/PushRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import ImagesRolex from "~/rolex/ImagesRolex";
import ArticleIntroduction from "~/rolex/ArticleIntroduction";
import VideoRolex from "~/rolex/VideoRolex";

export const meta = () => [{ title: "Rolex SailGP Championship | El mundo de Rolex | Casa Barros" }];

export const handle = {
  breadcrumb: "SailGP Rolex"
};

const ROLEX_PAGE_CONTENT = {
  articleIntro: {
    heading: "Rolex SailGP Championship Redefinir la vela de competición",
    subheading:
      "Catamaranes aerodinámicos ultraligeros. Regatas espectaculares en los mares a través de cinco continentes. Una experiencia única para el público. El Rolex SailGP Championship, con Rolex como Title Partner y Reloj Oficial, ha revolucionado las regatas y ha impulsado la vela de competición hacia el futuro.",
    meta: "Publicado el 10 de Enero de 2025",
  },
  video: {
    youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/INOzIH1P96I?si=uceBBjzgYQOVRvGf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    image: {
      desktop: "/imgRolex/videoPlayer.png",
      mobile: "/imgRolex/videoPlayer.png",
      alt: "imagen",
    },
  },
  bodyText: {
    heading: "La flota más rápida de la historia",
    bodyStrong: "",
    bodyRest:
      "Doce tripulaciones formadas por los regatistas más talentosos. Catamaranes idénticos, con <em>foils</em> y vela rígida. Capaces de subir más allá de las olas para alcanzar velocidades de 50 nudos, casi 100 km/h, se enfrentan entre sí en rondas de no más de 15 minutos cada una. El Rolex SailGP Championship está redefiniendo el mundo de la vela de competición, con barcos de vanguardia que proporcionan un rendimiento excepcional. Estos veleros voladores llevan las banderas de las naciones a los que representan y conforman la flota más rápida de la historia.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/02-rolex-sailgp-rp3-0355-1-landscape-1536x1536.jpg",
      mobile: "/imgRolex/banners/02-rolex-sailgp-rp3-0355-1-landscape-1536x1536.jpg",
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
  bodyText2: {
    heading: "Una competición espectacular",
    bodyStrong: "",
    bodyRest:
      "El Rolex SailGP Championship, celebrado por primera vez en 2019, se ha consolidado como la competición más emocionante del mundo de la vela y vigoriza cada temporada con nuevos eventos. A lo largo del año se celebran una docena de regatas en todo el mundo: San Francisco, Dubái, Auckland, Portsmouth e incluso hasta las orillas del lago Lemán. En cada Grand Prix, el campeonato ofrece un espectáculo increíble frente a las gradas inmensas que brinda a los espectadores una experiencia exclusiva.",
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
      alt: "Imagen",
      className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
    },
  },
   banner: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/03-rolex-sailgp-jl2-6375-landscape-2048x860.jpg",
      mobile: "imgRolex/banners/68b969367cd4d68b9692a1d0d2_03-rolex-sailgp-jl2-6375-portrait.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText3: {
    heading: "En el corazón del Rolex SailGP Championship con los Testimoniales Rolex​<br /><br />Hannah Mills, campeona dentro y fuera del agua",
    bodyStrong: "",
    bodyRest:
      "Nombrada dos veces Rolex World Sailor of the Year, Hannah Mills es actualmente la estratega a bordo del equipo de Emirates Great Britain SailGP. La capitana galesa, bicampeona mundial de 470, es una de las mujeres más condecoradas en la historia de la vela en los Juegos Olímpicos, con dos medallas de oro y una de plata. Como embajadora SailGP para el desarrollo sostenible, Mills está seriamente comprometida con la inclusión de la mujer en el mundo de la vela.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/68b980892796c68b980758e1a5_04-rolex-sailgp-tl106134-1-fd1-0442-landscape.webp",
      mobile: "/imgRolex/banners/68b980bca658b68b980a14c09c_04-rolex-sailgp-tl106134-1-fd1-0442-portrait.webp",
      alt: "Imagen",
      className: "",
    },
  },
  bodyText4: {
    heading: "Tom Slingsby, maestro en varias clases",
    bodyStrong: "",
    bodyRest:
      "Tom Slingsby, medallista de oro en los Juegos Olímpicos de 2012, es también tres veces Rolex World Sailor of the Year. También ha ganado tres veces el Rolex SailGP Championship como timonel y director general del equipo australiano. El talentoso regatista llevó a casa 10 títulos de campeón del mundo en varias categorías. El australiano también formó parte del Oracle Team USA, que ganó la Copa América en 2013. Además, estuvo al timón de tripulaciones con victorias en tiempo real en la Rolex Sydney Hobart Yacht Race y la Rolex Middle Sea Race.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/05-rolex-sailgp-fd1-3308-fd1-8129-landscape.png",
      mobile: "/imgRolex/banners/68b9817b7a55c68b97ee744d4e_05-rolex-sailgp-fd1-3308-fd1-8129-portrait.webp",
      alt: "Imagen",
      className: "",
    },
  },
   banner2: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "imgRolex/banners/06-rolex-sailgp-rp1-0428-landscape-2048x860.jpg",
      mobile: "imgRolex/banners/68b97fddb4dba68b97fcceb328_06-rolex-sailgp-rp1-0428-portrait.webp",
      alt: "imagen",
      style: "light",
    },
  ],
  bodyText5: {
    heading: "Martine Grael, nacida para capitanear",
    bodyStrong: "",
    bodyRest:
      "En 2025, Martine Grael hizo historia al convertirse en la primera mujer timonel del Rolex SailGP Championship con el nuevo Mubadala Brazil SailGP Team. La regatista brasileña tan solo tenía 22 años cuando fue nombrada Rolex World Sailor of the Year en 2014. Dos años más tarde, en Río de Janeiro, ganó la primera de dos medallas de oro olímpicas en la clase 49er FX, seguida por la segunda en Tokio en 2021. También participó en la Volvo Ocean Race 2017‐2018, una competición de alta mar que la convirtió en una de las regatistas más destacadas del mundo.",
    cta: {label: "", href: "#"},
    className: "",
    imageBefore: {
      desktop: "",
      mobile: "",
      alt: "Logo",
    },
    imageAfter: {
      desktop: "/imgRolex/banners/07-rolex-sailgp-jb-4607-rp2-9648-landscape.png",
      mobile: "/imgRolex/banners/68b9823a6346c68b9820e1d88c_07-rolex-sailgp-jb-4607-rp2-9648-portrait.webp",
      alt: "Imagen",
      className: "",
    },
  },
  pushSections: [
    {
      title: "",
      items: [
        {
          colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
          image: {
            desktop: "/imgRolex/banners/rolex-yacht-master-cover-M226627-0001_2301jva_001-landscape-scaled.webp",
            mobile: "/imgRolex/banners/66a21e5f3561c_rolex-collectionbanner-yacht-master-m226627-00012301jva001-portrait.webp",
            alt: "imagen",
          },
          eyebrow: "Rolex Yacht Master",
          heading: "Carácter marino",
          body: "",
          cta: {label: "Más información", href: "/rolex/watches"},
        },
      ],
    }
  ],
};

export default function SailGPRolexPage() {
  return (
    <section className="pageRolex" id="introduction">
      <br /><br /><br /><br />
      <ArticleIntroduction content={ROLEX_PAGE_CONTENT.articleIntro} />
      <VideoRolex content={ROLEX_PAGE_CONTENT.video} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
      <BannerRolex items={ROLEX_PAGE_CONTENT.banner2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText5} />
      <PushRolex sections={ROLEX_PAGE_CONTENT.pushSections} />
    </section>
  );
}
