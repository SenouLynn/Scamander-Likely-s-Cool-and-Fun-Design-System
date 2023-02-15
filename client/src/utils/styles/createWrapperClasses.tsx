import { StylePackage } from "./types";


export const createWrapperClasses = (stylePackage: StylePackage): string => {
  const payload = [];
  if (stylePackage.display === "flex") {
    const justify = stylePackage.justify ? stylePackage.justify : "center";
    const align = stylePackage.align ? stylePackage.align : "center";
    payload.push(createStyleByFlex({ stylePackage, justify, align }));
  }
  if (stylePackage.display === "grid") {
    const columns = stylePackage.columns ? stylePackage.columns : 1;
    const rows = stylePackage.rows ? stylePackage.rows : 1;
    payload.push(createStyleByGrid({ stylePackage, columns, rows }));
  }
  return payload.join(" ");
};

export const createStyleByFlex = ({ justify, align }: any): string => {
  const flexPlacements: FlexPlacements[] = [
    "between",
    "start",
    "end",
    "center",
    "around",
  ];
  if (!flexPlacements.includes(justify)) {
    console.log(`Justify value, ${justify}, for flex container, is not valid`);
  }
  if (!flexPlacements.includes(align)) {
    console.log(`Align value, ${align}, for flex container, is not valid`);
  }
  return `flex-${justify}-${align}`;
};

export const createStyleByGrid = ({ columns, rows }: any): string => {
  const gridSizes: GridSizes[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (!columns || !gridSizes.includes(columns)) {
    console.log(`Columns value, ${columns}, for flex container, is not valid`);
  }
  if (!rows || !gridSizes.includes(rows)) {
    console.log(`Rows value, ${rows}, for flex container, is not valid`);
  }
  const col = columns ? `grid-col-${columns}` : "";
  const row = rows ? `grid-row-${rows}` : "";
  return `d-grid ${col}  ${row}`;
};
