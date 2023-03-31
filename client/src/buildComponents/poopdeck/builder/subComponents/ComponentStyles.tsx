import React from "react";
import { createComponentPackage } from "../../../../components/theme/utils/helpers";
import { styleOptions } from "../../../../utils/styles/_styleBuilders.manifest";

//Test This
const apperate = (obj: any[], searchKey: string | string[]) => {
  if (typeof searchKey === "string") {
    return obj.reduce((acc: any, style: any) => {
      const p = acc;
      if (style.labels.includes(searchKey)) p.push(style);
      return p;
    }, []);
  }
  if (typeof searchKey === "object") {
  }
};

export default function ComponentStyles({
  pack,
  updatePack,
}: ComponentBuilderProps) {
  const margin: any = apperate(Object.values(styleOptions), "margin");
  const padding: any = apperate(Object.values(styleOptions), "padding");

  return (
    <div>
     
      <div className="border padding-md grid-col-2 grid-gap-1">
        <SelectStyleOption
          options={margin}
          pack={pack}
          updatePack={updatePack}
        />
        <SelectStyleOption
          options={padding}
          pack={pack}
          updatePack={updatePack}
        />
      </div>
    </div>
  );
}

const SelectStyleOption = ({
  pack,
  options,
  updatePack,
}: {
  pack: ComponentPackage;
  updatePack: any;
  options: any[];
}) => {
  const p: searchable = createComponentPackage({ pack });
  const styles = p.styles;
  const seedIndexedClasses = ["master", "top", "bottom", "start", "end"];
  const indexStyleObjects = seedIndexedClasses.reduce(
    (acc: any[], p: string) => {
      return [...acc, apperate(options, p)[0]];
    },
    []
  );
  const updateMetaData = (key: string, value: any) => {
    const payload = { ...pack.styles, [key]: value };
    updatePack({ ...pack, styles: payload });
  };
  return (
    <span className="flex-start-start flex-column">
      {indexStyleObjects.map((style, i) => {
        const base = seedIndexedClasses[i];

        return (
          <React.Fragment key={style.style + base}>
            <label htmlFor={style.style}>{style.label}</label>
            <select
              className="w-100"
              value={styles[style.style] || "none"}
              onChange={(e) => {
                updateMetaData(style.style, e.target.value);
              }}
            >
              {Object.entries(style.options.options).map(
                ([key, value]: any) => (
                  <option key={key} value={key}>
                    {value.label}
                  </option>
                )
              )}
            </select>
          </React.Fragment>
        );
      })}
    </span>
  );
};
