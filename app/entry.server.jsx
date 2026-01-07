import {ServerRouter} from 'react-router';
import {isbot} from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

/**
 * @param {Request} request
 * @param {number} responseStatusCode
 * @param {Headers} responseHeaders
 * @param {EntryContext} reactRouterContext
 * @param {HydrogenRouterContextProvider} context
 */
export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  reactRouterContext,
  context,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    shop: {
      checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
      storeDomain: context.env.PUBLIC_STORE_DOMAIN,
    },
    scriptSrc: [
      "'self'",
      'https://cdn.shopify.com',
      'https://shopify.com',
      'https://js.hsforms.net',
      'https://js-eu1.hsforms.net',
      'https://clock.rolex.com',
      "https://maps.googleapis.com",
      "https://maps.gstatic.com",
      "'unsafe-inline'",
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.shopify.com',
      'https://fonts.googleapis.com', // ✅ Permite Google Fonts CSS
    ],
    fontSrc: [
      "'self'",
      'https://fonts.gstatic.com', // ✅ Permite cargar las fuentes reales
    ],
    frameSrc: [
      "'self'",
      'https://share.hsforms.com',
      'https://clock.rolex.com',
      'http://clock.rolex.com',
      'https://www.youtube.com',
      'https://youtube.com',
    ],
    connectSrc: [
      "'self'",
      'https://api.hsforms.com',
      'https://forms.hsforms.com',
      'https://clock.rolex.com',
      "https://maps.googleapis.com",
    ],
    imgSrc: [
      "'self'",
      'data:', // permite íconos base64 embebidos
      'https://cdn.shopify.com',
      'https://shopify.com',
      'https://forms-na1.hsforms.com', // ✅ para HubSpot counters.gif
      'https://forms.hsforms.com',     // ✅ variantes regionales
      'https://clock.rolex.com',
      "https://maps.gstatic.com",
      "https://maps.googleapis.com",
      'https://i.ytimg.com', // ✅ para thumbnails de YouTube
      'https://www.youtube.com',
    ],
  });

  const body = await renderToReadableStream(
    <NonceProvider>
      <ServerRouter
        context={reactRouterContext}
        url={request.url}
        nonce={nonce}
      />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

/** @typedef {import('@shopify/hydrogen').HydrogenRouterContextProvider} HydrogenRouterContextProvider */
/** @typedef {import('react-router').EntryContext} EntryContext */
