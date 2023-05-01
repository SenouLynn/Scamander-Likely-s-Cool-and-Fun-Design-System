import { useContext } from "react";
import DeleteComponent from "./DeleteComponent";
import { ThemeContext } from "_components/theme/ThemeProvider";

const keys = ["label", "location", "comonentId", "type", "role"];

export default function TabularDisplay() {
  const { themeField } = useContext(ThemeContext);

  const rows: ComponentPackage[] = themeField ? Object.values(themeField) : [];
  return (
    <div className="display-grid h-100 w-100">
      <Row cols={keys} />;
      {rows.map((pack: ComponentPackage, i) => {
        const cols: string[] = keys.map((string) => {
          return (pack as searchable)[string];
        });
        return (
          <Row key={(pack as searchable)[i - 1]} cols={cols} pack={pack} />
        );
      })}
    </div>
  );
}

export const Row = ({
  cols,
  pack,
}: {
  cols: string[];
  pack?: ComponentPackage;
}) => {
  return (
    <div className={`display-grid grid-col-${keys.length + 3}`}>
      {cols.map((col: string, i) => {
        return <Col key={`${col} + ${i}`} col={col} />;
      })}
      <button>See Object</button>
      <button>Edit</button>
      <DeleteComponent pack={pack} />
    </div>
  );
};

export const Col = ({ col }: { col: string }) => {
  //Change width by flexgrowth/grid-span
  return <div className="flex-grow-1 ">{col}</div>;
};
