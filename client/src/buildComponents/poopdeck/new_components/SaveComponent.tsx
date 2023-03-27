import React, { useContext } from "react";
import { PoopDeckContext } from "..";

export default function SaveComponent() {
  const { updateNewComponent, saveNewComponent, newComponent } =
    useContext(PoopDeckContext);

  if (!newComponent) return null;
  return (
    <div className="w-100 flex-start-center">
      <button onClick={saveNewComponent}>Save Component</button>
      <button>Cancel</button>
    </div>
  );
}
