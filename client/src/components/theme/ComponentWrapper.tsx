import { useContext } from "react";
import { createStyles } from "../../utils/styles/createStyles";
import { ThemeContext } from "./ThemeContext";
import { renderChildren } from "./utils/helpers";

export default function ComponentWrapper(props: ComponentPackage) {
  const { setOpenComponents } = useContext(ThemeContext);
  const updaterPackage: ComponentPackage = props;
  const handleDoubleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenComponents({ [props.componentId]: updaterPackage });
  };
  return (
      <div
        id={props.componentId}
        className={createStyles(updaterPackage)}
        onDoubleClick={handleDoubleClick}
      >
        {renderChildren(updaterPackage)}
      </div>
  );
}
