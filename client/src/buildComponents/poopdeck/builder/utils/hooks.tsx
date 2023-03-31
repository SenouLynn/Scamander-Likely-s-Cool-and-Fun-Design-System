import { useState } from "react";

export const useComponentManager = (pack: ComponentPackage) => {
  const [masterComponent, setMasterComponent] =
    useState<ComponentPackage>(pack);

  return { masterComponent, setMasterComponent };
};
