import { useContext } from "react";
import { ThemeContext } from "../../../components/theme/ThemeContext";
import { styleOptions } from "../utils/styleOptions";

export default function WrapperOptions({
  componentPackage,
  setComponentPackage,
}: {
  componentPackage: ComponentPackage;
  setComponentPackage: any;
}) {
  const { updateComponentStyle } = useContext(ThemeContext);
  const component: searchable = componentPackage;
  const handleClick = ({
    style,
    variant,
  }: {
    style: string;
    variant: string;
  }) => {
    let p: any = component.styles;
    p[style] = variant;
    const newComponent = { ...component, styles: p };
    // setComponentPackage(newComponent); //Local state
    updateComponentStyle({
      //Global state
      type: "custom",
      styles: p,
      id: component.componentId,
    });
  };

  return (
    <div className="display-flex flex-column">
      {Object.values(styleOptions).map((option) => {
        return (
          <div key={option.label}>
            <h6>{option.label}</h6>
            {option.options.map((optionsObj: OptionsObject) => {
              return (
                <div key={optionsObj.styleId}>
                  <>
                    {optionsObj.render({
                      optionsObj: { ...optionsObj, onChange: handleClick },
                      componentPackage,
                    })}
                  </>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
