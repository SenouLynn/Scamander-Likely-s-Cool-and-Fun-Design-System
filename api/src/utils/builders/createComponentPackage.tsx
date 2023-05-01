export const buildPack = ({
  props,
  pack,
}: {
  props?: ComponentProps;
  pack: Partial<ComponentPackage>;
}): ComponentPackage => {
  let component: ComponentPackage = {
    role: "wrapper",
    location: props?.location || "0",
    label: "",
    componentId: props?.componentId || `location-${pack?.location}`,
    defaultStyleId: props?.defaultStyleId || "",
    childIds: [],
    styles: {
      ...pack?.styles,
      ...props?.styles,
      className: [props?.styles?.className, pack?.styles?.className].join(" "),
    },
    subComponents: props?.subComponents || [],
    children: [],
    ...pack,
  };
  return component;
};
