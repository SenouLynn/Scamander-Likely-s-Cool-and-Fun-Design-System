import { genericOptions } from "../utils/controlOptions";

export const SelectStyleOptions = ({
  styleId,
  optionsId,
  onChange,
  label,
}: OptionsObject) => {
  return (
    <select
      className="w-100"
      onChange={(e) => onChange({ style: styleId, variant: e.target.value })}
    >
      <option>Choose: {label}</option>
      {Object.values(
        genericOptions[optionsId as keyof typeof genericOptions]
      ).map((option: any) => {
        return (
          <option value={option.value} key={option.label + option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
