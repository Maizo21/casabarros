// app/routes/rolex.festive-selection.jsx
import React from "react";
import { useLoaderData } from "react-router";
import BannerRolex from "~/rolex/BannerRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import CollectionRolex from "~/rolex/CollectionRolex";
import ImagesRolex from "~/rolex/ImagesRolex";

export const meta = () => [{ title: "Selección Festiva | Casa Barros - Distribuidor Oficial Rolex" }];

export const handle = {
  breadcrumb: "Selección Festiva"
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
    // Fetch productos con tag 'festiva1'
    const { products: festiva1Products } = await storefront.query(PRODUCTS_QUERY, {
      variables: {
        query: `vendor:Rolex tag:festiva1`,
        first: 250,
      },
    });

    // Fetch productos con tag 'festiva2'
    const { products: festiva2Products } = await storefront.query(PRODUCTS_QUERY, {
      variables: {
        query: `vendor:Rolex tag:festiva2`,
        first: 250,
      },
    });

    return {
      festiva1: festiva1Products?.nodes || [],
      festiva2: festiva2Products?.nodes || [],
    };
  } catch (error) {
    console.error('Error fetching festive selection products:', error);
    return {
      festiva1: [],
      festiva2: [],
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
      desktop: "imgRolex/festive-selection-page-assets/rolex-festive-cover_m278288rbr-0041_2511stj_001_rvb-landscape.jpg",
      mobile: "imgRolex/festive-selection-page-assets/rolex-festive-cover_m278288rbr-0041_2511stj_001_rvb--portrait.jpg",
      alt: "Selección Festiva Rolex",
      style: "light",
    }
  ],
  introduction: {
    heading: "Selección de relojes Rolex para las fiestas<br />Hora de brillar",
    bodyStrong: "Para las fiestas, Rolex presenta una selección especial de distintivos y refinados relojes y exclusivos accesorios.<br /><br />",
    bodyRest:
      "Cada reloj, cuidadosamente elaborado, es el resultado de un «savoir‑faire» relojero único. Cada artículo, desde los sofisticados modelos engastados con esferas deslumbrantes y los emblemáticos relojes herramienta hasta los elegantes y preciosos accesorios, es sinónimo de fiabilidad, precisión y atemporalidad.",
    cta: {label: "", href: ""},
  },
  images: [
    {
      contentWrapClass: "contentWrap",
      className: "noPadding",
      colClass: "rolex-col-sm-6 rolex-col-md-8 rolex-col-lg-8",
      image: {
        desktop: "/imgRolex/festive-selection-page-assets/rolex-festive-RolexCufflinks_2403jva_001-1080-1920-landscape.jpg",
        mobile: "/imgRolex/festive-selection-page-assets/rolex-festive-RolexCufflinks_2403jva_001-1080-1920-portrait.jpg",
        alt: "Selección Festiva",
      },
    },
  ],
};

export default function RolexFestiveSelectionPage() {
  const { festiva1, festiva2 } = useLoaderData();

  // Función helper para generar contenido de colección
  const generateCollectionContent = (products, title, className = "") => ({
    title,
    products: products.map((product) => {
      // Extraer metafields de Rolex
      const rolexMetafields = product.metafields?.filter(mf => mf?.namespace === 'rolex') || [];
      const getMetafield = (key) => rolexMetafields.find(mf => mf?.key === key)?.value || '';

      const rmc = getMetafield('RMC').toLowerCase();
      const modelName = getMetafield('ModelName');
      const modelCase = getMetafield('Spec_ModelCase');
      const collectionName = getMetafield('CollectionName');
      const tags = product.tags || [];

      // Convertir ModelName a slug
      const modelNameSlug = normalizeSlug(modelName);

      // Determinar si es un accesorio
      const isAccessory = tags.includes('accessories') || (collectionName && collectionName.trim() !== '');

      // Generar la URL correcta según el tipo de producto
      const productHref = isAccessory
        ? `/rolex/accessories/${modelNameSlug}-${rmc}`
        : `/rolex/watches/${modelNameSlug}/${rmc}`;

      // Generar las rutas de imagen según el tipo de producto
      const imageUrls = isAccessory
        ? {
            desktop: `/watches/rolex-cufflink-asset-packshot/rolex-accessories-${rmc}-packshot.png`,
            mobile: `/watches/rolex-cufflink-asset-packshot/rolex-accessories-${rmc}-packshot.png`,
          }
        : {
            desktop: `/watches/upright_watch_assets_landscape_collection/${rmc}.jpg`,
            mobile: `/watches/upright_watch_assets_portrait_collection/${rmc}.jpg`,
          };

      return {
        href: productHref,
        image: {
          ...imageUrls,
          alt: product.title,
        },
        legendTop: "Rolex",
        name: modelName || product.title,
        legendBottom: isAccessory ? (collectionName || rmc.toUpperCase()) : (modelCase || rmc.toUpperCase()),
      };
    }),
    cta: { label: "", href: "" },
    className,
  });

  // Generar colecciones
  const collection1 = generateCollectionContent(festiva1, "", "festiva1");
  const collection2 = generateCollectionContent(festiva2, "", "festiva2");

  return (
    <section className="pageRolex">
      <BannerRolex items={ROLEX_PAGE_CONTENT.bannerItems} />
      <IntroductionRolex content={ROLEX_PAGE_CONTENT.introduction} />
      <CollectionRolex content={collection1} />
      <ImagesRolex blocks={ROLEX_PAGE_CONTENT.images} />
      <CollectionRolex content={collection2} />
    </section>
  );
}

const PRODUCTS_QUERY = `#graphql
  query GetProducts($query: String!, $first: Int!) {
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
          {namespace: "rolex", key: "Spec_ModelCase"}
        ]) {
          namespace
          key
          value
        }
      }
    }
  }
`;
