export const addPropsToCartridge = ({
  props,
  componentPackage,
}: {
  props: ComponentProps;
  componentPackage: ComponentPackage;
}) => {
  const cartridge = {
    ...componentPackage,
    styles: {
      ...props,
      ...componentPackage.styles,
      className: `${
        componentPackage.styles.className
          ? componentPackage.styles.className
          : ""
      } ${props.className ? props.className : ""}`,
    },
  };

  return cartridge;
};
