const elementTypes: HtmlElements = {
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
  footer: {
    label: "Footer",
    id: "footer",
    Element: (props: any) => {
      return <footer {...props}>{props.children}</footer>;
    },
  },
  body: {
    label: "Footer",
    id: "body",
    Element: (props: any) => {
      return <footer {...props}>{props.children}</footer>;
    },
  },
  section: {
    label: "Section",
    id: "section",
    Element: (props: any) => {
      return <section {...props}>{props.children}</section>;
    },
  },
  wrapper: {
    label: "Wrapper",
    id: "wrapper",
    Element: (props: any) => {
      return <div {...props}>{props.children}</div>;
    },
  },
  main: {
    label: "Main",
    id: "main",
    Element: (props: any) => {
      return <main {...props}>{props.children}</main>;
    },
  },
  header: {
    label: "Header",
    id: "header",
    Element: (props: any) => {
      return <header {...props}>{props.children}</header>;
    },
  },
  text: {
    label: "Text",
    id: "text",
    Element: (props: any) => {
      return <p {...props}>{props.children}</p>;
    },
  },
  button: {
    label: "Button",
    id: "button",
    Element: (props: any) => {
      return <button {...props}>{props.children}</button>;
    },
  },
};

export default elementTypes;
