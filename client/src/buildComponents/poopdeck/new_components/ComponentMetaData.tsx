import React, { useEffect } from "react";
import { PoopDeckContext } from "..";
import elements from "../../../components/theme/declarations/_elements.manifest";

export default function ComponentMetaData() {
  const { newComponent, updateNewComponent } =
    React.useContext(PoopDeckContext);

  const [fields, setFields] = React.useState({
    label: newComponent?.label || "",
    componentId: newComponent?.componentId || "",
    role: newComponent?.role || "wrapper",
  });

  const updateFields = (key: string, value: string) => {
    const newField = { ...fields, [key]: value };
    //Update local state
    setFields(newField);
    //Update context state
    newComponent && updateNewComponent({ ...newComponent, ...newField });
  };

  useEffect(() => {
    setFields({
      label: newComponent?.label || "",
      componentId: newComponent?.componentId || "",
      role: newComponent?.role || "wrapper",
    });
  }, [newComponent]);
  if (!newComponent) return null;
  return (
    <div>
      <h2>Component Meta Data</h2>
      <div className="flex-between-center flex-row flex-gap-1">
        <span className="flex-grow-1">
          <label htmlFor="label">Label</label>
          <input
            type="text"
            id="label"
            value={fields.label}
            onChange={(e) => {
              updateFields("label", e.target.value);
            }}
          />
        </span>

        <span className="flex-grow-1">
          <label htmlFor="componentId">ComponentId</label>
          <input
            type="text"
            id="componentId"
            value={fields.componentId}
            onChange={(e) => {
              updateFields("componentId", e.target.value);
            }}
          />
        </span>
        <span className="flex-grow-1">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            className="w-100"
            value={fields.role}
            onChange={(e) => {
              updateFields("role", e.target.value);
            }}
          >
            {Object.entries(elements).map(([key, value]) => (
              <option key={key} value={key}>
                {value.label}
              </option>
            ))}
          </select>
        </span>
      </div>
    </div>
  );
}
