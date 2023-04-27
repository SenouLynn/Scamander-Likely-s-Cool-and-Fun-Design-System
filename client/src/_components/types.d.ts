type OptionsExpanderElement = {
  value: string;
  label: string;
  style?: string;
};

type OptionsExpander = {
  id: string;
  label: string;
  builder: (option: OptionsExpanderElement) => void;
  options: {
    [key: string]: OptionsExpanderElement;
  };
};

type OptionsExpanders = {
  [key: string]: OptionsExpander;
};

type StyleBuilder = {
  [key: string]: {
    style: string;
    label: string;
    options: OptionsExpander;
  };
};

type StyleClassRenderTestSuite = {
  [key: string]: OptionsExpander;
};
