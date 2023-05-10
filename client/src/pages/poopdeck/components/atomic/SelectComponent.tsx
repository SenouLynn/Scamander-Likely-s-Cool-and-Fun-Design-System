import React from "react";

export default function SelectComponent({
  label,
  onChange,
  getSet,
}: SelectComponentProps) {
  const group = getSet();

  if (!group) return null;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const pack = group.find((option) => option.location === value);

    pack ? onChange(pack) : console.warn("No pack found for value :", value);
    return pack;
  };
  return (
    <span className="flex-start-center">
      <select id={label} onChange={handleChange}>
        <option>{label}</option>
        {group.map((option) => {
          return (
            <option key={option.location} value={option.location}>
              {option.label}
            </option>
          );
        })}
      </select>
    </span>
  );
}

type SelectComponentProps = {
  onChange: (v: ComponentPackage) => void;
  getSet: () => ComponentPackage[];
  label: string;
};
