import React, { useContext } from "react";
import { ThemeContext } from "../../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../../components/theme/utils/helpers";

export default function SaveComponent({
  pack,
  updatePack,
}: ComponentBuilderProps) {
  const { setComponentList } = useContext(ThemeContext);

  const saveLocal = () => {
    updatePack(pack);
    //create new instance of pack with new id + location
    //update parent pack with new version
    //save new version to component list to be called on later
  };

  //Saves to theme context, will ovewrite everywhere
  const saveMaster = () => {
    setComponentList(createComponentPackage({ pack }));
  };
  return (
    <div className="w-100 flex-end center padding-top-md">
      <button onClick={saveLocal}>Save as</button>
      <button onClick={saveMaster}>Save master</button>
    </div>
  );
}
