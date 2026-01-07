import {redirect, useLoaderData, useNavigate, useFetcher, useParams} from 'react-router';
import {getPaginationVariables, Analytics, Pagination} from '@shopify/hydrogen';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {ProductItem} from '~/components/ProductItem';
import React, {useEffect, useRef, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { ChevronDown, ChevronUp, Trash, TextAlignJustify } from 'lucide-react';
import '~/styles/collection.css';

/**
 * @type {Route.MetaFunction}
 */
export const meta = ({data}) => {
  return [{title: `Hydrogen | ${data?.collection.title ?? ''} Collection`}];
};

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, params, request}) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {pageBy: 12});

  if (!handle) throw redirect('/collections');

  // 🧠 Leer los parámetros enviados (sortKey, reverse, filters)
  const url = new URL(request.url);
  const sortKeyParam = url.searchParams.get('sortKey') || 'BEST_SELLING';
  const reverseParam = url.searchParams.get('reverse') === 'true';
  const filtersParam = url.searchParams.get('filters');

  // 🧭 Preparar variables con valores por defecto
  let sortKey = sortKeyParam;
  let reverse = reverseParam;
  let filters = [];

  // Si se enviaron filtros en formato JSON, intentar parsearlos
  if (filtersParam) {
    try {
      filters = JSON.parse(filtersParam);
    } catch (e) {
      console.warn('❌ Error al parsear filtros:', e);
      filters = [];
    }
  }

  // 🔍 Ejecutar la query con las variables correctas
  const [{collection}] = await Promise.all([
    storefront.query(COLLECTION_QUERY, {
      variables: {
        handle,
        ...paginationVariables,
        sortKey,
        reverse,
        filters,
      },
    }),
  ]);

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {status: 404});
  }

  redirectIfHandleIsLocalized(request, {handle, data: collection});

  // ✅ Calcular el total de productos
  // Sumamos todos los counts del filtro de availability que tiene todos los productos
  let totalProducts = 0;
  if (collection.products.filters) {
    const availabilityFilter = collection.products.filters.find(
      f => f.id === 'filter.v.availability'
    );
    if (availabilityFilter) {
      totalProducts = availabilityFilter.values.reduce((sum, v) => sum + v.count, 0);
    }
  }
  
  // Si no encontramos el filtro, usar la cantidad de nodos como fallback
  if (totalProducts === 0) {
    totalProducts = collection.products.nodes.length;
  }

  // ✅ Filtrar nulos
  const metafields = (collection.metafields || []).filter(Boolean);

  // ✅ Buscar cada metafield
  const verTituloField = metafields.find((m) => m?.key === 'ver_titulo');
  const verImagenField = metafields.find((m) => m?.key === 'ver_imagen');
  const verDescripcionField = metafields.find((m) => m?.key === 'ver_descripcion');

  // ✅ Si no existen, usar true como valor por defecto
  const verTitulo = verTituloField ? verTituloField.value === 'true' : true;
  const verImagen = verImagenField ? verImagenField.value === 'true' : true;
  const verDescripcion = verDescripcionField ? verDescripcionField.value === 'true' : true;

  return {
    collection,
    sortKey,
    reverse,
    filters,
    totalProducts,
    verTitulo,
    verImagen,
    verDescripcion,
  };
}

function loadDeferredData({context}) {
  return {};
}

export default function Collection() {
  const {
    collection,
    sortKey,
    reverse,
    filters,
    totalProducts,
    verTitulo,
    verImagen,
    verDescripcion,
  } = useLoaderData();
  
  const {ref, inView} = useInView();
  const navigate = useNavigate(); 
  const fetcher = useFetcher();
  const params = useParams();

  const [currentSort, setCurrentSort] = React.useState(sortKey);
  const [currentFilters, setCurrentFilters] = React.useState(filters);
  const [currentReverse, setCurrentReverse] = useState(reverse);

  const [displayedCount, setDisplayedCount] = useState(collection.products.nodes.length);
  const totalCount = totalProducts; // ✅ Usar el total del loader

  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // 🔁 Manejo de cambio de sort
  function handleSortChange(event) {
    const value = event.target.value;
    let newSortKey = 'BEST_SELLING';
    let newReverse = false;

    switch (value) {
      case 'PRICE_ASC':
        newSortKey = 'PRICE';
        newReverse = false;
        break;
      case 'PRICE_DESC':
        newSortKey = 'PRICE';
        newReverse = true;
        break;
      case 'CREATED_DESC':
        newSortKey = 'CREATED';
        newReverse = true;
        break;
      case 'CREATED_ASC':
        newSortKey = 'CREATED';
        newReverse = false;
        break;
      case 'TITLE_ASC':
        newSortKey = 'TITLE';
        newReverse = false;
        break;
      case 'TITLE_DESC':
        newSortKey = 'TITLE';
        newReverse = true;
        break;
      default:
        newSortKey = 'BEST_SELLING';
        newReverse = false;
    }

    setCurrentSort(newSortKey);       
    setCurrentReverse(newReverse);

    const query = `?sortKey=${newSortKey}&reverse=${newReverse}&filters=${encodeURIComponent(
      JSON.stringify(currentFilters) 
    )}`;
    navigate(`/collections/${params.handle}${query}`, {replace: true}); 
    window.scrollTo(0, 0);
  }

// 🔘 Activar/desactivar filtro de productos disponibles
function toggleInStockFilter(event) {
    const isChecked = event.target.checked;
    let newFilters = [];

    if (isChecked) {
        newFilters = currentFilters.filter((f) => !('available' in f));
        newFilters.push({ available: true });
    } else {
        newFilters = currentFilters.filter((f) => !('available' in f));
    }
    
    setCurrentFilters(newFilters);

    const query = `?sortKey=${currentSort}&reverse=${currentReverse}&filters=${encodeURIComponent(
      JSON.stringify(newFilters)
    )}`;
    navigate(`/collections/${params.handle}${query}`, {replace: true});
    window.scrollTo(0, 0);
}

const data = fetcher.data || { collection };
const products = data.collection?.products?.nodes || [];

function handleDynamicFilterChange(event, input) {
    const parsed = JSON.parse(input);
    const filterString = (f) => JSON.stringify(f);

    const newFilters = event.target.checked
      ? [...currentFilters, parsed]
      : currentFilters.filter((f) => filterString(f) !== filterString(parsed));

    setCurrentFilters(newFilters);

    const query = `?sortKey=${currentSort}&reverse=${currentReverse}&filters=${encodeURIComponent(
      JSON.stringify(newFilters)
    )}`;
    navigate(`/collections/${params.handle}${query}`, {replace: true});
    window.scrollTo(0, 0);
}

  return (
    <div className="contentWrap">
      <div className="collection">
        {verTitulo && <h1 className="collection-title">{collection.title}</h1>}
        {verImagen && collection.image && (
          <div className="collection-image">
            <img
              src={collection.image.url}
              alt={collection.image.altText || collection.title}
              width={collection.image.width}
              height={collection.image.height}
              loading="eager"
            />
          </div>
        )}
        {verDescripcion && collection.description && (
          <p className="collection-description">{collection.description}</p>
        )}

        <div className="collection-filters">
          <p className="collection-count">
            Mostrando 1-{displayedCount} de {totalCount} resultados
          </p>

          <button
            className="displaySortMobile"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            aria-expanded={showMobileFilters}
            aria-controls="collection-filters-bar"
          >
            <TextAlignJustify size={20} strokeWidth={1.5} />
          </button>

          {/* 🔽 Controles de orden y filtros */}
          <div
            id="collection-filters-bar"
            className={`collection-filters-bar ${showMobileFilters ? 'is-active' : ''}`}
          >
            {/* 🔘 Dropdowns generados dinámicamente desde Shopify */}
            {collection.products.filters.map((filter) => (
              <div key={filter.id} className="filter-dropdown">
                <button
                  className="filter-button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === filter.id ? null : filter.id)
                  }
                >
                  {filter.label}
                  {openDropdown === filter.id ? (
                    <ChevronUp size={16} strokeWidth={1.5} />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.5} />
                  )}
                </button>

                {openDropdown === filter.id && (
                  <div className="filter-dropdown-menu">
                    {filter.type === 'LIST' && (
                      <>
                        {filter.values.map((value) => (
                          <label key={value.id} className="filter-option">
                            <input
                              type="checkbox"
                              checked={currentFilters.some(
                                (f) => JSON.stringify(f) === value.input
                              )}
                              value={value.input}
                              onChange={(e) =>
                                handleDynamicFilterChange(e, value.input)
                              }
                            />
                            {value.label} ({value.count})
                          </label>
                        ))}
                        <button
                          className="filter-clear"
                          onClick={() => {
                            const cleared = currentFilters.filter(
                              (f) => !filter.values.some(
                                (v) => JSON.stringify(f) === v.input
                              )
                            );
                            setCurrentFilters(cleared);
                            const query = `?sortKey=${currentSort}&reverse=${currentReverse}&filters=${encodeURIComponent(
                              JSON.stringify(cleared)
                            )}`;
                            navigate(`/collections/${params.handle}${query}`, {
                              replace: true,
                            });
                            setOpenDropdown(null);
                          }}
                        >
                          <Trash size={16} strokeWidth={1.5} /> Limpiar filtro
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* 🔽 Ordenar por (manteniendo tu select original) */}
            <div className="filter-dropdown filter-dropdown-sort">
              <label className="sort-filters">
                Ordenar por:{' '}
                <div className="select-wrapper">
                  <select
                    value={`${currentSort}_${currentReverse ? 'DESC' : 'ASC'}`}
                    onChange={handleSortChange}
                    className="sort-select"
                  >
                    <option value="BEST_SELLING_ASC">Más vendidos</option>
                    <option value="PRICE_ASC">Precio: menor a mayor</option>
                    <option value="PRICE_DESC">Precio: mayor a menor</option>
                    <option value="CREATED_DESC">Novedades</option>
                    <option value="TITLE_ASC">Nombre: A–Z</option>
                    <option value="TITLE_DESC">Nombre: Z–A</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} strokeWidth={1.5} />
                </div>
              </label>
            </div>

            {/* 🔘 Botón “Clear all” global */}
            <button
              className="filter-clear-all"
              onClick={() => {
                setCurrentFilters([]);
                navigate(`/collections/${params.handle}`, { replace: true });
              }}
            >
              <Trash size={16} strokeWidth={1.5} /> Limpiar filtros
            </button>
          </div>
        </div>

        {/* 🌀 Scroll infinito */}
        <Pagination connection={data.collection.products}>
          {({
            nodes,
            isLoading,
            PreviousLink,
            NextLink,
            state,
            nextPageUrl,
            hasNextPage,
          }) => (
            <>
              <ProductsGrid
                products={nodes}
                inView={inView}
                hasNextPage={hasNextPage}
                nextPageUrl={nextPageUrl}
                state={state}
                // ✅ Pasamos el handle y el array de filtros (sin codificar)
                collectionHandle={params.handle} 
                currentFilters={currentFilters}
                currentSortKey={currentSort}
                currentReverse={currentReverse}
                onCountChange={setDisplayedCount}
              />

              {/* Invisible sentinel para trigger automático */}
              <div ref={ref} style={{height: '1px'}} />
            </>
          )}
        </Pagination>

        {/* 📊 Analytics */}
        <Analytics.CollectionView
          data={{
            collection: {
              id: collection.id,
              handle: collection.handle,
            },
          }}
        />
      </div>
    </div>
  );
}

/**
 * 🧩 Grid con lógica de scroll infinito
 */
function ProductsGrid({
  products, 
  inView, 
  hasNextPage, 
  nextPageUrl,
  collectionHandle, 
  currentSortKey,
  currentReverse,
  currentFilters,
  onCountChange, // ✅ Nuevo prop para actualizar el contador
}) {
  const fetcher = useFetcher();
  const [mergedProducts, setMergedProducts] = useState(products);
  const [currentNextPageUrl, setCurrentNextPageUrl] = useState(nextPageUrl);
  const [currentHasNextPage, setCurrentHasNextPage] = useState(hasNextPage);
  const loadingRef = useRef(false);

  // 🔁 Cuando cambia la colección, resetea todo
  useEffect(() => {
    setMergedProducts(products);
    setCurrentNextPageUrl(nextPageUrl);
    setCurrentHasNextPage(hasNextPage);
    loadingRef.current = false;
  }, [products, nextPageUrl, hasNextPage]);

  // 🔄 Evita loops de requests continuos
  useEffect(() => {
    if (
      inView &&
      currentHasNextPage &&
      fetcher.state === 'idle' &&
      !loadingRef.current &&
      currentNextPageUrl
    ) {
      loadingRef.current = true;
      
      // 1. Extraer los parámetros de paginación (cursor) de nextPageUrl
      const cursorUrl = new URL(currentNextPageUrl, window.location.origin);
      const direction = cursorUrl.searchParams.get('direction');
      const cursor = cursorUrl.searchParams.get('cursor');

      // 2. Construir los parámetros como URLSearchParams
      const params = new URLSearchParams();
      
      // 3. Añadir los parámetros de paginación
      if (direction) params.append('direction', direction);
      if (cursor) params.append('cursor', cursor);
      
      // 4. Añadir los parámetros de ordenación
      params.append('sortKey', currentSortKey);
      params.append('reverse', currentReverse.toString());

      // 5. Añadir el filtro si existe
      if (currentFilters && currentFilters.length > 0) {
        params.append('filters', JSON.stringify(currentFilters));
      }
      
      // 6. Construir la URL final con el formato correcto
      const finalPath = `${currentNextPageUrl.split('?')[0]}?${params.toString()}`;

      fetcher.load(finalPath); 
    }
  }, [
    inView, 
    currentHasNextPage, 
    currentNextPageUrl, 
    fetcher, 
    collectionHandle,
    currentSortKey, 
    currentReverse, 
    currentFilters 
  ]);

  // 🔓 Cuando termina de cargar, liberar bloqueo
  useEffect(() => {
    if (fetcher.state === 'idle') {
      loadingRef.current = false;
    }
  }, [fetcher.state]);

  // 🧩 Fusionar resultados nuevos al listado existente y actualizar paginación
  useEffect(() => {
    if (fetcher.data?.collection?.products) {
      const fetchedProducts = fetcher.data.collection.products;
      const nextNodes = fetchedProducts.nodes;
      const pageInfo = fetchedProducts.pageInfo;
      
      // Actualizar productos
      setMergedProducts((prev) => {
        const seen = new Set(prev.map((p) => p.id));
        const append = nextNodes.filter((p) => !seen.has(p.id));
        const newProducts = [...prev, ...append];
        
        // ✅ Actualizar el contador en el componente padre
        if (onCountChange) {
          onCountChange(newProducts.length);
        }
        
        return newProducts;
      });

      // 🔑 CLAVE: Actualizar el nextPageUrl y hasNextPage para la siguiente carga
      if (pageInfo) {
        setCurrentHasNextPage(pageInfo.hasNextPage);
        if (pageInfo.hasNextPage && pageInfo.endCursor) {
          // Construir el próximo nextPageUrl basado en el endCursor nuevo
          const baseUrl = currentNextPageUrl.split('?')[0];
          setCurrentNextPageUrl(`${baseUrl}?direction=next&cursor=${pageInfo.endCursor}`);
        }
      }
    }
  }, [fetcher.data, onCountChange]);

  return (
    <div className="products-grid">
      {mergedProducts.map((product, index) => (
        <ProductItem
          key={product.id}
          product={product}
          loading={index < 8 ? 'eager' : undefined}
        />
      ))}
      {fetcher.state === 'loading' && currentHasNextPage && (
        <p style={{gridColumn: '1 / -1', textAlign: 'center'}}>Cargando más productos...</p>
      )}
    </div>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
`;

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $filters: [ProductFilter!]
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      image {
        url
        altText
        width
        height
      }
      metafields(identifiers: [
        {namespace: "custom", key: "ver_titulo"},
        {namespace: "custom", key: "ver_imagen"},
        {namespace: "custom", key: "ver_descripcion"}
      ]) {
        key
        value
      }
      products(
        first: $first
        last: $last
        before: $startCursor
        after: $endCursor
        sortKey: $sortKey
        reverse: $reverse
        filters: $filters
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
      }
    }
  }
`;