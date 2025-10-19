import { createContext, useContext } from "react";

interface SettingsContextType {
  backgroundColor: number[];
  setBackgroundColor: (backgroundColor: number[]) => void;
  handColor: number[];
  setHandColor: (handColor: number[]) => void;
}
export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
