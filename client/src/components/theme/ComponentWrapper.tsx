import { useContext } from "react";
import { createStyles } from "../../utils/styles/createStyles";
import { ThemeContext } from "./ThemeContext";
import { addPropsToCartridge, renderChildren } from "./utils/helpers";
export default function ComponentWrapper({
  props,
  pack,
}: ComponentWrapperProps) {
  const { setOpenComponents } = useContext(ThemeContext);

  let completePackage = addPropsToCartridge({
    componentPackage: pack,
    props,
  });

  const handleDoubleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // setOpenComponents({ [completePackage.defaultStyleId]: completePackage });
  };
  return (
    <div
      id={completePackage.componentId}
      className={createStyles(completePackage)}
      onDoubleClick={handleDoubleClick}
    >
      {renderChildren(completePackage)}
    </div>
  );
}
