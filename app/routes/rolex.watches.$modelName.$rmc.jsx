import React from "react";
import { useLoaderData } from "react-router";
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

export const meta = ({ data, params }) => {
  if (!data?.product) {
    return [
      { title: 'Rolex Watch | Casa Barros' },
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
  const productUrl = `https://casabarros.cl/rolex/watches/${modelName}/${rmc}`;

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
  breadcrumb: data?.product?.title || "Rolex Watch"
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

// Mapeo de colecciones Rolex
const ROLEX_COLLECTIONS = {
  "LAND-DWELLER": {
    eyebrow: "La colección Rolex Land-Dweller",
    heading: "Ampliar horizontes",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-land-dweller-m127334-0001_2503-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-land-dweller-m127334-0001_2503-portrait.jpg",
  },
  "AIR-KING": {
    eyebrow: "La colección Rolex Air-King",
    heading: "Llevarlo al cielo",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-air-king-m126900-0001_2210jva_001-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-air-king-m126900-0001_2210jva_001-portrait.jpg",
  },
  "DATEJUST": {
    eyebrow: "La colección Rolex Datejust",
    heading: "Una fecha para recordar",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-datejust-m126234-0051_2210jva_001-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-datejust-m126234-0051_2210jva_001-portrait.jpg",
  },
  "DAY-DATE": {
    eyebrow: "La colección Rolex Day‑Date",
    heading: "Logros ejemplares",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-day-date-m228235-0055_2402jva_001-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-day-date-m228235-0055_2402jva_001-portrait.jpg",
  },
  "COSMOGRAPH DAYTONA": {
    eyebrow: "La colección Rolex Cosmograph Daytona",
    heading: "El triunfo de la resistencia",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-the-cosmograph-daytona-cover_m126508-0008-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-the-cosmograph-daytona-cover_m126508-0008-portrait.jpg",
  },
  "EXPLORER": {
    eyebrow: "La colección Rolex Explorer",
    heading: "La grandeza de la aventura",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-explorer-m124273-0001_2210jva_001.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-explorer-m124273-0001_2210jva_001-portrait.jpg",
  },
  "OYSTER PERPETUAL": {
    eyebrow: "La colección Rolex Oyster Perpetual",
    heading: "Un mundo de posibilidades",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-oyster-perpetual-m134300-0006_2503-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-oyster-perpetual-m134300-0006_2503-portrait.jpg",
  },
  "SKYDWELLER": {
    eyebrow: "La colección Rolex Sky‑Dweller",
    heading: "Altos vuelos",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-sky-dweller-m336935-0008_2312jva_001_rvb-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-sky-dweller-m336935-0008_2312jva_001_rvb-portrait.jpg",
  },
  "SUBMARINER": {
    eyebrow: "La colección Rolex Submariner",
    heading: "Confianza profunda",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-submariner-m124060-0001-0002_2210jva_001-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-submariner-m124060-0001-0002_2210jva_001-portrait.jpg",
  },
  "YACHT-MASTER": {
    eyebrow: "La colección Rolex Yacht‑Master",
    heading: "Carácter marino",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-yacht-master-m226627-0001_2301jva_001-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-yacht-master-m226627-0001_2301jva_001-portrait.jpg",
  },
  "LADYDATEJUST": {
    eyebrow: "La colección Rolex Lady-Datejust",
    heading: "Elegancia en femenino",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-lady-datejust-m279135rbr-0001_2301jva_001-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-lady-datejust-m279135rbr-0001_2301jva_001-portrait.jpg",
  },
  "GMT-MASTER II": {
    eyebrow: "La colección Rolex GMT‑Master II",
    heading: "Mantener los vínculos",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-gmt-master-2-m126710grnr-0003_2312jva_001_rvb-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-gmt-master-2-m126710grnr-0003_2312jva_001_rvb-portrait.jpg",
  },
  "1908": {
    eyebrow: "La colección Rolex 1908",
    heading: "Clasicismo de vanguardia",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-1908-cover_m52508-0008_250-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-1908-m52508-0008_2503-portrait.jpg",
  },
  "SEA-DWELLER": {
    eyebrow: "La colección Rolex Sea‑Dweller",
    heading: "Ciudadano de las profundidades",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-sea-dweller-m126603-0001_2210jva_0011-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-sea-dweller-m126603-0001_2210jva_0011-portrait.jpg",
  },
  "DEEPSEA": {
    eyebrow: "La colección Rolex Deepsea",
    heading: "Relojes de submarinismo extremos",
    desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-collection_banner-rolex-deepsea-m136668lb-0001_2312jva_001_rvb-landscape.jpg",
    mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-collection_banner-rolex-deepsea-m136668lb-0001_2312jva_001_rvb-portrait.jpg",
  },
};

export async function loader({ params, context }) {
  const { modelName, rmc } = params;
  const { storefront } = context;

  try {
    // Intentar buscar por handle (asumiendo que el handle es el RMC en lowercase)
    const handleToTry = rmc.toLowerCase();

    console.log('🔍 Buscando producto con handle:', handleToTry);

    const result = await storefront.query(PRODUCT_BY_HANDLE_QUERY, {
      variables: {
        handle: handleToTry,
      },
    });

    console.log('📦 Resultado de la query:', JSON.stringify(result, null, 2));

    const { product } = result;

    // Verificar que el producto existe y es de Rolex
    if (!product) {
      console.log('❌ Producto no encontrado');
      throw new Response("Product not found", { status: 404 });
    }

    console.log('✅ Producto encontrado:', product.title, '- Vendor:', product.vendor);

    if (product.vendor !== 'Rolex') {
      throw new Response("Product is not a Rolex product", { status: 404 });
    }

    // Verificar que los metafields coincidan con la URL
    const metafields = product.metafields || [];
    console.log('📋 Metafields encontrados:', metafields);

    // BLOQUEAR ACCESORIOS: Los accesorios deben usar la ruta /rolex/accessories/
    const collectionNameMeta = metafields.find(mf => mf?.key === 'CollectionName');
    const tags = product.tags || [];

    console.log('🏷️  Tags:', tags);
    console.log('🏷️  CollectionName metafield:', collectionNameMeta);

    const isAccessory = tags.includes('accessories') || (collectionNameMeta && collectionNameMeta.value);

    if (isAccessory) {
      console.log('❌ Producto es un accesorio, debe usar la ruta /rolex/accessories/');
      throw new Response("This product is an accessory and should be accessed via /rolex/accessories/", { status: 404 });
    }

    const modelNameMeta = metafields.find(mf => mf?.key === 'ModelName');
    const rmcMeta = metafields.find(mf => mf?.key === 'RMC');

    console.log('🏷️  ModelName metafield:', modelNameMeta);
    console.log('🏷️  RMC metafield:', rmcMeta);

    if (!modelNameMeta || !rmcMeta) {
      console.log('⚠️  Faltan metafields requeridos');
      throw new Response("Product missing required metafields", { status: 404 });
    }

    // Verificar que coincidan con los parámetros de la URL
    const modelNameMatch = normalizeSlug(modelNameMeta.value) === normalizeSlug(modelName);
    const rmcMatch = rmcMeta.value.toLowerCase() === rmc.toLowerCase();

    console.log('🔍 Verificación de coincidencias:');
    console.log('   ModelName:', modelNameMeta.value, '→', normalizeSlug(modelNameMeta.value), '===', normalizeSlug(modelName), '?', modelNameMatch);
    console.log('   RMC:', rmcMeta.value, '→', rmcMeta.value.toLowerCase(), '===', rmc.toLowerCase(), '?', rmcMatch);

    if (!modelNameMatch || !rmcMatch) {
      throw new Response("Product metafields don't match URL parameters", { status: 404 });
    }

    return { product, modelName, rmc };
  } catch (error) {
    console.error('❌ Error loading Rolex product:', error);

    if (error instanceof Response) {
      throw error;
    }

    throw new Response(error.message || "Error loading product", { status: 500 });
  }
}

export default function RolexProductPage() {
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
  const collectionData = ROLEX_COLLECTIONS[familyName.toUpperCase()] || null;

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
        desktop: '/watches/upright_watch_assets_landscape_model/' + getMetafieldValue('RMC').toLowerCase() + '.jpg' || "/imgRolex/model-fake.webp",
        mobile: '/watches/upright_watch_assets_portrait_model/' + getMetafieldValue('RMC').toLowerCase() + '.jpg' || "/imgRolex/model-fake.webp",
        alt: product.featuredImage?.altText || "imagen",
      },
    },
    gallery: [
      {
        ...getGalleryImage('ModelGallery_image1'),
        alt: "imagen",
      },
      {
        ...getGalleryImage('ModelGallery_image2'),
        alt: "imagen",
      },
      {
        ...getGalleryImage('ModelGallery_image3'),
        alt: "imagen",
      },
      {
        ...getGalleryImage('ModelGallery_image4'),
        alt: "imagen",
      },
    ],
    keySelling: {
      defaultOpen: 0,
      image: {
        desktop: "/watches/rolex-model-page-editorial-assets-landscape/rolex-guarantee_retailcampaign2020_guaranteecard-landscape.jpg",
        mobile: "/watches/rolex-model-page-editorial-assets-portrait/rolex-guarantee_retailcampaign2020_guaranteecard-mobile.jpg",
        alt: "imagen",
      },
      items: [
        {
          title: "La garantía Rolex",
          text: "Para garantizar la precisión y la fiabilidad de sus relojes, Rolex somete a cada reloj, tras el ensamblaje, a una serie de pruebas estrictas. Todos los nuevos relojes adquiridos en uno de los Distribuidores Oficiales de la marca incluyen una garantía internacional de cinco años. Cuando compra un Rolex, el Distribuidor Oficial rellena y deja registrada la fecha en la tarjeta de garantía Rolex, que certifica la autenticidad de su reloj.",
        },
        {
          title: "El sello verde",
          text: "La garantía de cinco años que se aplica a todos los modelos Rolex viene acompañada de un sello verde, un símbolo de su estatus de Cronómetro Superlativo. Esta exclusiva certificación da fe de que el reloj ha superado con éxito una serie de controles finales específicos llevados a cabo por Rolex en sus propios laboratorios y según sus propios criterios, como complemento de la certificación oficial COSC de su movimiento.",
        },
        {
          title: "Estuche Rolex",
          text: "Todos los relojes Rolex se entregan en un precioso estuche verde que protege y guarda la joya que anida en su interior. Además, el estuche simboliza igualmente el acto de regalar. Por ello, si usted quiere obsequiar a alguien con un Rolex, es importante que lo primero que vea el destinatario esté a la altura de su contenido.",
        },
      ],
    },
    specifications: {
      items: [
        {
          title: "Referencia",
          body: getMetafieldValue('RMC'),
        },
        {
          title: "Movimiento",
          body: getMetafieldValue('Spec_Movement'),
        },
        {
          title: "Dial",
          body: getMetafieldValue('Spec_Dial'),
        },
        {
          title: "Modelo de caja",
          body: getMetafieldValue('Spec_ModelCase'),
        },
        {
          title: "Calibre",
          body: getMetafieldValue('Spec_Calibre'),
        },
        {
          title: "Certificación",
          body: getMetafieldValue('Spec_Certification'),
        },
        {
          title: "Bisel",
          body: getMetafieldValue('Spec_Certification'),
        },
        {
          title: "Brazalete",
          body: getMetafieldValue('Spec_Bracelet'),
        },
        {
          title: "Hermeticidad",
          body: getMetafieldValue('Spec_WaterResistance'),
        },
      ],
      cta: {
        label: "Descargar Brochure",
        href: getMetafieldValue('Brochure'),
        iconSrc: "/imgRolex/assets/download-back-button.svg",
        iconAlt: "icono descargar",
      },
    },
    modelInfo: {
      sections: [
        {
          heading: getMetafieldValue('Feature1_Title'),
          body: getMetafieldValue('Feature1_Text'),
          image: {
            ...getFeatureImage('Feature1_Asset'),
            alt: product.title,
          },
        },
        {
          heading: getMetafieldValue('Feature2_Title'),
          body: getMetafieldValue('Feature2_Text'),
          image: {
            ...getFeatureImage('Feature2_Asset'),
            alt: product.title,
          },
        },
        {
          heading: getMetafieldValue('Feature3_Title'),
          body: getMetafieldValue('Feature3_Text'),
          image: {
            ...getFeatureImage('Feature3_Asset'),
            alt: product.title,
          },
        },
      ],
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
          text: "Le agradecemos su interés por los relojes Rolex. Introduzca su mensaje, pronto le responderemos.",
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
    pushSections: collectionData ? [
      {
        title: collectionData.eyebrow,
        items: [
          {
            colClass: "rolex-col-sm-6 rolex-col-md-12 rolex-col-lg-12",
            image: {
              desktop: collectionData.desktop,
              mobile: collectionData.mobile,
              alt: collectionData.eyebrow,
            },
            eyebrow: collectionData.eyebrow,
            heading: collectionData.heading,
            cta: {label: "Más información", href: "#"},
          },
        ],
      }
    ] : [],
  };

  return (
    <section className="pageRolex">
      <ModelRolex
        content={MODEL_PAGE_CONTENT.model}
        galleryImages={MODEL_PAGE_CONTENT.gallery}
      />

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
      <ModelInfo content={MODEL_PAGE_CONTENT.modelInfo} />
      <ModelAvailability />
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
        {namespace: "rolex", key: "Reference"}
        {namespace: "rolex", key: "FamilyName"}
        {namespace: "rolex", key: "ModelName"}
        {namespace: "rolex", key: "CollectionName"}
        {namespace: "rolex", key: "Ranking"}
        {namespace: "rolex", key: "Spec_ModelCase"}
        {namespace: "rolex", key: "Spec_Diameter"}
        {namespace: "rolex", key: "Spec_Material"}
        {namespace: "rolex", key: "Spec_Bezel"}
        {namespace: "rolex", key: "Spec_WindingCrown"}
        {namespace: "rolex", key: "Spec_Crystal"}
        {namespace: "rolex", key: "Spec_WaterResistance"}
        {namespace: "rolex", key: "Spec_Movement"}
        {namespace: "rolex", key: "Spec_Calibre"}
        {namespace: "rolex", key: "Spec_Bracelet"}
        {namespace: "rolex", key: "Spec_BraceletMaterial"}
        {namespace: "rolex", key: "Spec_Clasp"}
        {namespace: "rolex", key: "Spec_Dial"}
        {namespace: "rolex", key: "Spec_Gem_setting"}
        {namespace: "rolex", key: "Spec_PowerReserve"}
        {namespace: "rolex", key: "Spec_Certification"}
        {namespace: "rolex", key: "ModelGallery_image1"}
        {namespace: "rolex", key: "ModelGallery_image2"}
        {namespace: "rolex", key: "ModelGallery_image3"}
        {namespace: "rolex", key: "ModelGallery_image4"}
        {namespace: "rolex", key: "Feature1_Title"}
        {namespace: "rolex", key: "Feature1_Text"}
        {namespace: "rolex", key: "Feature1_Asset"}
        {namespace: "rolex", key: "Feature2_Title"}
        {namespace: "rolex", key: "Feature2_Text"}
        {namespace: "rolex", key: "Feature2_Asset"}
        {namespace: "rolex", key: "Feature3_Title"}
        {namespace: "rolex", key: "Feature3_Text"}
        {namespace: "rolex", key: "Feature3_Asset"}
        {namespace: "rolex", key: "Brochure"}
        {namespace: "rolex", key: "H1"}
      ]) {
        namespace
        key
        value
      }
    }
  }
`;
