import { createOption } from "./helpers";

export const styleOptions = {
  display: {
    label: "Label",
    options: [
      createOption({
        optionsId: "displayOptions",
        styleId: "display",
        label: "Display",
        index: 1,
        checkValid: (componentPackage: ComponentPackage) => true,
      }),
    ],
  },
  grid: {
    label: "Grid",
    options: [
      createOption({
        optionsId: "genericLevels",
        styleId: "columns",
        label: "Columns",
        index: 1,
        checkValid: (componentPackage: ComponentPackage) =>
          componentPackage.styles.display === "grid",
      }),
      createOption({
        optionsId: "genericLevels",
        styleId: "rows",
        label: "rows",
        index: 2,
        checkValid: (componentPackage: ComponentPackage) =>
          componentPackage.styles.display === "grid",
      }),
    ],
  },
  flex: {
    label: "Flex",
    options: [
      createOption({
        label: "Horizontal Placement",
        styleId: "justify",
        optionsId: "flexLocations",
        index: 2,
        checkValid: (componentPackage: ComponentPackage) =>
          componentPackage.styles.display === "flex",
      }),
      createOption({
        optionsId: "flexLocations",
        styleId: "align",
        label: "Vertical Placement",
        index: 3,
        checkValid: (componentPackage: ComponentPackage) =>
          componentPackage.styles.display === "flex",
      }),
      createOption({
        optionsId: "genericLevels",
        styleId: "gap",
        label: "Gap",
        index: 4,
        checkValid: (componentPackage: ComponentPackage) =>
          componentPackage.styles?.display === "flex" ||
          componentPackage.styles?.display === "grid",
      }),
    ],
  },
  generic: {
    label: "Generic Options",
    options: [
      createOption({
        label: "Padding",
        styleId: "padding",
        optionsId: "genericLevels",
        index: 1,
        checkValid: () => true,
      }),
      createOption({
        label: "Margin",
        styleId: "margin",
        optionsId: "genericLevels",
        index: 2,
        checkValid: () => true,
      }),
      createOption({
        label: "Border",
        styleId: "border",
        optionsId: "boolean",
        index: 3,
        checkValid: () => true,
      }),
    ],
    sizing: {
      label: "Sizing",
      options: [],
    },
  },
  //Padding
  //Margin
  //Border

  //Width
  //Height
};
