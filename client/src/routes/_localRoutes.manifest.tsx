import ManageComponent from "../buildComponents/poopdeck/builder/PoopDeck";
import NewPoopDeck from "../buildComponents/poopdeck/builder/newBuilder/NewPoopDeck";

export const localRoutes: ReactRoute[] = [
  { path: "/poopdeck", element: <NewPoopDeck /> },
];
