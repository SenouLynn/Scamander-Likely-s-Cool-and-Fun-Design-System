import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeOrbitals(props: any) {
  const { openComponents } = useContext(ThemeContext);
  const open = Object.keys(openComponents).length !== 0 ? true : false;

  return (
    <div className="place-full position-relative">
      {props.children}
      {open && (
        <span className="position-absolute place-top-right display-drag">
          {/* <ControlPanel /> */}
        </span>
      )}
    </div>
  );
}
