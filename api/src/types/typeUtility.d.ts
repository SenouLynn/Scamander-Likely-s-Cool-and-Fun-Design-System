type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type searchable<O = any> = {
  [key: string]: O;
};

type ObjectKeys<O, T> = {
  [key in keyof O]: T;
};
