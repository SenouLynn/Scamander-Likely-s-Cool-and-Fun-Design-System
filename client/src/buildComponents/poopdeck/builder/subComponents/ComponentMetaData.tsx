import { useMemo } from "react";
import elements from "../../../../components/theme/declarations/_elements.manifest";

export default function ComponentMetaData({
  pack,
  updatePack,
}: {
  pack: Partial<ComponentPackage>;
  updatePack: any;
}) {
  const { label, componentId, role } = useMemo(() => pack, [pack]);

  const updateMetaData = (key: string, value: string) => {
    updatePack({ ...pack, [key]: value });
  };

  return (
    <div className="">
      <h2>Component Meta Data</h2>
      <div className="grid-col-3 grid-gap-1 ">
        <span className="flex-grow-1 ">
          <span className="flex-start-start flex-column ">
            <label htmlFor="label" className="w-100">
              Label
            </label>
            <input
              type="text"
              id="label"
              value={label}
              className="w-100"
              onChange={(e) => {
                updateMetaData("label", e.target.value);
              }}
            />
          </span>
        </span>

        <span className="flex-grow-1">
          <span className="flex-start-start flex-column">
            <label htmlFor="componentId">ComponentId</label>
            <input
              type="text"
              id="componentId"
              value={componentId}
              className="w-100"
              onChange={(e) => {
                updateMetaData("componentId", e.target.value);
              }}
            />
          </span>
        </span>
        <span className="flex-grow-1">
          <span className="flex-start-start flex-column">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              className="w-100"
              value={role || "wrapper"}
              onChange={(e) => {
                updateMetaData("role", e.target.value);
              }}
            >
              {Object.entries(elements).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </span>
        </span>
      </div>
    </div>
  );
}
