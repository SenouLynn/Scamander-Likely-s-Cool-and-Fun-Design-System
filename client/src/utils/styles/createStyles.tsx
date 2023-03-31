import { styleOptions } from "./_styleBuilders.manifest";

//<--- Highly Load Bearing! Builds styles --->//

export const createStyles = (pack: ComponentPackage) => {
  const { styles } = pack;
  const builders: searchable = styleOptions;
  let className = [styles.className] || [""];

  //Iterate over style keys, match to class builder
  Object.entries(styles).forEach(([key, value]) => {
    if (value && key !== "className") {
      if (builders[key] === "") return;
      if (!builders[key]) {
        console.warn("No builder for", key);
        return;
      }
      // throw new Error(`Create Styles: No builder for, ${key}`);

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
