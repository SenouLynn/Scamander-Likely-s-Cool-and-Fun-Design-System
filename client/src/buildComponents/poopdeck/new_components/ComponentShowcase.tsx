import React, { useContext } from "react";
import { PoopDeckContext } from "../index";

export default function ComponentShowcase() {
  const { newComponent } = useContext(PoopDeckContext);
  //TODO Mock Props
  return (
    <div className="h-100 w-100 padding-md">
      <div className="">
        <h1>{newComponent?.label || "New Component"}</h1>
      </div>
      <div className="w-100 h-100 border padding-md flex-center-center">
        {newComponent && (
          <div className="flex-center-center w-100 h-100">
            <div className="h-fit-content w-fit-content">
              {newComponent.render({ props: {}, pack: newComponent })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
