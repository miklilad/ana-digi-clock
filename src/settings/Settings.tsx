import {
  ColorPicker,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/ui/shadcn-io/color-picker";
import type Color from "color";
import { useState, useCallback, useMemo } from "react";
import { SettingsContext, useSettings } from "./useSettings";

interface BurgerButtonProps {
  handleClick: () => void;
}

export const BurgerButton = ({ handleClick }: BurgerButtonProps) => {
  return (
    <button
      className="border-y-[2px] border-l-[2px] border-gray-500 rounded-l-full p-1 absolute top-10 right-1/1 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2 py-2 pl-3 pr-1">
        <div className="w-6 h-1 bg-gray-500 rounded-full"></div>
        <div className="w-6 h-1 bg-gray-500 rounded-full"></div>
        <div className="w-6 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </button>
  );
};

export const SettingsMenu = () => {
  const { setBackgroundColor, setHandColor } = useSettings();

  const handleBackgroundColorChange = useCallback(
    (color: Parameters<typeof Color.rgb>[0]) => {
      setBackgroundColor(color);
    },
    [setBackgroundColor]
  );

  const handleHandColorChange = useCallback(
    (color: Parameters<typeof Color.rgb>[0]) => {
      setHandColor(color);
    },
    [setHandColor]
  );
  return (
    <div
      className={`h-screen border-l-[2px] border-gray-500 p-10 bg-gray-900 overflow-hidden`}
    >
      <ColorPicker
        defaultValue="#020b29"
        onChange={handleBackgroundColorChange}
        className="max-w-sm rounded-md border bg-gray-900 p-4 shadow-sm h-1/2"
      >
        <ColorPickerSelection />
        <div className="flex items-center gap-4">
          {/* <ColorPickerEyeDropper /> */}
          <div className="grid w-full gap-1">
            <ColorPickerHue />
            {/* <ColorPickerAlpha /> */}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ColorPickerOutput />
          <ColorPickerFormat />
        </div>
      </ColorPicker>
      <ColorPicker
        defaultValue="#efb100"
        onChange={handleHandColorChange}
        className="max-w-sm rounded-md border bg-gray-900 p-4 shadow-sm h-1/2"
      >
        <ColorPickerSelection />
        <div className="flex items-center gap-4">
          {/* <ColorPickerEyeDropper /> */}
          <div className="grid w-full gap-1">
            <ColorPickerHue />
            {/* <ColorPickerAlpha /> */}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ColorPickerOutput />
          <ColorPickerFormat />
        </div>
      </ColorPicker>
    </div>
  );
};

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
  const [backgroundColor, setBackgroundColor] = useState<
    Parameters<typeof Color.rgb>[0]
  >([0, 0, 0, 255]);

  const [handColor, setHandColor] = useState<Parameters<typeof Color.rgb>[0]>([
    0, 0, 0, 255,
  ]);

  const contextValue = useMemo(
    () => ({ backgroundColor, setBackgroundColor, handColor, setHandColor }),
    [backgroundColor, setBackgroundColor, handColor, setHandColor]
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
