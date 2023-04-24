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
        //
        // console.warn("No builder for", key);
        return;
      }
      // throw new Error(`Create Styles: No builder for, ${key}`);
      const options = builders[key].options;
      const builder = options.builder;
      const c = builder({ style: key, value });
      className.push(c);
    }
  });
  return className.join(" ").trim();
};
