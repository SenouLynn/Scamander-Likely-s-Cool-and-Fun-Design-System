import { SelectStyleOptions } from "../components/SelectOptions";

export const createOption = (props: Partial<OptionsObject>): OptionsObject => {
  return {
    optionsId: "",
    styleId: "",
    label: "label",
    index: 1,
    onChange: () => null,
    checkValid: (componentPackage: ComponentPackage) => true,
    render: ({
      optionsObj,
      componentPackage,
    }: {
      optionsObj: OptionsObject;
      componentPackage: ComponentPackage;
    }) => {
      if (optionsObj.checkValid(componentPackage))
        return <SelectStyleOptions {...optionsObj} />;
    },
    ...props,
  };
};
