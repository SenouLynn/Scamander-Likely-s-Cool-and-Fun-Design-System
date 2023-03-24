type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type searchable<O = any> = {
  [key: string]: O;
};
