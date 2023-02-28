type InitData = {
  controlOptions: ControlOptions;
  defaultStyles: DefaultStyleObj;
  componentList: ComponentStyleObj;
};
type UpdateStyleProps = {
  type: "default" | "custom";
  id: string;
  styles: StylePackage;
  allStyles: any;
};

type DefaultStyleObj = {
  [key: string]: {
    defaultStyleId: string;
    label: string;
    styles: StyleOptions;
  };
};

type ComponentStyleObj = {
  [key: string]: {
    defaultStyleId: string;
    componentId: string;
    label: string;
    styles: StyleOptions;
  };
};
type ControlOptions = Partial<{
  wrapper: DataDisplayKeys;
  item: DataDisplayKeys;
  generic: {
    padding: DataDisplayKeys;
  };
  options: {
    [key: string]: DataDisplayKeys;
  };
}>;

type DataDisplayKeys = {
  label: string;
  options?:
    | {
        [key: string]: DataDisplayValues;
      }
    | string;
  value: string | number;
};
type DataDisplayValues = {
  label: string;
  value: string | number;
};

type ControlOptionsDisplay = ControlOptions & {
  errors: ErrorMessageObj[];
};

type SelectOptionsDisplay = {
  styleId: string;
  optionsId: string;
  onClick: (x: any) => void;
};

type OptionsObject = {
  optionsId: string;
  styleId: string;
  label: string;
  index: number;
  render: ({
    optionsObj,
    componentPackage,
  }: {
    optionsObj: OptionsObject;
    componentPackage: ComponentPackage;
  }) => void;
  checkValid: (componentPackage: ComponentPackage) => boolean;
  onChange: any;
};

type ComponentWrapperProps = {
  props: ComponentProps;
  pack: ComponentPackage;
};
