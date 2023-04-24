import { getPackFromField } from "../../getters/getPackFromField";

export const getters = (theme: AtLeast<ThemeProps, "themeField">) => {
  return {
    pack: (ids: { location: string; componentId?: string }) => {
      return getPackFromField(ids, theme.themeField);
    },
  };
};
