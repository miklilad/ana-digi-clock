import { useState, useMemo } from "react";
import { SettingsContext } from "./useSettings";
import { BurgerButton } from "./BurgerButton";
import { SettingsMenu } from "./SettingsMenu";

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="fixed top-0 right-0 transform transition-transform duration-400 ease-in-out"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
    >
      <BurgerButton handleClick={handleClick} />
      <SettingsMenu />
    </div>
  );
};

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [backgroundColor, setBackgroundColor] = useState<number[]>([
    0, 0, 0, 255,
  ]);

  const [handColor, setHandColor] = useState<number[]>([0, 0, 0, 255]);

  // Show Day, Hour, Minute, Second
  const [showYear, setShowYear] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [showDay, setShowDay] = useState(false);
  const [showHour, setShowHour] = useState(true);
  const [showMinute, setShowMinute] = useState(true);
  const [showSecond, setShowSecond] = useState(true);

  const contextValue = useMemo(
    () => ({
      backgroundColor,
      setBackgroundColor,
      handColor,
      setHandColor,
      showYear,
      setShowYear,
      showMonth,
      setShowMonth,
      showDay,
      setShowDay,
      showHour,
      setShowHour,
      showMinute,
      setShowMinute,
      showSecond,
      setShowSecond,
    }),
    [
      backgroundColor,
      setBackgroundColor,
      handColor,
      setHandColor,
      showYear,
      setShowYear,
      showMonth,
      setShowMonth,
      showDay,
      setShowDay,
      showHour,
      setShowHour,
      showMinute,
      setShowMinute,
      showSecond,
      setShowSecond,
    ]
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
