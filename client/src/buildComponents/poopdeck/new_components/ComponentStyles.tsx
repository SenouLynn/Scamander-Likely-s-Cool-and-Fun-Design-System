import React, { useContext, useState } from "react";
import { PoopDeckContext } from "..";

export const options_expanders: OptionsExpanders = {
  genericSizes: {
    id: "genericSizes",
    label: "Generic Sizes",
    options: {
      xsm: {
        value: "xsm",
        label: "Extra Small",
      },
      sm: {
        value: "sm",
        label: "Small",
      },
      md: {
        value: "md",
        label: "Medium",
      },
      lg: {
        value: "lg",
        label: "Large",
      },
      xl: {
        value: "xl",
        label: "Extra Large",
      },
    },
  },
};
export const styleOptions = {
  margin: {
    style: "margin",
    options: options_expanders.genericSizes,
  },
  padding: {
    style: "padding",
    options: options_expanders.genericSizes,
  },
};
export default function ComponentStyles() {
  const { newComponent, updateNewComponent } = useContext(PoopDeckContext);

  const [fields, setFields] = useState({
    ...Object.values(styleOptions).reduce((acc, { style }) => {
      let p: searchable = acc;
      p[style] =
        newComponent?.styles[style as keyof typeof newComponent.styles] || "md";
      return acc;
    }, {}),
  });

  const handleChange = (style: string, option: string) => {
    //Add style update to local state
    const p: searchable = { ...fields, [style]: option };
    setFields(p);

    //Update newComponent in context
    newComponent &&
      updateNewComponent({
        ...newComponent,
        styles: { ...newComponent.styles, ...p },
      });
  };

  if (!newComponent) return null;
  return (
    <div>
      <h2>Styles</h2>
      <div className="margin-md">
        {Object.values({ ...styleOptions }).map(({ style, options }) => (
          <div className="flex-between-center flex-row flex-gap-1" key={style}>
            <span className="flex-grow-1">
              <label htmlFor={style}>{style}</label>
              <select
                id={style}
                onChange={(e) => handleChange(style, e.target.value)}
              >
                {Object.values(options.options).map((option: any) => {
                  return (
                    <option value={option.value} key={option.value + style}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
