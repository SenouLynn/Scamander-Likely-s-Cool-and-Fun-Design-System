import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "../components/theme/ThemeContext";
import { createRoutes } from "./utils/helpers";
import { localRoutes } from "./_localRoutes.manifest";

export default function Router() {
  const { routes } = useContext(ThemeContext);
  let router = routes ? createRoutes(routes) : [];
  router = [...router, ...localRoutes];

  return (
    <>
      {router.length > 0 && (
        <RouterProvider router={createBrowserRouter(router)} />
      )}
    </>
  );
}
