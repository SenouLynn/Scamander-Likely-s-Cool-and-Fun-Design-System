import { ThemeContext } from "_components/theme_2.0/ThemeProvider";
import { useContext } from "react";

const keys = ["label", "location", "comonentId", "type", "role"];

export default function TabularDisplay() {
  const { themeField } = useContext(ThemeContext);

  const rows: ComponentPackage[] = themeField ? Object.values(themeField) : [];
  return (
    <div className="display-grid h-100 w-100">
      <Row cols={keys} />;
      {rows.map((pack: ComponentPackage) => {
        const cols: string[] = keys.map((string) => {
          return (pack as searchable)[string];
        });
        return <Row cols={cols} />;
      })}
    </div>
  );
}

export const Row = ({ cols }: { cols: string[] }) => {
  return (
    <div className={`display-grid grid-col-${keys.length + 3}`}>
      {cols.map((col: string) => {
        return <Col col={col} />;
      })}
      <button>See Object</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export const Col = ({ col }: { col: string }) => {
  //Change width by flexgrowth/grid-span
  return <div className="flex-grow-1 ">{col}</div>;
};
