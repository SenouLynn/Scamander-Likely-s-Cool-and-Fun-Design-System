import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { localRoutes } from "./_localRoutes.manifest";
import { createRoutes } from "./utils/createRoute";

export default function Router(theme?: Partial<ThemeProps>) {
  const routes = createRoutes(localRoutes, theme);
  return (
    <>
      {localRoutes.length > 0 && (
        <RouterProvider router={createBrowserRouter(routes)} />
      )}
    </>
  );
}
