import { StylePackage } from "./types";

const genericSizes: GenericSizes[] = [
  "none",
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
];
const flexPlacements: FlexPlacements[] = [
  "between",
  "start",
  "end",
  "center",
  "around",
];
const gridSizes: GridSizes[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const createWrapperClasses = (stylePackage: StylePackage): string => {
  const payload = [];
  if (stylePackage.display === "flex") {
    const justify = stylePackage.justify ? stylePackage.justify : "center";
    const align = stylePackage.align ? stylePackage.align : "center";
    const gap = stylePackage.gap ? stylePackage.gap : "none";
    payload.push(createStyleByFlex({ stylePackage, justify, align, gap }));
  }
  if (stylePackage.display === "grid") {
    const columns = stylePackage.columns ? stylePackage.columns : 1;
    const rows = stylePackage.rows ? stylePackage.rows : 1;
    payload.push(createStyleByGrid({ stylePackage, columns, rows }));
  }
  return payload.join(" ");
};

export const createStyleByFlex = ({ justify, align, gap }: any): string => {
  if (!flexPlacements.includes(justify)) {
    console.log(`Justify value, ${justify}, for flex container, is not valid`);
  }
  if (!flexPlacements.includes(align)) {
    console.log(`Align value, ${align}, for flex container, is not valid`);
  }
  if (!genericSizes.includes(gap)) {
    console.log(`Gap value, ${align}, for flex container, is not valid`);
  }
  return `flex-${justify}-${align} ${gap !== "none" ? `flex-gap-${gap}` : ""}`;
};

export const createStyleByGrid = ({ columns, rows, gap }: any): string => {
  if (!columns || !gridSizes.includes(columns)) {
    console.log(`Columns value, ${columns}, for flex container, is not valid`);
  }
  if (!rows || !gridSizes.includes(rows)) {
    console.log(`Rows value, ${rows}, for flex container, is not valid`);
  }
  if (!genericSizes.includes(gap)) {
    console.log(`Gap value, ${gap}, for flex container, is not valid`);
  }
  const col = columns ? `grid-col-${columns}` : "";
  const row = rows ? `grid-row-${rows}` : "";
  return `d-grid ${col}  ${row} ${gap !== "none" ? `grid-gap-${gap}` : ""}`;
};
