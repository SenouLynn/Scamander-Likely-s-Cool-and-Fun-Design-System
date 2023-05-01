import { faker } from "@faker-js/faker";
import { Render } from "_components/Render";
import { buildPack } from "pages/poopdeck/utils/create";

export const renderChildren = (props: ComponentProps) => {
  return props.subComponents && props.subComponents.length > 0 ? (
    <>
      {props.subComponents.map((x: ComponentProps, index) => {
        const location = x.location
          ? x.location
          : faker.random.alphaNumeric(10);
        const Component = () => Render(props, { ...x, location });
        return <Component key={x.componentId} />;
      })}
    </>
  ) : (
    <>{props.children}</>
  );
};

export const assembleStyles = ({
  props,
  componentPackage,
}: {
  props?: StylePackage;
  componentPackage?: Partial<ComponentPackage>;
}): ComponentPackage => {
  return buildPack({
    props,
    pack: {
      styles: {
        ...componentPackage?.styles,
        ...props,
        className: [componentPackage?.styles?.className, props?.className]
          .join(" ")
          .trim(),
      },
      ...componentPackage,
    },
  });
};
