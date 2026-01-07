import React, { useState } from "react";
import { useLocation, useMatches, Link } from "react-router";

export default function HeaderRolex() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const matches = useMatches();

  const isActive = (path) => currentPath === path;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Obtener breadcrumbs de las rutas activas con sus paths
  const pageBreadcrumbs = matches
    .filter((match) => match.handle && match.handle.breadcrumb)
    .map((match) => ({
      label: match.handle.breadcrumb,
      href: match.pathname
    }));

  // Verificar si alguna ruta tiene hideBreadcrumbs
  const shouldHideBreadcrumbs = matches.some(
    (match) => match.handle && match.handle.hideBreadcrumbs
  );

  // Agregar "Rolex" como primer item siempre
  const breadcrumbs = pageBreadcrumbs.length > 0
    ? [{label: "Rolex", href: "/rolex"}, ...pageBreadcrumbs]
    : [];

  return (
    <div className="headerRolex">
      <div className="contentWrap">
        <div className="innerHeader">
          <img
            src="/imgRolex/rolex-retailer-plaque-500x250_es.jpg"
            alt="Rolex Logo"
            className="logo"
          />

          <button className="showMenu" onClick={toggleMenu}>
            <span>Menu</span>{" "}
            <img
              src="/imgRolex/drop-down-white-button.svg"
              alt="Abrir menú"
              className="icon"
            />
          </button>

          <nav className={`menu ${menuOpen ? "show" : ""}`}>
            <ul className="fixed14">
              <li className={isActive("/rolex/discover") ? "active" : ""}>
                <Link to="/rolex/discover" onClick={handleLinkClick}>Descubra Rolex</Link>
              </li>

              <li className={isActive("/rolex/watches") ? "active" : ""}>
                <Link to="/rolex/watches" onClick={handleLinkClick}>Relojes Rolex</Link>
              </li>

              <li className={isActive("/rolex/collections") ? "active" : ""}>
                <Link to="/rolex/new-watches" onClick={handleLinkClick}>Nuevos Modelos 2025</Link>
              </li>

              <li className={isActive("/rolex/accesories") ? "active" : ""}>
                <Link to="/rolex/accessories" onClick={handleLinkClick}>Accesorios Rolex</Link>
              </li>

              <li className={isActive("/rolex/watchmaking") ? "active" : ""}>
                <Link to="/rolex/watchmaking" onClick={handleLinkClick}>«Savoir-faire» relojero de Rolex</Link>
              </li>

              <li className={isActive("/rolex/servicing") ? "active" : ""}>
                <Link to="/rolex/servicing" onClick={handleLinkClick}>Mantenimiento</Link>
              </li>

              <li className={isActive("/rolex/world-of-rolex") ? "active" : ""}>
                <Link to="/rolex/world-of-rolex" onClick={handleLinkClick}>El mundo de Rolex</Link>
              </li>

              <li className={isActive("/rolex/rolex-at-casa-barros") ? "active" : ""}>
                <Link to="/rolex/rolex-at-casa-barros" onClick={handleLinkClick}>Rolex en Casa Barros</Link>
              </li>

              <li className={isActive("/rolex/contact-us") ? "active" : ""}>
                <Link to="/rolex/contact-us" onClick={handleLinkClick}>Contáctanos</Link>
              </li>
            </ul>
          </nav>
        </div>
        {breadcrumbs.length > 0 && !shouldHideBreadcrumbs && (
          <div className="breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <img
                    src="/imgRolex/arrow-white-button.svg"
                    alt="Separador"
                    className="sep"
                  />
                )}
                {crumb.href ? (
                  <Link to={crumb.href} className="item fixed14">{crumb.label}</Link>
                ) : (
                  <span className="item fixed14">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}