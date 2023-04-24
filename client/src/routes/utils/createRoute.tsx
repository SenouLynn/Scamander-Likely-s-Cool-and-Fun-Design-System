import { useLoaderData } from "react-router-dom";

import ThemeProvider from "../../_components/theme_2.0/ThemeProvider";
import getTheme from "../../_components/theme_2.0/getters/dB/getFieldFromDb";
import Render from "../Page";
import PoopDeck from "../../buildComponents/poopdeck/PoopDeck";

export const createThemepage = (route: Partial<PageRoute>): PageRoute => {
  return {
    id: "",
    label: "",
    route: "/",
    subComponents: [],
    componentIds: {
      componentId: "container",
      location: "0",
    },
    ...route,
  };
};

async function loader(fetcher: () => Promise<any>) {
  return await fetcher();
}

export const PageWrapper = (theme: Partial<ThemeProps & ReactRoute>) => {
  if(!theme.Component){
    throw new Error(`No component found for page ${theme}`)
  }
  //Use router loaded data
  const response = useLoaderData() as DbResponse;
  //Todo: Add error handling/lazy
  if (response.status === "success" || theme) {
    const dbTheme = response.payload.payload;
    return (
      <ThemeProvider {...dbTheme} {...theme}>
        <theme.Component />
      </ThemeProvider>
    );
  } else {
    console.warn("Could not load theme from db");
    throw new Error("No theme found: Could not load theme from db ");
  }
};


export const Page = ({ ...theme }: Partial<ThemeProps>) => {
  //Use router loaded data
  const response = useLoaderData() as DbResponse;
  //Todo: Add error handling/lazy
  if (response.status === "success" || theme) {
    const dbTheme = response.payload.payload;
    return (
      <ThemeProvider {...dbTheme} {...theme}>
        <Render />
      </ThemeProvider>
    );
  } else {
    console.warn("Could not load theme from db");
    throw new Error("No theme found: Could not load theme from db ");
  }
};

export const createRoutes = (
  routes: ReactRoute[],
  theme?: Partial<ThemeProps>
) => {
  return [
    {
      path: "/",
      loader: () => loader(getTheme),
      element: <Page {...theme} />,
    },
    ...routes.map((r) => createPageRoute(r, theme)),
  ];
};

export const createPageRoute = (
  route?: Partial<ReactRoute>,
  theme?: Partial<ThemeProps>
) => {
  async function loader(fetcher: () => Promise<any>) {
    return await fetcher();
  }

  if (route?.Component) {
    return {
      path: "/",
      loader: () => loader(getTheme),
      ...route,
      element: <PageWrapper {...theme} {...route} />,
    };
  }
  return {
    path: "/",
    loader: () => loader(getTheme),
    element: <Page {...theme} />,
    ...route,
  };
};
