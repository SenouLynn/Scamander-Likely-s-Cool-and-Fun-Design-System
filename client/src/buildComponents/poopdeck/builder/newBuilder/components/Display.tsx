import React, { useContext } from "react";
import { PoopDeckContext } from "../NewPoopDeck";
import { createStyles } from "../../../../../utils/styles/createStyles";

export default function Display() {
  const { pack } = useContext(PoopDeckContext);
  const placementClass =
    pack && createStyles(pack).includes("w-100")
      ? "w-100"
      : "flex-center-center";

  return (
    <div className={`${placementClass} `}>
      {pack.render({
        props: {},
        pack,
      })}
    </div>
  );
}
