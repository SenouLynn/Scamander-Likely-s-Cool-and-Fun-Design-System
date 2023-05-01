export const createAppObject = (app: any) => {
  return {
    themes: {
      production: {},
      development: {
        pages: {},
        components: {},
        field: {},
        routes: {},
      },
    },
    ...app,
  };
};
