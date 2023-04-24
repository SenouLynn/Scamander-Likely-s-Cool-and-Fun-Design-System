import { createComponentPackage } from "./helpers";

// export const componentList = (
//   componentPackage: ComponentPackageSet
// ): ComponentPackageSet => {
//   return {
//     container: createComponentPackage({
//       pack: {
//         defaultStyleId: "container",
//         label: "Container",
//         componentId: "container",
//         styles: {},
//       },
//       ...componentPackage,
//     }),
//   };
// };
export const defaultStyles = (
  props: ComponentPackageSet
): ComponentPackageSet => {
  return {
    container: createComponentPackage({
      pack: {
        defaultStyleId: "container",
        label: "Container",
        styles: {},
      },
    }),
    ...props,
  };
};
export const controlOptions = (
  props: Partial<ControlOptions>
): ControlOptions => {
  return {
    ...props,
  };
};
