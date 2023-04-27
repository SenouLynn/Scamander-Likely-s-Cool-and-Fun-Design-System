import { createStyles } from "../../utils/styles/createStyles";
import elements from "./declarations/_elements.manifest";
import { renderChildren } from "./utils/hooks/helpers";

export default function ComponentWrapper({
  props,
  pack,
}: ComponentWrapperProps) {
  const noChildrenElements = ["input", "image", "hr", "br", "meta", "link"];

  //Html element switch
  const role =
    pack.role && Object.keys(elements).includes(pack.role)
      ? pack.role
      : "wrapper";
  const Element = elements[role as keyof typeof elements].Element;
  if (noChildrenElements.includes(role)) {
    return (
      <Element
        // {...props}
        pack={pack}
        data-testid={pack.location || "non-location"}
        id={pack.componentId}
        className={createStyles(pack)}
        onClick={pack.onClick}
      />
    );
  } else {
    return (
      <Element
        pack={pack}
        data-testid={pack.location || "non-location"}
        id={pack.componentId}
        className={createStyles(pack)}
        onClick={pack.onClick}
      >
        {renderChildren(pack)}
      </Element>
    );
  }
}
