import {Script} from '@shopify/hydrogen';
import {useEffect} from 'react';

export function FooterForm() {
  useEffect(() => {
    // Evita ejecutar antes de que React termine de hidratar
    const loadHubspot = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '48407037', // ✅ usa tu portalId real
          formId: 'b6dc3606-59db-4a1e-9755-f5d5591af1f1',
          target: '#hubspot-form-container',
        });
      }
    };

    // Carga el script solo si no existe
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/shell.js';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = loadHubspot;
      document.body.appendChild(script);
    } else {
      loadHubspot();
    }
  }, []);

  // Renderiza solo el contenedor
  return <div id="hubspot-form-container"></div>;
}