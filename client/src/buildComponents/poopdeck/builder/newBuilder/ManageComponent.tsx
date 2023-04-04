import React, { useContext } from "react";
import { PoopDeckContext } from "./NewPoopDeck";
import Builder from "./components/Builder";
import Display from "./components/Display";
export default function ManageComponent({ location }: { location: any }) {
  const { updaters, field } = useContext(PoopDeckContext);
  const component = field[location];
  return (
    <div className="w-100 h-100 flex-center-center flex-row">
      <div className="flex-grow-1 w-max-40vw">
        <Builder pack={component} />
      </div>
      <div className="flex-grow-2">
        <Display />
      </div>
    </div>
  );
}
