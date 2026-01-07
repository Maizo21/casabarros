// app/routes/rolex.world-of-rolex.jsx
import { Outlet } from "react-router";

export const handle = {
  breadcrumb: "El mundo de Rolex"
};

export default function WorldOfRolexLayout() {
  return <Outlet />;
}
