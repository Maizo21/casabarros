import {Suspense, useEffect, useState} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';
import { Search, ShoppingCart, User, TextAlignStart } from 'lucide-react';

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop, menu} = header;

  const midpoint = Math.ceil((menu?.items?.length || 0) / 2);
  const menu1 = menu?.items?.slice(0, midpoint) || [];
  const menu2 = menu?.items?.slice(midpoint) || [];

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      const isMobile = window.innerWidth <= 768; // 📱 breakpoint base
      const threshold = isMobile ? 50 : 100;     // umbral dinámico
      setIsTop(window.scrollY < threshold);
    };

    // estado inicial
    update();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', update, {passive: true});

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className={`header ${isTop ? 'is-top' : 'is-scrolled'}`}>
      <div className="header-wrap">
        {/* 🟩 Banner izquierdo */}
        <div
          className="header-banner-left"
        >
          <img
            src="/img/patek-header.png"
            alt={`Patek logo`}
          />
        </div>

        {/* 🧭 Menú 1 */}
        <HeaderMenu
          menu={{items: menu1}}
          viewport="desktop"
          primaryDomainUrl={header.shop.primaryDomain.url}
          publicStoreDomain={publicStoreDomain}
        />

        {/* 🏷️ Logo */}
        <div className='logo'>
          <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
            <img
              src="/img/LOGOCASABARROS.png"
              alt={`${shop.name} logo`}
            />
          </NavLink>
        </div>

        <div className="rightSection">
          {/* 🧭 Menú 2 */}
          <HeaderMenu
            menu={{items: menu2}}
            viewport="desktop"
            primaryDomainUrl={header.shop.primaryDomain.url}
            publicStoreDomain={publicStoreDomain}
          />

          {/* 🛍️ Íconos: búsqueda, login, carrito */}
          <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
        </div>

        {/* 🟩 Banner derecho */}
        <div
          className="header-banner-right"
        >
          <span><img
            src="/img/rolex-header.png"
            alt={`Patek logo`}
          /></span>
        </div>
      </div>
    </header>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id], // ✅ alterna correctamente
    }));
  };

  function renderMenuItems(items, level = 0) {
    return items.map((item) => {
      if (!item.url) return null;

      const url =
        item.url.includes('myshopify.com') ||
        item.url.includes(publicStoreDomain) ||
        item.url.includes(primaryDomainUrl)
          ? new URL(item.url).pathname
          : item.url;

      const hasChildren = item.items && item.items.length > 0;
      const isOpen = !!openItems[item.id]; // ✅ asegúrate de que sea boolean

      return (
        <div
          key={item.id}
          className={`header-menu-item-container level-${level} ${
            isOpen ? 'open' : ''
          }`}
        >
          <div className="menu-item-row">
            <NavLink
              className="header-menu-item"
              end
              prefetch="intent"
              to={url}
              onClick={() => {
                // 🔹 En mobile: no cerrar menú al hacer click en ítem padre con hijos
                if (viewport === 'mobile' && hasChildren) {
                  toggleItem(item.id);
                } else {
                  close(); // 🔹 En desktop o sin hijos, cierra el aside
                }
              }}
            >
              {item.title}
            </NavLink>

            {/* 🔽 Botón toggle solo mobile */}
            {viewport === 'mobile' && hasChildren && (
              <button
                type="button"
                className="submenu-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation(); // ✅ evita que el click cierre el menú
                  toggleItem(item.id);
                }}
                aria-expanded={isOpen}
              >
                {isOpen ? '−' : '+'}
              </button>
            )}
          </div>

          {/* 🧭 Submenú */}
          {hasChildren && (
            <div
              className={`header-submenu ${
                viewport === 'mobile'
                  ? isOpen
                    ? 'open'
                    : 'closed'
                  : ''
              }`}
            >
              {renderMenuItems(item.items, level + 1)}
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink className="mobile-home-link" end onClick={close} prefetch="intent" to="/">
          Home
        </NavLink>
      )}
      {renderMenuItems((menu || FALLBACK_HEADER_MENU).items)}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />

      <div className="headerIcons">
        {/* 👤 Account / Sign in */}
        <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
          <Suspense
            fallback={<User size={20} strokeWidth={1.5} />}
          >
            <Await resolve={isLoggedIn} errorElement={<User size={20} strokeWidth={1.5} />}>
              {(isLoggedIn) =>
                isLoggedIn ? (
                  <User size={20} strokeWidth={1.5} />
                ) : (
                  <User size={20} strokeWidth={1.5} />
                )
              }
            </Await>
          </Suspense>
        </NavLink>

        {/* 🔍 Search */}
        <SearchToggle />

        {/* 🛒 Cart */}
        <CartToggle cart={cart} />

      </div>
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <div className="header-menu-mobile-toggle-container">
      <button
        className="header-menu-mobile-toggle reset"
        onClick={() => open('mobile')}
      >
        <TextAlignStart size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button
      className="reset searchIcon"
      onClick={() => open('search')}
      aria-label="Buscar"
    >
      <Search size={20} strokeWidth={1.5} />
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  const count = cart?.totalQuantity ?? 0;
  const {open} = useAside();

  return (
    <button
      onClick={() => open('cart')}
      className="reset cartIcon"
      style={{background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'}}
      aria-label="Carrito"
    >
      <ShoppingCart size={20} strokeWidth={1.5} />
      {count > 0 && <span className='cartCount'>{count}</span>}
    </button>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 600 : 500, // ✅ usa pesos definidos de Raleway
    color: isPending ? 'grey' : 'black',
    textDecoration: 'none',
    transition: 'color 0.2s, font-weight 0.2s',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
