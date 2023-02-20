import { resolvePath } from "../../../utils/helpers";

export const updateStyles = (props: UpdateStyleProps) => {
  //Overwrite all or mash add on? single field, replace, for classname give chance to show all or remove
  const defaultOrCustom =
    props.type === "default" ? "defaultStyles" : "componentList";
  const searchPath = [defaultOrCustom, props.id, "styles"].join(".");
  let field: searchable = props.allStyles[defaultOrCustom];
  let p = resolvePath(
    props.allStyles,
    { ...field[props.id].styles, ...props.styles },
    searchPath
  );
  return p;
};
