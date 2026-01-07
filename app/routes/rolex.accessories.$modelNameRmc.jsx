import React from "react";
import { useLoaderData } from "react-router";
import ModelRolex from "~/rolex/ModelRolex";
import ModelWatchGallery from "~/rolex/ModelWatchGallery";
import ModelKeySelling from "~/rolex/ModelKeySelling";
import ModelWatchSpecifications from "~/rolex/ModelWatchSpecifications";
import BodyTextRolex from "~/rolex/BodyTextRolex";
import ModelInfo from "~/rolex/ModelInfo";
import ModelAvailability from "~/rolex/ModelAvailability";
import ModelContact from "~/rolex/ModelContact";
import PushRolex from "~/rolex/PushRolex";
import SingleStoreMap from "~/rolex/StoreMap/SingleStoreMap";
import locations from "~/rolex/StoreMap/locations";

export const meta = ({ data, params }) => {
  if (!data?.product) {
    return [
      { title: 'Rolex Accessory | Casa Barros' },
      { name: 'description', content: 'Distribuidor Oficial Rolex en Chile' }
    ];
  }

  const { product, modelName, rmc } = data;

  // Extraer metafields
  const rolexMetafields = product.metafields?.filter(mf => mf?.namespace === 'rolex') || [];
  const getMetafield = (key) => rolexMetafields.find(mf => mf?.key === key)?.value || '';

  // Información del producto
  const productTitle = product.title;
  const productDescription = `${product.title} - ${getMetafield('Spec_ModelCase')} - RMC: ${getMetafield('RMC')}. Distribuidor Oficial Rolex en Chile. ${product.description || ''}`.substring(0, 160);
  const productImage = product.featuredImage?.url || '/imgRolex/model-fake.webp';
  const productUrl = `https://casabarros.cl/rolex/accessories/${modelName}-${rmc}`;

  return [
    // Basic meta tags
    { title: `${productTitle} | Casa Barros - Distribuidor Oficial Rolex` },
    { name: 'description', content: productDescription },
    { name: 'keywords', content: `Rolex, ${productTitle}, ${getMetafield('FamilyName')}, ${getMetafield('ModelName')}, Casa Barros, Chile, Distribuidor Oficial` },

    // Open Graph / Facebook
    { property: 'og:title', content: `${productTitle} | Casa Barros` },
    { property: 'og:description', content: productDescription },
    { property: 'og:image', content: productImage },
    { property: 'og:url', content: productUrl },
    { property: 'og:type', content: 'product' },
    { property: 'og:site_name', content: 'Casa Barros' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${productTitle} | Casa Barros` },
    { name: 'twitter:description', content: productDescription },
    { name: 'twitter:image', content: productImage },

    // Product specific (Schema.org)
    { property: 'product:brand', content: 'Rolex' },
    { property: 'product:availability', content: 'in stock' },
    { property: 'product:condition', content: 'new' },

    // Canonical URL
    { tagName: 'link', rel: 'canonical', href: productUrl },

    // Robots
    { name: 'robots', content: 'index, follow' },
  ];
};

export const handle = ({ data }) => ({
  breadcrumb: data?.product?.title || "Rolex Accessory"
});

// Helper: Convertir slug a Title Case (land-dweller-40 → Land-Dweller 40)
function slugToTitleCase(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

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

function formatUSD(amount) {
  if (!amount) return null;

  const number = Math.round(Number(amount));

  return `USD ${number.toLocaleString('en-US')}`;
}


export async function loader({ params, context }) {
  const { modelNameRmc } = params;
  const { storefront } = context;

  // Separar el parámetro combinado modelName-rmc
  // Ejemplo: "land-dweller-40-m127334-0001" o "gemelos-estriado-a1039"
  // Necesitamos separar en modelName y rmc
  // El RMC siempre empieza con una letra seguida de números (ej: m127334-0001, a1039)
  const rmcMatch = modelNameRmc.match(/([a-z]\d+(?:-\d+)*)$/i);

  if (!rmcMatch) {
    console.log('❌ [ACCESSORIES] No se pudo extraer el RMC de la URL:', modelNameRmc);
    throw new Response("Invalid URL format", { status: 404 });
  }

  const rmc = rmcMatch[1];
  const modelName = modelNameRmc.substring(0, modelNameRmc.length - rmc.length - 1); // -1 para quitar el guion

  try {
    // Intentar buscar por handle (asumiendo que el handle es el RMC en lowercase)
    const handleToTry = rmc.toLowerCase();

    console.log('🔍 [ACCESSORIES] Buscando producto con handle:', handleToTry);
    console.log('🔍 [ACCESSORIES] ModelName extraído:', modelName);
    console.log('🔍 [ACCESSORIES] RMC extraído:', rmc);

    const result = await storefront.query(PRODUCT_BY_HANDLE_QUERY, {
      variables: {
        handle: handleToTry,
      },
    });

    const { product } = result;

    // Verificar que el producto existe y es de Rolex
    if (!product) {
      console.log('❌ [ACCESSORIES] Producto no encontrado');
      throw new Response("Product not found", { status: 404 });
    }

    console.log('✅ [ACCESSORIES] Producto encontrado:', product.title, '- Vendor:', product.vendor);

    if (product.vendor !== 'Rolex') {
      throw new Response("Product is not a Rolex product", { status: 404 });
    }

    // Verificar que el producto ES un accesorio (usando tag "accessories" o metafield CollectionName)
    const metafields = product.metafields || [];
    const collectionNameMeta = metafields.find(mf => mf?.key === 'CollectionName');
    const tags = product.tags || [];

    console.log('🏷️  [ACCESSORIES] Tags:', tags);
    console.log('🏷️  [ACCESSORIES] CollectionName metafield:', collectionNameMeta);

    // Solo permitir productos que sean accesorios (tag "accessories" o tienen CollectionName)
    const isAccessory = tags.includes('accessories') || (collectionNameMeta && collectionNameMeta.value);

    if (!isAccessory) {
      console.log('❌ [ACCESSORIES] Producto no es un accesorio, bloqueando acceso');
      throw new Response("Product is not an accessory", { status: 404 });
    }

    // Verificar que los metafields coincidan con la URL
    const modelNameMeta = metafields.find(mf => mf?.key === 'ModelName');
    const rmcMeta = metafields.find(mf => mf?.key === 'RMC');

    if (!modelNameMeta || !rmcMeta) {
      console.log('⚠️  [ACCESSORIES] Faltan metafields requeridos');
      throw new Response("Product missing required metafields", { status: 404 });
    }

    // Verificar que coincidan con los parámetros de la URL
    const modelNameMatch = normalizeSlug(modelNameMeta.value) === normalizeSlug(modelName);
    const rmcMatch = rmcMeta.value.toLowerCase() === rmc.toLowerCase();

    console.log('🔍 [ACCESSORIES] Verificación de coincidencias:');
    console.log('   ModelName:', modelNameMeta.value, '→', normalizeSlug(modelNameMeta.value), '===', normalizeSlug(modelName), '?', modelNameMatch);
    console.log('   RMC:', rmcMeta.value, '→', rmcMeta.value.toLowerCase(), '===', rmc.toLowerCase(), '?', rmcMatch);

    if (!modelNameMatch || !rmcMatch) {
      throw new Response("Product metafields don't match URL parameters", { status: 404 });
    }

    return { product, modelName, rmc };
  } catch (error) {
    console.error('❌ [ACCESSORIES] Error loading Rolex accessory:', error);

    if (error instanceof Response) {
      throw error;
    }

    throw new Response(error.message || "Error loading product", { status: 500 });
  }
}

export default function RolexAccessoryPage() {
  const { product, modelName, rmc } = useLoaderData();

  // Extraer metafields de Rolex
  const rolexMetafields = product.metafields?.filter(
    (mf) => mf?.namespace === 'rolex'
  ) || [];

  // Helper para obtener valor de metafield
  const getMetafieldValue = (key) => {
    return rolexMetafields.find(mf => mf?.key === key)?.value || "";
  };

  // Obtener datos de la colección basada en FamilyName
  const familyName = getMetafieldValue('FamilyName');

  // Helper para obtener imágenes de galería (retorna {desktop, mobile})
  const getGalleryImage = (key) => {
    const value = getMetafieldValue(key);
    if (!value) return { desktop: "", mobile: "" };

    const [landscape, portrait] = value.split(',').map(s => s.trim());
    return {
      desktop: landscape ? `watches/${landscape}.jpg` : "",
      mobile: portrait ? `watches/${portrait}.jpg` : "",
    };
  };

  // Helper para obtener imágenes de características con rutas absolutas (retorna {desktop, mobile})
  const getFeatureImage = (key) => {
    const value = getMetafieldValue(key);
    if (!value) return { desktop: "", mobile: "" };

    const [landscape, portrait] = value.split(',').map(s => s.trim());
    return {
      desktop: landscape ? `/watches/${landscape}.jpg` : "",
      mobile: portrait ? `/watches/${portrait}.jpg` : "",
    };
  };

  const firstVariant = product.variants?.nodes?.[0];

  const price = firstVariant?.price?.amount
    ? formatUSD(firstVariant.price.amount)
    : null;

  const MODEL_PAGE_CONTENT = {
    model: {
      eyebrow: product.vendor || "Rolex",
      title: product.title,
      subtitle: getMetafieldValue('Spec_ModelCase'),
      highlight: getMetafieldValue('RMC'),
      price: price,
      ctas: [
        {label: "+56 226189551", type: "phone"},
        {label: "WhatsApp", type: "chat"},
        {label: "Envíe un mensaje", type: "mail"},
        {label: "Encuéntrenos", type: "place"},
      ],
      image: {
        desktop: '/watches/rolex-cufflink-asset-packshot/rolex-accessories-' + getMetafieldValue('RMC').toLowerCase() + '-packshot.png' || "/imgRolex/model-fake.webp",
        mobile: '/watches/rolex-cufflink-asset-packshot/rolex-accessories-' + getMetafieldValue('RMC').toLowerCase() + '-packshot.png' || "/imgRolex/model-fake.webp",
        alt: product.featuredImage?.altText || "imagen",
      },
    },
    specifications: {
      items: [
        {
          title: "Referencia",
          body: getMetafieldValue('RMC'),
        },
        {
          title: "Colección",
          body: getMetafieldValue('CollectionName'),
        },
        {
          title: "Modelo",
          body: getMetafieldValue('ModelName'),
        },
        {
          title: "Material",
          body: getMetafieldValue('Spec_Material1'),
        },
      ]
    },
    bodyText: {
      heading: getMetafieldValue('Intro_Title'),
      bodyStrong: "",
      bodyRest: getMetafieldValue('Intro_Text'),
      cta: { label: "", href: "" },
      imageAfter: {
        desktop: "/watches/rolex-cufflink-asset-background/rolex-cufflink-asset-background-landscape/rolex-accessories-" + getMetafieldValue('RMC').toLowerCase() + "-landscape.jpg",
        mobile: "/watches/rolex-cufflink-asset-background/rolex-cufflink-asset-background-portrait/rolex-accessories-" + getMetafieldValue('RMC').toLowerCase() + "-portrait.jpg",
        alt: "Imagen",
        className: "rolex-col-sm-6 rolex-col-md-6 rolex-col-lg-6",
      },
    },
    contact: {
      items: [
        {
          title: "Envíenos un mensaje",
          image: {
            desktop: "/img/banners/contactBanner.jpg",
            mobile: "/img/banners/contactBannerMob.webp",
            alt: "imagen",
          },
          epigrafe: "Enviar un mensaje",
          headline: "Introduzca su mensaje",
          text: "Le agradecemos su interés por los accesorios Rolex. Introduzca su mensaje, pronto le responderemos.",
          primaryCtaText: "Continuar",
          epigrafe2: "Enviar un mensaje",
          headline2: "Introduzca su información de contacto",
          text2: "",
          submitCtaText: "Enviar",
          epigrafe3: "Enviar un mensaje",
          headline3: "Muchas gracias",
          text3a: "Su mensaje fue enviado con éxito.",
          text3b: "Uno de nuestros representantes recibirá su consulta y le enviará la respuesta lo antes posible.",
          // successCtaText: "Volver",
        },
      ],
      defaultOpen: 0,
    },
    pushSections: [
      {
        title: "",
        items: [
          {
            colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
            image: {
              desktop: '/watches/rolex-accessories-model-page-assets/rolex_accessories-page-assets-landscape/rolex-accessories-rolexcufflinks_2403jva_001-landscape.jpg',
              mobile: 'watches/rolex-accessories-model-page-assets/rolex_accessories-page-assets-portrait/rolex-accessories-rolexcufflinks_2403jva_001-portrait.jpg',
              alt: 'Descubra los accesorios Rolex',
            },
            eyebrow: 'Colección',
            heading: 'Descubra los accesorios Rolex',
            body: "",
            cta: {label: "Más información", href: "/rolex/accessories" },
          },
        ],
      },
    ]
  };

  return (
    <section className="pageRolex">
      <ModelRolex
        content={MODEL_PAGE_CONTENT.model}
        galleryImages={MODEL_PAGE_CONTENT.gallery}
      />
      <ModelWatchSpecifications
        items={MODEL_PAGE_CONTENT.specifications.items}
        cta={MODEL_PAGE_CONTENT.specifications.cta}
      />
      <BodyTextRolex content={MODEL_PAGE_CONTENT.bodyText} />
      <ModelContact
        items={MODEL_PAGE_CONTENT.contact.items}
        defaultOpen={MODEL_PAGE_CONTENT.contact.defaultOpen}
      />
      <PushRolex sections={MODEL_PAGE_CONTENT.pushSections} />
    </section>
  );
}

const PRODUCT_BY_HANDLE_QUERY = `#graphql
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      description
      tags
      featuredImage {
        url
        altText
      }
      images(first: 4) {
        nodes {
          url
          altText
        }
      }
      variants(first: 1) {
        nodes {
          price {
            amount
            currencyCode
          }
        }
      }
      metafields(identifiers: [
        {namespace: "rolex", key: "RMC"}
        {namespace: "rolex", key: "CollectionName"}
        {namespace: "rolex", key: "ModelName"}
        {namespace: "rolex", key: "Ranking"}
        {namespace: "rolex", key: "Spec_Material1"}
        {namespace: "rolex", key: "Spec_Material2"}
        {namespace: "rolex", key: "Spec_Material3"}
        {namespace: "rolex", key: "Intro_Title"}
        {namespace: "rolex", key: "Intro_Text"}
        {namespace: "rolex", key: "Intro_Asset"}
      ]) {
        namespace
        key
        value
      }
    }
  }
`;
