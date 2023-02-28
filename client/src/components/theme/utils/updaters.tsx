import { resolvePath } from "../../../utils/helpers";

export const updateStyles = (props: UpdateStyleProps) => {
  //Overwrite all or mash add on? single field, replace, for classname give chance to show all or remove
  const defaultOrCustomList =
    props.type === "default" ? "defaultStyles" : "componentList";
  let component: searchable = props.allStyles[defaultOrCustomList];
  let p = { ...component, styles: { ...component.styles, ...props.styles } };
  
  return {
    ...props.allStyles,
    [defaultOrCustomList]: {
      ...props.allStyles[defaultOrCustomList],
      [props.id]: p,
    },
  };
};
