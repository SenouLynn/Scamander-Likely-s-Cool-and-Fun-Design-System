import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PoopDeck from "../buildComponents/poopdeck";
import Pages from "../buildComponents/_pages.manifest";
import { ThemeContext } from "../components/theme/ThemeContext";
import { createRoutes } from "./utils/helpers";

const testRoutes = [
  {
    path: "/test",
    element: <Pages.TestRenderer />,
  },
  {
    path: "/poop",
    element: <PoopDeck />,
  },
];
export default function Router() {
  const { routes } = useContext(ThemeContext);
  const router = createRoutes(routes);
  return (
    <>
      {router.length > 0 && (
        <RouterProvider router={createBrowserRouter(router)} />
      )}
    </>
  );
}
