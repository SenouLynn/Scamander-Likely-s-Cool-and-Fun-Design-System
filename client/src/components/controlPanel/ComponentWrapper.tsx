import { useContext, useMemo, useState } from "react";
import { createStyles } from "../../utils/styles/createStyles";
import { ThemeContext } from "../theme/ThemeContext";
import { renderChildren } from "../theme/utils/helpers";
import ControlPanel from "./ControlPanel";
export default function ComponentWrapper(props: ComponentPackage) {
  const { mode = "test" } = useContext(ThemeContext);
  const [styles, setStyles] = useState(props.styles);
  // const [className, setClassName] = useState<string>(props.styles.className);
  const [open, setOpen] = useState(false);

  //Render style over component
  if (mode === "live") {
    return <div className={createStyles(props)}>{renderChildren(props)}</div>;
  }

  //Control panel local state
  const updaterPackage = {
    ...props,
    styles,
    onClick: (p: any) => setStyles(p),
  };

  const handleDoubleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <>
      <div
        className={createStyles(updaterPackage.styles)}
        onDoubleClick={handleDoubleClick}
      >
        {renderChildren(updaterPackage)}
      </div>
      {open && <ControlPanel {...props} onClick={(p: any) => setStyles(p)} />}
    </>
  );
}
