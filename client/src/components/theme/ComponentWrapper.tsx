import { createStyles } from "../../utils/styles/createStyles";
import { renderChildren } from "./utils/helpers";

export default function ComponentWrapper({
  props,
  pack,
}: ComponentWrapperProps) {
  const role = Object.keys(elementTypes).includes(pack.role)
    ? pack.role
    : "wrapper";
  const Element = elementTypes[role as keyof typeof elementTypes].Element;

  return (
    <Element
      data-testid={pack.location || "non-location"}
      id={pack.componentId}
      className={createStyles(pack)}
    >
      {renderChildren(pack)}
    </Element>
  );
}

const elementTypes: HtmlElements = {
  footer: {
    label: "Footer",
    Element: (props: any) => {
      return <footer {...props}>{props.children}</footer>;
    },
  },
  body: {
    label: "Footer",
    Element: (props: any) => {
      return <footer {...props}>{props.children}</footer>;
    },
  },
  section: {
    label: "Section",
    Element: (props: any) => {
      return <section {...props}>{props.children}</section>;
    },
  },
  wrapper: {
    label: "Wrapper",
    Element: (props: any) => {
      return <div {...props}>{props.children}</div>;
    },
  },
  main: {
    label: "Main",
    Element: (props: any) => {
      return <main {...props}>{props.children}</main>;
    },
  },
  header: {
    label: "Header",
    Element: (props: any) => {
      return <header {...props}>{props.children}</header>;
    },
  },
  text: {
    label: "Text",
    Element: (props: any) => {
      return <div {...props}>{props.children}</div>;
    },
  },
};
