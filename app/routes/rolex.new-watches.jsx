// app/routes/rolex.new-watches.jsx
import React from "react";
import { Outlet } from "react-router";

export const handle = {
  breadcrumb: "Nuevos Relojes"
};

export default function RolexNewWatchesLayout() {
  return (
    <section className="pageRolex">
      <Outlet />
    </section>
  );
}
