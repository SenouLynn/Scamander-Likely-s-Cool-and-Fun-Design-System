export const createAppObject = (app?: Partial<AppDb>): AppDb => {
  return {
    themes: {
      production: {},
      development: {
        pages: {},
        components: {},
        field: {},
        routes: {},
        defaultStyles: {},
      },
    },
    ...app,
  };
};
