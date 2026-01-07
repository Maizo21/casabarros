// app/routes/rolex.accessories._index.jsx
import React from "react";
import { useLoaderData } from "react-router";
import BannerRolex from "~/rolex/BannerRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import CollectionRolex from "~/rolex/CollectionRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import ImagesRolex from "~/rolex/ImagesRolex";

export const meta = () => [{ title: "Accesorios Rolex | Casa Barros" }];

export const handle = {
  breadcrumb: "Accesorios Rolex"
};

// Helper: Convertir slug a formato slug para comparación
function normalizeSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD') // Normalizar caracteres Unicode
    .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
    .replace(/[«»"""'']/g, '') // Eliminar comillas especiales
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales excepto guiones y espacios
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
    .trim();
}

export async function loader({ context }) {
  const { storefront } = context;

  try {
    // Fetch all Rolex products with accessories tag
    const { products: allAccessories } = await storefront.query(ACCESSORIES_QUERY, {
      variables: {
        query: `vendor:Rolex tag:accessories`,
        first: 250,
      },
    });

    return {
      products: allAccessories?.nodes || [],
    };
  } catch (error) {
    console.error('Error fetching accessories:', error);
    return {
      products: [],
    };
  }
}

const ROLEX_PAGE_CONTENT = {
  bannerItems: [
    {
      epigrafe: "",
      titulo: "",
      boton: "",
      link: "",
      desktop: "watches/rolex-accessories-model-page-assets/rolex_accessories-page-assets-landscape/rolex-accessories-rolexcufflinks_2403jva_001-landscape.jpg",
      mobile: "watches/rolex-accessories-model-page-assets/rolex_accessories-page-assets-portrait/rolex-accessories-rolexcufflinks_2403jva_001-portrait.jpg",
      alt: "Accesorios Rolex",
      style: "light",
    }
  ],
  introduction: {
    heading: "Accesorios Rolex",
    bodyStrong: "Gemelos elegantes y exclusivos de Rolex.<br />",
    bodyRest:
      "Estos accesorios reflejan los códigos visuales de la marca a la vez que cumplen los mismos estándares de calidad y fiabilidad que los de cualquier reloj Rolex.",
    cta: {label: "", href: ""},
  },
  images: [
    {
      contentWrapClass: "contentWrap",
      className: "odd noMarginBottom",
      colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
      image: {
        desktop: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-landscape/rolex-accessories-cufflinks-introduction-rolexcufflinks_2312jva_002_rvb.jpg",
        mobile: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-portrait/rolex-accessories-cufflinks-introduction-rolexcufflinks_2312jva_002_rvbportrait.jpg",
        alt: "imagen",
      },
    },
  ],
  bodyText1: {
    heading: "Gemelos<br />Elegancia en la muñeca",
    bodyStrong: "",
    bodyRest: "Hay tres gemelos de elegancia discreta y atemporal disponibles, y se presentan en oro amarillo, blanco o Everose de 18 quilates.",
    cta: {label: "", href: ""},
    className: "odd",
  },
  bodyText2: {
    heading: "Gemelos «Corona»<br />Un símbolo para tener en la muñeca",
    bodyStrong: "",
    bodyRest: "El logotipo de Rolex, una corona de cinco puntas, puede llevarse como gemelos. Añaden un toque distinguido a las muñecas de aquellas personas para las que la excelencia debe expresarse con la máxima atención al detalle.",
    cta: {label: "", href: ""},
    imageAfter: {
      desktop: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-landscape/rolex-accessories-crown-cufflinks-rolexcufflinks_2403jva_001-landscape.jpg",
      mobile: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-portrait/rolex-accessories-crown-cufflinks-rolexcufflinks_2403jva_001-portrait.jpg",
      alt: "Logo",
      className: "",
    },
  },
  bodyText3: {
    heading: "Gemelos «Aguja»<br />Siempre con brillo",
    bodyStrong: "",
    bodyRest: "Inspirados en la forma del disco redondo que se encuentra en las puntas de las agujas de los modelos Profesionales de Rolex, estos gemelos brillan en la oscuridad gracias a su material luminiscente, el mismo que se utiliza en la visualización Chromalight de los relojes Rolex.",
    cta: {label: "", href: ""},
    imageAfter: {
      desktop: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-landscape/rolex-accessories-chromalight-cufflinks-rolexcufflinks_2403jva_003-landscape.jpg",
      mobile: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-portrait/rrolex-accessories-chromalight-cufflinks-rolexcufflinks_2403jva_003-portrait.jpg",
      alt: "Logo",
      className: "",
    },
  },
  bodyText4: {
    heading: "Gemelos «Estriado»<br />Una estética icónica",
    bodyStrong: "",
    bodyRest: "Estos gemelos reúnen varios elementos característicos de los relojes Rolex. En el centro, la corona de cinco puntas está grabada en un botón Cerachrom de cerámica, rodeado de un acanalado que evoca el emblemático bisel que aparece en los modelos Clásicos de Rolex.",
    cta: {label: "", href: ""},
    imageAfter: {
      desktop: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-landscape/rolex-accessories-fluted-cufflinks-rolexcufflinks_2403jva_002-landscape.jpg",
      mobile: "/watches/rolex-accessories-collection-page-for-multibrand-assets/rolex_accessories-page-for-multibrand-assets-portrait/rolex-accessories-fluted-cufflinks-rolexcufflinks_2403jva_002-portrait.jpg",
      alt: "Logo",
      className: "",
    },
  },
};

export default function RolexAccessoriesPage() {
  const { products } = useLoaderData();

  // Generar la colección de productos dinámicamente
  const collectionContent = {
    title: "Descubra los accesorios Rolex",
    products: products.map((product) => {
      // Extraer metafields de Rolex
      const rolexMetafields = product.metafields?.filter(mf => mf?.namespace === 'rolex') || [];
      const getMetafield = (key) => rolexMetafields.find(mf => mf?.key === key)?.value || '';

      const rmc = getMetafield('RMC').toLowerCase();
      const modelName = getMetafield('ModelName');
      const collectionName = getMetafield('CollectionName');

      // Convertir ModelName a slug
      const modelNameSlug = normalizeSlug(modelName);

      // Generar la URL para accesorios
      const productHref = `/rolex/accessories/${modelNameSlug}-${rmc}`;

      return {
        href: productHref,
        image: {
          desktop: `/watches/rolex-cufflink-asset-packshot/rolex-accessories-${rmc}-packshot.png`,
          mobile: `/watches/rolex-cufflink-asset-packshot/rolex-accessories-${rmc}-packshot.png`,
          alt: product.title,
        },
        legendTop: "Rolex",
        name: modelName || product.title,
        legendBottom: collectionName || rmc.toUpperCase(),
      };
    }),
    cta: { label: "", href: "" },
    className: "colAccessoryRolex",
  };

  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <CollectionRolex content={collectionContent} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText1} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText2} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText3} />
      <BodyTextRolex content={ROLEX_PAGE_CONTENT.bodyText4} />
    </section>
  );
}

const ACCESSORIES_QUERY = `#graphql
  query GetAccessories($query: String!, $first: Int!) {
    products(first: $first, query: $query) {
      nodes {
        id
        title
        handle
        tags
        featuredImage {
          url
          altText
        }
        metafields(identifiers: [
          {namespace: "rolex", key: "RMC"}
          {namespace: "rolex", key: "ModelName"}
          {namespace: "rolex", key: "CollectionName"}
        ]) {
          namespace
          key
          value
        }
      }
    }
  }
`;
