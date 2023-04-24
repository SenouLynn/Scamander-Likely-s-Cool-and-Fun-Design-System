export const createTheme = (props?: Partial<ThemeProps>): ThemeProps => {
  return {
    id: "theme-X.0",
    label: "New Theme",
    themeField: {},
    routes: {},
    get: {
      pack: () => null,
    },
    set: {
      field: () => null,
      fieldList: () => null,
    },
    ...props,
  };
};
