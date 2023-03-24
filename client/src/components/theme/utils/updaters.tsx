import { createComponentPackage } from "./helpers";

export const updateComponentSubComponents = (
  props: UpdateSubComponentProps
) => {
  const toggler = props.type === "default" ? "defaultStyles" : "componentList";
  let componentList: searchable = props.allStyles[toggler];
  const builtComponent = componentList[props.id]
    ? {
        ...componentList[props.id],
        subComponents: props.subComponents,
      }
    : createComponentPackage({
        props: {},
        pack: {
          componentId: props.id,
          defaultStyleId: props.id,
          subComponents: props.subComponents,
        },
      });


  componentList[builtComponent.componentId] = builtComponent;
  return { ...props.allStyles, [toggler]: componentList };
};
export const updateStyles = (props: UpdateStyleProps) => {
  const toggler = props.type === "default" ? "defaultStyles" : "componentList";
  let componentList: searchable = props.allStyles[toggler];
  const builtComponent = componentList[props.id]
    ? { ...componentList[props.id], styles: { ...props.styles } }
    : createComponentPackage({
        props: {},
        pack: {
          componentId: props.id,
          defaultStyleId: props.id,
          styles: { ...props.styles, className: "" },
        },
      });

  componentList[builtComponent.componentId] = builtComponent;
  return { ...props.allStyles, [toggler]: componentList };
};
