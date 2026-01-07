import {Suspense, useEffect, useState} from 'react';
import {Await, NavLink} from 'react-router';
import {useNonce, Script} from '@shopify/hydrogen';
import {FooterForm} from './FooterForm';
import { Instagram } from "lucide-react";

/**
 * @param {FooterProps}
 */

export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            <div className="footer-wrap contentWrap">
              <NavLink prefetch="intent" to="/" className="logo-footer" style={activeLinkStyle} end>
                <img
                  src="/img/logo-blanco.png"
                  alt={`${header.shop.name} logo`}
                  className='logo'
                />
              </NavLink>
            </div>
            <div className="footer-wrap contentWrap">
              
              <div className="footer-column">
                <h4 className="footer-title">Información</h4>
                {footer?.menu && header.shop.primaryDomain?.url && (
                  <FooterMenu
                    menu={footer.menu}
                    primaryDomainUrl={header.shop.primaryDomain.url}
                    publicStoreDomain={publicStoreDomain}
                  />
                )}
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Parque Arauco</h4>
                <ul className="footer-info-list">
                  <li>
                    <a href="tel:+56222420714">Teléfono +56 2 2420 714</a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/RgLBntgRz6MU2ubW8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Av. Presidente Kennedy 5413, Tienda 437
                    </a>
                  </li>
                  <li>Lunes a Sábado de 10:30 a 19:30</li>
                  <li>Domingo de 11:00 a 19:30</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Alto Las Condes</h4>
                <ul className="footer-info-list">
                  <li>
                    <a href="tel:+56222131638">Teléfono +56 2 213 1638</a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/wyrLAKmdoyFEFbn79"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Av. Presidente Kennedy 9001, Tienda 1057
                    </a>
                  </li>
                  <li>Lunes a Sábado de 10:30 a 19:30</li>
                  <li>Domingo de 10:30 a 19:30</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Costanera Center</h4>
                <ul className="footer-info-list">
                  <li>
                    <a href="tel:+562226189551">Teléfono +56 2 2618 9551</a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/tAiuEsdoqFWM3EpC6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Av. Andrés Bello 2447,<br />Tienda 2220
                    </a>
                  </li>
                  <li>Lunes a Sábado de 10:00 a 19:30</li>
                  <li>Domingo de 10:30 a 19:30</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Forma parte de Casa Barros</h4>
                <FooterForm />
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-wrap footer-bottom-content contentWrap">
                <p> {header.shop.name} © {new Date().getFullYear()}. Todos los derechos reservados.</p>
                <a
                  href="https://www.instagram.com/casabarroschile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-instagram-link"
                  aria-label="Instagram Casa Barros"
                >
                  <Instagram className="footer-instagram-icon" />
                </a>
              </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
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
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
