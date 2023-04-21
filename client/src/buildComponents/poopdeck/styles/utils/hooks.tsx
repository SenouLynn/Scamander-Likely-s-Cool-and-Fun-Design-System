import { useState } from "react";

export const useDisplayContext = (pack: ComponentPackage) => {
  const [currentCategory, setCurrentCategory] = useState("display");

  return {
    currentCategory,
    setCurrentCategory,
  };
};
