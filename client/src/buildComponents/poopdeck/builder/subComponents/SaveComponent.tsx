import React, { useContext } from "react";
import { ThemeContext } from "../../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../../components/theme/utils/helpers";

export default function SaveComponent({
  pack,
  updatePack,
}: ComponentBuilderProps) {
  const { setComponentList } = useContext(ThemeContext);

  const saveLocal = () => {
    //Are we trying to change all isntances of this componentId, all siblings?, or all within master Component Tree?
    //All have different testable logic
  };

  //Saves to theme context, will ovewrite everywhere
  const saveMaster = () => {
    setComponentList(createComponentPackage({ pack }));
  };
  return (
    <div className="w-100 flex-end center padding-top-md">
      {/* <button onClick={saveLocal}>Save as</button> */}
      <button onClick={saveMaster}>Save Global</button>
    </div>
  );
}
