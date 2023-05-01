export const packClassification: { [key: string]: ElementsObj } = {
  page: {
    label: "Page",
    id: "page",
    Element: (props: any) => {
      return (
        <div role={"page"} {...props}>
          {props.children}
        </div>
      );
    },
  },
  section: {
    label: "Section",
    id: "section",
    Element: (props: any) => {
      return <section {...props}>{props.children}</section>;
    },
  },
  component: {
    label: "Component",
    id: "component",
    Element: (props: any) => {
      return <div {...props}>{props.children}</div>;
    },
  },

};
