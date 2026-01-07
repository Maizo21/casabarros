import {Await, useLoaderData, Link} from 'react-router';
import {Suspense} from 'react';
import {Image} from '@shopify/hydrogen';
import {ProductItem} from '~/components/ProductItem';
import {Slider} from '~/components/Slider';
import BannerDoble from "~/components/BannerDoble";
import LogosMarcas from "~/components/LogosMarcas";
import TituloSeccion from "~/components/TituloSeccion";
import BannerDobleSimple from "~/components/BannerDobleSimple";
import Banner from "~/components/Banner";
import HomeTiendas from "~/components/HomeTiendas";
import RolexInsert from "~/components/RolexInsert";

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {Route.LoaderArgs}
 */
async function loadCriticalData({context}) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {Route.LoaderArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();

  const slides1 = [
    {
      id: 1,
      imageDesktop: "/img/banners/banner1.webp",
      imageMobile: "/img/banners/banner1-mob.webp",
      title: 'Nueva colección 2025',
      link: '/collections/nueva-coleccion',
      cta: 'Descubrir',
    },
    {
      id: 2,
      imageDesktop: "/img/banners/banner2.jpg",
      imageMobile: "/img/banners/banner2-mob.png",
      title: 'Exclusivos relojes de lujo',
      link: '/collections/relojes',
      cta: 'Descubrir',
    },
    {
      id: 3,
      imageDesktop: "/img/banners/banner3.jpg",
      imageMobile: "/img/banners/banner3-mob.jpg",
      title: 'Descubre la elegancia de Casa Barros',
      link: '/pages/about',
      cta: 'Descubrir',
    },
  ];

  const marcas = [
    { src: "/img/marcas/ROLEX.png", alt: "Rolex" },
    { src: "/img/marcas/PATEKPHILIPPE.png", alt: "Patek Philippe" },
    { src: "/img/marcas/CARTIER.png", alt: "Cartier" },
    { src: "/img/marcas/OMEGA.png", alt: "Omega" },
    { src: "/img/marcas/PANERAI.png", alt: "Panerai" },
    { src: "/img/marcas/LONGINES.png", alt: "Longines" },
    { src: "/img/marcas/tudorlogo-2.png", alt: "Tudor" },
  ];

  const bannerDoble1 = [
    {
      imageDesktop: "/img/items/item1.webp",
      imageMobile: "/img/items/item1-mob.jpg",
      title: "Anillos",
      cta: "Descubrir",
      link: "/collections/verano",
      colorDesktop: "#ffffff",
      colorMobile: "#ffffff",
    },
    {
      imageDesktop: "/img/items/item2.webp",
      imageMobile: "/img/items/item2-mob.webp",
      title: "Aros",
      cta: "Descubrir",
      link: "/collections/nuevos",
      colorDesktop: "#000000",
      colorMobile: "#ffffff",
    },
  ];

  const bannerDoble2 = [
    {
      imageDesktop: "/img/items/item3.webp",
      imageMobile: "/img/items/item3-mob.webp",
      title: "Pulseras",
      cta: "Descubrir",
      link: "/collections/verano",
      colorDesktop: "#000000",
      colorMobile: "#ffffff",
    },
    {
      imageDesktop: "/img/items/item4.webp",
      imageMobile: "/img/items/item4-mob.webp",
      title: "Collares",
      cta: "Descubrir",
      link: "/collections/nuevos",
      colorDesktop: "#ffffff",
      colorMobile: "#ffffff",
    },
  ];

  const bannerSimple1 = [
    {
      imageDesktop: "/img/items/item5.jpg",
      imageMobile: "/img/items/item5.jpg",
      title: "Anillos de Compromiso",
      cta: "Descubrir",
      link: "/collections/anillos-de-compromiso",
    },
    {
      imageDesktop: "/img/items/item6.jpg",
      imageMobile: "/img/items/item6.jpg",
      title: "Novios",
      cta: "Descubrir",
      link: "/collections/novios",
    },
  ];

  return (
    <div className="home">
      <Slider slides={slides1} />
      <LogosMarcas items={marcas} />
      <TituloSeccion
        titulo="Joyas"
        subtitulo="Descubre nuestra nueva colección"
      />
      <BannerDoble items={bannerDoble1} />
      <BannerDoble items={bannerDoble2} />
      <BannerDobleSimple items={bannerSimple1} />
      <Banner
        imageDesktop="/img/banners/banner4.jpg"
        imageMobile="/img/banners/banner4-mob.jpg"
        alt="Colección Casa Barros"
        link="/collections/nueva-coleccion"
      />
      <RolexInsert />
      <HomeTiendas />
      {/* <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts products={data.recommendedProducts} /> */}
    </div>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('./+types/_index').Route} Route */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
