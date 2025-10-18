import type Color from "color";
import { createContext, useContext } from "react";

interface SettingsContextType {
  backgroundColor: Parameters<typeof Color.rgb>[0];
  setBackgroundColor: (
    backgroundColor: Parameters<typeof Color.rgb>[0]
  ) => void;
  handColor: Parameters<typeof Color.rgb>[0];
  setHandColor: (handColor: Parameters<typeof Color.rgb>[0]) => void;
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
