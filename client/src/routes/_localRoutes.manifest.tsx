import PoopDeck from "../buildComponents/poopdeck/PoopDeck";
import { Render } from "../components/Render";

const FakeElement = (props: ComponentProps) =>
  Render(props, {
    componentId: "4uh5ci",
    location: "4uh5ci",
  });
export const localRoutes: ReactRoute[] = [
  { path: "/poopdeck", element: <PoopDeck /> },
  { path: "/", element: <FakeElement /> },
];
