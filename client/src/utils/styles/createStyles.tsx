import { createComponentClasses } from "./createComponentClasses";
import { createItemClasses } from "./createItemClasses";
import { createWrapperClasses } from "./createWrapperClasses";

//Creates styles from generic style cartridge, NOT ADDDING OR REMOVING, JUST DIGESTING
export const createStyles = (componentPackage: ComponentProps): string => {
  let payload: string[] = [
    createComponentClasses(componentPackage.styles),
    createWrapperClasses(componentPackage.styles),
    createItemClasses(componentPackage.styles),
    addClassNames(componentPackage),
  ];
  return payload
    .join(" ")
    .replace(/^\s+|\s+$/g, "")
    .replace(/\s+/g, " ");
};

const addClassNames = (stylePackage: ComponentProps) => {
  const className = stylePackage.styles?.className
    ? stylePackage.styles?.className
    : "";
  return [className ? `${className}` : ""].join(" ");
};
