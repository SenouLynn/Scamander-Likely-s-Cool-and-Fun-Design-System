import React, { createContext } from "react";

export const DisplayContext = createContext({
  currentCategory: "display",
  setCurrentCategory: (p: string) => {},
});
