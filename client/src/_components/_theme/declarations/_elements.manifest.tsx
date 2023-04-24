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
  mainHeader: {
    label: "Main Header",
    id: "mainHeader",
    Element: (props: any) => {
      return <h1 {...props}>{props.children}</h1>;
    },
  },
  subHeader: {
    label: "Sub Header",
    id: "subHeader",
    Element: (props: any) => {
      return <h2 {...props}>{props.children}</h2>;
    },
  },
  largeHeader: {
    label: "Large Header",
    id: "largeHeader",
    Element: (props: any) => {
      return <h3 {...props}>{props.children}</h3>;
    },
  },
  mediumHeader: {
    label: "Medium Header",
    id: "mediumHeader",
    Element: (props: any) => {
      return <h4 {...props}>{props.children}</h4>;
    },
  },
  smallHeader: {
    label: "Small Header",
    id: "smallHeader",
    Element: (props: any) => {
      return <h5 {...props}>{props.children}</h5>;
    },
  },
  tinyHeader: {
    label: "Tiny Header",
    id: "tinyHeader",
    Element: (props: any) => {
      return <h6 {...props}>{props.children}</h6>;
    },
  },
  image: {
    label: "Image",
    id: "image",
    Element: (props: any, ) => {
      const src = props.styles?.imgUrl || props.pack?.styles?.imgUrl;
      console.log(src, props);
      return (
        <img
          {...props}
          src={
            src
          }
        />
      );
    },
  },
};

export default elementTypes;
