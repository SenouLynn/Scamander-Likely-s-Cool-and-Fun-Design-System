import { useContext, useState } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import { genericOptions } from "../utils/controlOptions.manifest";

export default function GenericOptions({
  controlOptions,
  componentPackage,
}: any) {
  const { updateComponentStyle, openComponents } = useContext(ThemeContext);

  const generic = controlOptions.generic;
  const options: searchable = genericOptions;
  const include = ["padding", "margin", "border"];
  const sizing = ["width", "height"];

  const handleClick = ({
    style,
    variant,
  }: {
    style: string;
    variant: string;
  }) => {
    const toggler = "componentId";
    let p: any = { ...openComponents[componentPackage[toggler]] }.styles;
    p[style] = variant;
    updateComponentStyle({
      type: "custom",
      styles: p,
      id: componentPackage[toggler],
    });
  };

  const Select = ({ styleId, options, display }: any) => {
    const o = display[styleId];
    return (
      <select
        onChange={(e) =>
          handleClick({ style: styleId, variant: e.target.value })
        }
      >
        <option>Choose: {o.label}</option>
        {Object.values(options[o.options]).map((option: any) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    );
  };
  return (
    <div>
      <div className="display-flex flex-column">
        GenericOptions
        {include.map((style) => {
          return (
            <Select
              styleId={style}
              display={generic}
              options={options}
              key={style}
            />
          );
        })}
      </div>
      <div className="display-flex flex-column">
        Sizing
        {sizing.map((style) => {
          return (
            <Select
              styleId={style}
              display={generic}
              options={options}
              key={style}
            />
          );
        })}
      </div>
    </div>
  );
}
