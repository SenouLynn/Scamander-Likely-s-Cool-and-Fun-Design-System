import { useContext } from "react";
import { BilgedeckContext } from "../utils/context";
import { buildPack } from "pages/poopdeck/utils/create";
import { Icon } from "_components/icons/_icon.manifest";

export default function DeleteComponent({ pack }: { pack?: ComponentPackage }) {
  const { update } = useContext(BilgedeckContext);
  return (
    <span onClick={() => pack && update.deletePack(buildPack({ pack }))}>
      <Icon icon="Trash" />
    </span>
  );
}
