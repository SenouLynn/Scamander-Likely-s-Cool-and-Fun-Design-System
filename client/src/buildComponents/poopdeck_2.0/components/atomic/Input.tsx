export const Input = ({
  value,
  onChange,
  disabled,
  label,
}: {
  label: string;
  value: string;
  onChange: (v: any) => void;
  disabled?: boolean;
}) => {
  return (
    <span className="flex-start-start flex-column w-100">
      <label>{label}</label>
      <input
        type="text"
        placeholder="Text"
        value={value}
        className="w-100"
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </span>
  );
};
