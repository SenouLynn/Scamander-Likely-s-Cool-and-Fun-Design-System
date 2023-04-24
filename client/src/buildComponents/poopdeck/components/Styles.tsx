import React, { useContext } from "react";
import { styleOptions } from "../../../utils/styles/_styleBuilders.manifest";
import { createComponentPackage } from "../../../_components/_theme/utils/helpers";
import { PoopDeckContext } from "../context";

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

export default function Styles({ pack }: { pack: ComponentPackage }) {
  const { updaters, field } = useContext(PoopDeckContext);

  const margin: any = apperate(Object.values(styleOptions), "margin");
  const padding: any = apperate(Object.values(styleOptions), "padding");

  const handleUpdate = (p: ComponentPackage) => {
    updaters.field(p);
  };
  return (
    <div>
      <div className="border padding-md grid-col-2 grid-gap-1">
        <SelectStyleOption
          options={margin}
          pack={pack}
          updatePack={handleUpdate}
        />
        <SelectStyleOption
          options={padding}
          pack={pack}
          updatePack={handleUpdate}
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
