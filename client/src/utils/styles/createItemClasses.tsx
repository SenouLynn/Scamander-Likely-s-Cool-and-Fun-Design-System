import { StylePackage } from "./types";

export const createItemClasses = (stylePackage: StylePackage): string => {
  const payload = [];
  if (stylePackage.display === "flex") {
    const size = stylePackage.size ? stylePackage.size : 1;
    payload.push(createFlexItemClasses({ size }));
  }
  if (stylePackage.display === "grid") {
    const width = stylePackage.width ? stylePackage.width : 1;
    const height = stylePackage.height ? stylePackage.height : 1;
    payload.push(createGridItemClasses({ height, width }));
  }
  return payload.join(" ");
};

const createFlexItemClasses = ({ size }: any) => {
  const flexSizes = [1, 2, 3, 4, 5, 6];
  if (!flexSizes.includes(size)) {
    console.log(`Size passed to flex item, ${size}, is invalid`);
    return "";
  }
  return `flex-grow-${size}`;
};

const createGridItemClasses = ({ height, width }: any) => {
  const gridSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (!gridSizes.includes(height)) {
    console.log(`Height passed to grid item, ${height}, is invalid`);
  }
  if (!gridSizes.includes(width)) {
    console.log(`Width passed to grid item, ${width}, is invalid`);
  }

  let h = height ? `row-span-${height}` : `row-span-${1}`;
  let w = width ? `col-span-${width}` : `col-span-${1}`;
  return `${h} ${w}`;
};
