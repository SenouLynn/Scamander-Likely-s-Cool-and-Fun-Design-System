import { useContext, useState } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import { genericOptions } from "../utils/controlOptions.manifest";

export default function WrapperOptions({
  componentPackage,
  controlOptions,
}: any) {
  const { updateComponentStyle, openComponents } = useContext(ThemeContext);
  const [styles, setStyles] = useState(componentPackage.styles);
  const generic = genericOptions;
  const wrapperOptions = controlOptions.wrapper;

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
  
  return (
    <div className="display-flex flex-column">
      <select
        value={styles.display}
        onChange={(e) =>
          handleClick({ style: "display", variant: e.target.value })
        }
      >
        <option>Choose: {wrapperOptions.label}</option>
        {Object.values(wrapperOptions.options).map((option: any) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
      {styles.display === "flex" && (
        <>
          <select
            onChange={(e) =>
              handleClick({ style: "justify", variant: e.target.value })
            }
          >
            <option>Choose: Justify</option>
            {Object.values(generic.flexLocations).map((option: any) => {
              return <option value={option.value}>{option.label}</option>;
            })}
          </select>
          <select
            onChange={(e) =>
              handleClick({ style: "align", variant: e.target.value })
            }
          >
            <option>Choose: Align</option>
            {Object.values(generic.flexLocations).map((option: any) => {
              return <option value={option.value}>{option.label}</option>;
            })}
          </select>
          <select>
            <option>Choose: Flex Gap</option>
            {Object.values(generic.genericLevels).map((option: any) => {
              return <option value={option.value}>{option.label}</option>;
            })}
          </select>
        </>
      )}
    </div>
  );
}
