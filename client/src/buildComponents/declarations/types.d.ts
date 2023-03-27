type OptionsExpanderElement = {
  value: string;
  label: string;
};

type OptionsExpander = {
  id: string;
  label: string;
  options: {
    [key: Oneof<GenericSizes>]: OptionsExpanderElement;
  };
};

type OptionsExpanders = {
    [key: string]: OptionsExpander;
}
