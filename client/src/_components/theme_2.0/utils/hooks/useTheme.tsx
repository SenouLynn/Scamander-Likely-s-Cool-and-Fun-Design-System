import { useState } from "react";
import { createTheme } from "../helpers/create";
import { getters } from "./getters";
import { setters } from "./setters";
export const useTheme = (props?: Partial<ThemeProps>) => {
  const [themeField, setField] = useState(props?.themeField || {});
  const [routes] = useState(props?.routes || {});

  const get = getters({ themeField });
  const set = setters({ themeField }, setField);
  
  return createTheme({
    themeField,
    routes,
    get,
    set,
  });
};
