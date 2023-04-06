import { createStyles } from "../../utils/styles/createStyles";
import { renderChildren } from "./utils/helpers";
import elements from "./declarations/_elements.manifest";

export default function ComponentWrapper({
  props,
  pack,
}: ComponentWrapperProps) {
  //Html element switch
  const role = pack.role && Object.keys(elements).includes(pack.role)
    ? pack.role
    : "wrapper";
  const Element = elements[role as keyof typeof elements].Element;

  return (
    <Element
      data-testid={pack.location || "non-location"}
      id={pack.componentId}
      className={createStyles(pack)}
      onClick={pack.onClick}
    >
      {renderChildren(pack)}
    </Element>
  );
}
