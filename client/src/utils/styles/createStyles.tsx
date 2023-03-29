import { styleOptions } from "./_styleBuilders.manifest";

export const createStyles = (pack: ComponentPackage) => {
  const { styles } = pack;
  const builders: searchable = styleOptions;
  let className = [styles.className] || [""];

  //Highly Load Bearing! Builds styles

  //Iterate over style keys, match to class builder
  Object.entries(styles).forEach(([key, value]) => {
    if (value && key !== "className") {
      const options = builders[key].options;
      const builder = options.builder;
      const c = builder({ style: key, value });
      console.log("c", c);
      className.push(c);
    }
  });
  return className.join(" ").trim();
};

// //Creates styles from generic style cartridge, NOT ADDDING OR REMOVING, JUST DIGESTING
// export const createStyles = (componentPackage: ComponentProps): string => {
//   let payload: string[] = [
//     createComponentClasses(componentPackage.styles),
//     createWrapperClasses(componentPackage.styles),
//     createItemClasses(componentPackage.styles),
//     addClassNames(componentPackage),
//   ];
//   return payload
//     .join(" ")
//     .replace(/^\s+|\s+$/g, "")
//     .replace(/\s+/g, " ");
// };

// const addClassNames = (stylePackage: ComponentProps) => {
//   const className = stylePackage.styles?.className
//     ? stylePackage.styles?.className
//     : "";
//   return [className ? `${className}` : ""].join(" ");
// };
