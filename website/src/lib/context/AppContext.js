"use client";
const { createContext } = require("react");

export const AppContext = createContext();

export const AppContextProvider = ({ childern }) => {
  return <AppContext.Provider>{childern}</AppContext.Provider>;
};
