import { useLoaderData } from "react-router";
import BannerRolex from "~/rolex/BannerRolex";
import IntroductionRolex from "~/rolex/IntroductionRolex";
import CollectionRolex from "~/rolex/CollectionRolex";
import VideoRolex from "~/rolex/VideoRolex";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import { getFamilyPageContent } from "~/rolex/familyPages";
import ImagesRolex from "~/rolex/ImagesRolex";
import QuoteRolex from "~/rolex/QuoteRolex";

export const meta = ({ data, params }) => {
  const familyName = params.familyName || '';
  const displayName = familyName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return [
    { title: `${displayName} | Casa Barros - Distribuidor Oficial Rolex` },
    { name: 'description', content: `Descubra la colección Rolex ${displayName}. Distribuidor Oficial Rolex en Chile.` },
    { name: 'keywords', content: `Rolex, ${displayName}, Casa Barros, Chile, Distribuidor Oficial` },
  ];
};

// Helper: Convertir slug a Title Case (land-dweller → Land-Dweller)
function slugToTitle(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
}

// Normalizar nombres de familia para comparación segura
function normalizeFamilyName(value = '') {
  return value
    .toLowerCase()
    .replace(/[-\s]+/g, ' ') // guiones o múltiples espacios → espacio
    .trim();
}

export async function loader({ params, context }) {
  const { familyName } = params;
  const { storefront } = context;

  // Convertir el slug a formato que coincida con el metafield (Land-Dweller)
  const familyNameFormatted = slugToTitle(familyName);

  try {
    // Fetch all Rolex products
    const { products: allRolexProducts } = await storefront.query(PRODUCTS_BY_FAMILY_QUERY, {
      variables: {
        query: `vendor:Rolex`,
        first: 250,
      },
    });

    // Filter products that match the family
    const filteredProducts = allRolexProducts?.nodes?.filter(product => {
      const familyMetafield = product.metafields?.find(mf => mf?.key === 'FamilyName');

      if (!familyMetafield?.value) return false;

      return (
        normalizeFamilyName(familyMetafield.value) ===
        normalizeFamilyName(familyNameFormatted)
      );
    }) || [];

    return {
      products: filteredProducts || [],
      familyName: familyNameFormatted,
      familySlug: familyName,
    };
  } catch (error) {
    console.error('Error fetching products by family:', error);
    return {
      products: [],
      familyName: familyNameFormatted,
      familySlug: familyName,
    };
  }
}

export default function RolexFamilyPage() {
  const { products, familyName, familySlug } = useLoaderData();

  // Obtener contenido de la familia desde el archivo centralizado
  const familyContent = getFamilyPageContent(familySlug);

  // Si no hay contenido para esta familia, mostrar contenido por defecto
  if (!familyContent) {
    return (
      <section className="pageRolex">
        <div className="contentWrap">
          <h1>Familia no encontrada</h1>
          <p>No se encontró contenido para la familia {familyName}.</p>
        </div>
      </section>
    );
  }

  // Generar la colección de productos dinámicamente
  const collectionContent = {
    title: `Descubra la colección ${familyName}`,
    products: products.map((product) => {
      // Extraer metafields de Rolex
      const rolexMetafields = product.metafields?.filter(mf => mf?.namespace === 'rolex') || [];
      const getMetafield = (key) => rolexMetafields.find(mf => mf?.key === key)?.value || '';

      const rmc = getMetafield('RMC').toLowerCase();
      const modelName = getMetafield('ModelName');
      const modelCase = getMetafield('Spec_ModelCase');
      const collectionName = getMetafield('CollectionName');
      const tags = product.tags || [];

      // Convertir ModelName a slug (ej: "Land-Dweller 40" -> "land-dweller-40" o "Gemelos «Estriado»" -> "gemelos-estriado")
      const modelNameSlug = modelName
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[«»"""'']/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      // Determinar si es un accesorio (tag "accessories" o tiene CollectionName)
      const isAccessory = tags.includes('accessories') || (collectionName && collectionName.trim() !== '');

      // Generar la URL correcta según el tipo de producto
      const productHref = isAccessory
        ? `/rolex/accessories/${modelNameSlug}-${rmc}`
        : `/rolex/watches/${modelNameSlug}/${rmc}`;

      return {
        href: productHref,
        image: {
          desktop: `/watches/upright_watch_assets_landscape_collection/${rmc}.jpg`,
          mobile: `/watches/upright_watch_assets_portrait_collection/${rmc}.jpg`,
          alt: product.title,
        },
        legendTop: "Rolex",
        name: modelName || product.title,
        legendBottom: modelCase || rmc.toUpperCase(),
      };
    }),
    cta: { label: "Explorar todos los modelos", href: "/rolex/watches" },
  };

  // Renderizar componentes dinámicamente basándose en el layout
  const renderComponent = (item, idx) => {
    // Caso especial: CollectionRolex se genera dinámicamente
    if (item.type === 'collection') {
      return <CollectionRolex key={idx} content={collectionContent} />;
    }

    // Obtener los datos del key correspondiente
    const data = familyContent[item.key];

    // Si no hay datos para este key, no renderizar nada
    if (!data) return null;

    // Renderizar según el tipo de componente
    switch (item.type) {
      case 'banner':
        return <BannerRolex key={idx} items={data} className={item.className} />;

      case 'introduction':
        return <IntroductionRolex key={idx} content={data} />;

      case 'video':
        return <VideoRolex key={idx} content={data} />;

      case 'bodyText':
        return <BodyTextRolex key={idx} content={data} />;

      case 'images':
        return <ImagesRolex key={idx} blocks={data} />;

      case 'quote':
        return <QuoteRolex key={idx} content={data} />;

      default:
        return null;
    }
  };

  return (
    <section className="pageRolex">
      {familyContent.layout?.map((item, idx) => renderComponent(item, idx))}
    </section>
  );
}

const PRODUCTS_BY_FAMILY_QUERY = `#graphql
  query GetProductsByFamily($query: String!, $first: Int!) {
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
          {namespace: "rolex", key: "FamilyName"}
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
