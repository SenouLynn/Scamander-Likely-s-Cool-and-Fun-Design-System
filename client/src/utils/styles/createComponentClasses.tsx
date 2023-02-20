import { CreateStyleClass, StylePackage } from "./types";

export const createComponentClasses = (stylePackage: StylePackage): string => {
  let payload = [
     stylePackage.border  && stylePackage.border !== "false" && "border",
    createStyleClassBySize({
      stylePackage,
      key: "padding",
      buildString: (v) => `padding-${v}`,
    }),
    createStyleClassBySize({
      stylePackage,
      key: "margin",
      buildString: (v) => `margin-${v}`,
    }),
    createStyleClassBySize({
      stylePackage,
      key: "fontSize",
      buildString: (v) => `fontSize-${v}`,
    }),
  ] as string[];

  return payload.join(" ");
};

export const createStyleClassBySize = ({
  stylePackage,
  key,
  buildString,
}: CreateStyleClass): string => {
  const p: searchable = stylePackage;
  const sizes = ["xsm", "sm", "md", "lg", "xl", "xxl"];
  if (!p[key]) {
    return "";
  }
  if (!sizes.includes(p[key])) {
    console.log(`Variant ${p[key]} does not exist for ${key}`);
    return "";
  }
  return buildString(p[key]);
};
