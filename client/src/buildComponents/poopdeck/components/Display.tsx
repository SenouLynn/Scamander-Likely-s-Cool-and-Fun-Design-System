import React, { useContext } from "react";
import { createStyles } from "../../../utils/styles/createStyles";
import { PoopDeckContext } from "../PoopDeck";
import { createComponentPackage } from "../../../components/theme/utils/helpers";

export default function Display() {
  const { pack, field } = useContext(PoopDeckContext);
  const r = createComponentPackage({ pack });
  const placementClass =
    pack && createStyles(r).includes("w-100") ? "w-100" : "flex-center-center";
  return (
    <div className={`${placementClass} `}>
      {r.render({
        props: {},
        pack: r,
      })}
    </div>
  );
}
