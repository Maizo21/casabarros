import { Suspense, lazy, useState, useEffect } from "react";

const MapClient = lazy(() => import("./MapClient"));

export default function StoreMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {isClient ? (
        <Suspense fallback={<div>Cargando mapa...</div>}>
          <MapClient />
        </Suspense>
      ) : (
        <div>Cargando mapa...</div>
      )}
    </div>
  );
}