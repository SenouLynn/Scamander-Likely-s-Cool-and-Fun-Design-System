import { faker } from "@faker-js/faker";
import ComponentWrapper from "../../../_components/theme_2.0/ComponentWrapper";
import { renderChildren } from "_components/theme_2.0/utils/hooks/helpers";
import { Components } from "_components/theme_2.0/declarations/_localComponents.manifest";

export const uniqueId = () => faker.random.alphaNumeric(6);

export const createComponentPackage = ({
  props,
  pack,
}: {
  props?: ComponentProps;
  pack?: Partial<ComponentPackage>;
}): ComponentPackage => {
  return {
    role: "wrapper",
    location: props?.location || uniqueId(),
    label: "",
    componentId: props?.componentId || pack?.location || "0",
    styles: {
      ...pack?.styles,
      ...props?.styles,
      className: [props?.styles?.className, pack?.styles?.className].join(" "),
    },
    subComponents: props?.subComponents || [],
    children: [],
    render: (props: ComponentWrapperProps) => {
      return (
        <ComponentWrapper {...props}>
          {renderChildren(props.props)}
        </ComponentWrapper>
      );
    },
    ...pack,
  };
};

export const createLocation = (parent: Partial<ComponentPackage>) => {
  const { location = undefined } = parent;
  if (!location) return uniqueId();
  if (location === null) return uniqueId();

  return location + "-" + (parent?.subComponents?.length || 0);
};

export const seedPack = (pack?: Partial<ComponentPackage>) =>
  createComponentPackage({
    pack: {
      label: `${pack?.label || "New Component"}`,
      children: ["Hello World :)"],
      ...pack,
    },
  });

export const updateField = (
  pack: ComponentPackage,
  packField: ComponentPackageSet
) => {
  let field = { ...packField };
  field[pack.location] = pack;
  return field;
};

export const createDisplayState = (state?: Partial<DisplayStateShape>) => {
  const stored = sessionStorage.getItem("poopdeck-displayState");
  const parsed = stored ? JSON.parse(stored) : {};
  return {
    zoomLevel: -2,
    canvas: "fit-content",
    ...parsed,
    ...state,
  };
};

export const createLocalField = (
  pack: ComponentPackage,
  componentList: ComponentPackageSet,
  field: ComponentPackageSet = {}
) => {
  const { componentId = "" } = pack;

  const existingPack = componentList[componentId]
    ? componentList[componentId]
    : pack;

  let newField = {
    [pack.location]: existingPack,
    ...field,
  };

  pack.subComponents.forEach((p: Partial<ComponentPackage>, i: number) => {
    const { location = "" } = p;

    const existingPack = componentList[location] ? componentList[location] : p;
    const subComponent = createComponentPackage({ pack: existingPack });

    newField = {
      ...newField,
      ...createLocalField(subComponent, componentList),
    };
  });

  return newField;
};
