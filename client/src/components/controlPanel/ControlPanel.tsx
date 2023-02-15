import React, { useContext } from "react";
import { Container } from "../Container";
import { ThemeContext } from "../theme/ThemeContext";

import { controlOptions } from "../theme/utils/fakeDb/controlOptions.manifest";

export default function ControlPanel(props: ComponentPackage) {
  const { getStyleOptions } = useContext(ThemeContext);
  const styleOptions = controlOptions; //getStyleOptions(props)
  const { onClick = () => null, styles } = props;

  const handleClick = ({
    style,
    variant,
  }: {
    style: string;
    variant: string;
  }) => {
    let p: any = { ...styles };
    p[style] = variant;
    onClick(p);
  };
  return (
    <Container component="container" margin={"sm"} className="w-fit-content">
      <div className=" flex-start-start ">
        {Object.entries(styleOptions).map(([style, variants]) => {
          const variantsObj = variants;
          return (
            <div className="border padding-sm margin-sm flex-column flex-start-center flex-grow-1">
              <h3 className="padding-sm">{style}</h3>
              <div className="flex-grow-1 flex-column flex-start-center ">
                {variantsObj &&
                  Object.entries(variantsObj).map(([variant, label]) => {
                    return (
                      <button
                        className="button primary outline margin-xsm"
                        onClick={() => handleClick({ style, variant })}
                      >
                        {label as string}
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
