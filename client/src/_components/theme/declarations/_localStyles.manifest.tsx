import { buildPack } from "pages/poopdeck/utils/create";

export const baseComponents: ComponentPackageSet = {
  seedPack: buildPack({
    pack: {
      type: "component",
      label: "Hello World :)",
      location: "0",
    },
  }),
};
