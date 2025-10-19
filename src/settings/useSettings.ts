import { createContext, useContext } from "react";

interface SettingsContextType {
  backgroundColor: number[];
  setBackgroundColor: (backgroundColor: number[]) => void;
  handColor: number[];
  setHandColor: (handColor: number[]) => void;
  showYear: boolean;
  setShowYear: (showYear: boolean) => void;
  showMonth: boolean;
  setShowMonth: (showMonth: boolean) => void;
  showDay: boolean;
  setShowDay: (showDay: boolean) => void;
  showHour: boolean;
  setShowHour: (showHour: boolean) => void;
  showMinute: boolean;
  setShowMinute: (showMinute: boolean) => void;
  showSecond: boolean;
  setShowSecond: (showSecond: boolean) => void;
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
