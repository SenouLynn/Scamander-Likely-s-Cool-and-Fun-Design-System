import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Components from "../components/components.manifest";
import PoopDeck from "../components/poopdeck";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Components.Navbar border={true}>
          <Components.NavItem className="h-3rem">Home</Components.NavItem>
          <Components.NavItem className="h-3rem">About</Components.NavItem>
        </Components.Navbar>
      </>
    ),
  },
  {
    path: "/poop",
    element: <PoopDeck />,
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
