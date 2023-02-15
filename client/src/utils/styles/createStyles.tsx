import { createComponentClasses } from "./createComponentClasses";
import { createItemClasses } from "./createItemClasses";
import { createWrapperClasses } from "./createWrapperClasses";

//Creates styles from generic style cartridge
export const createStyles = (stylePackage: ComponentProps): string => {
  let payload: string[] = [
    createComponentClasses(stylePackage),
    createWrapperClasses(stylePackage),
    createItemClasses(stylePackage),
    addClassNames(stylePackage),
  ];
  return payload
    .join(" ")
    .replace(/^\s+|\s+$/g, "")
    .replace(/\s+/g, " ");
};

const addClassNames = (stylePackage: ComponentProps) => {
  const className = stylePackage.className ? stylePackage.className : "";
  const inherited = stylePackage.styles?.className;
  return [
    className ? `${className}` : "",
    inherited ? `${inherited}` : "",
  ].join(" ");
};
