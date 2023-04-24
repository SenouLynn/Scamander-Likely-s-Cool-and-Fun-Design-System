import { useContext, useMemo } from "react";
import { ThemeContext } from "../_components/theme_2.0/ThemeProvider";
import { usePage } from "../_components/theme_2.0/utils/hooks/usePage";
import { findPage } from "./utils/helpers";

//This is the top most consumer of the theme
export default function Page(theme?: Partial<ThemeProps>) {
  const { themeField, routes } = useContext(ThemeContext);
  const location = usePage();

  //get component for route
  const seed = useMemo(
    () => findPage(location.pathname, routes, themeField),
    [location, themeField]
  );

  return <>{seed && seed.render({ props: {}, pack: seed })}</>;
}
