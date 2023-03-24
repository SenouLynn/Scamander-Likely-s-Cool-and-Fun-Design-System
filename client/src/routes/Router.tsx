import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "../components/theme/ThemeContext";
import { createRoutes } from "./utils/helpers";
import { localRoutes } from "./_localRoutes.manifest";

export default function Router() {
  const { routes } = useContext(ThemeContext);
  const router = createRoutes(routes);
  return (
    <>
      {router.length > 0 && (
        <RouterProvider
          router={createBrowserRouter([...router, ...localRoutes])}
        />
      )}
    </>
  );
}
