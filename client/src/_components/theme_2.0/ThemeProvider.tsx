import { createContext } from "react";
import { createTheme } from "./utils/helpers/create";
import { useTheme } from "./utils/hooks/useTheme";

export default function ThemeProvider(
  props?: Partial<ThemeProps>
) {
  const value = useTheme(props);

  return (
    <ThemeContext.Provider value={{ ...value }}>
      <div data-testid="theme-provider">{props?.children}</div>
    </ThemeContext.Provider>
  );
}

export const ThemeContext = createContext<ThemeProps>(createTheme());
