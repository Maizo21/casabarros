// app/routes/rolex.jsx
import React from "react";
import { Outlet } from "react-router";
import HeaderRolex from "~/rolex/HeaderRolex";
import KeepExploring from "~/rolex/KeepExploring";
import FooterRolex from "~/rolex/FooterRolex";
import rolexStyles from "~/styles/rolex.css?url";

export const links = () => [
  { rel: "stylesheet", href: rolexStyles }
];

export default function RolexLayout() {
  return (
    <section className="pageRolexLayout">
      <HeaderRolex />
      <Outlet /> {/* Aquí se renderizan las subrutas */}
      <KeepExploring />
      <FooterRolex />
    </section>
  );
}