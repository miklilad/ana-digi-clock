import {
  ColorPicker,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/ui/shadcn-io/color-picker";
import type Color from "color";
import { useCallback } from "react";
import { useSettings } from "./useSettings";
import { Checkbox } from "@/components/ui/checkbox";

interface SettingsCheckboxProps {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const SettingsCheckbox = ({
  label,
  checked,
  onChange,
}: SettingsCheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox checked={checked} onCheckedChange={onChange} />
      <span>{label}</span>
    </div>
  );
};

export const SettingsMenu = () => {
  const {
    setBackgroundColor,
    setHandColor,
    setShowYear,
    setShowMonth,
    setShowDay,
    setShowHour,
    setShowMinute,
    setShowSecond,
    showYear,
    showMonth,
    showDay,
    showHour,
    showMinute,
    showSecond,
  } = useSettings();

  const handleBackgroundColorChange = useCallback(
    (color: Parameters<typeof Color.rgb>[0]) => {
      setBackgroundColor(color as number[]);
    },
    [setBackgroundColor]
  );

  const handleHandColorChange = useCallback(
    (color: Parameters<typeof Color.rgb>[0]) => {
      setHandColor(color as number[]);
    },
    [setHandColor]
  );

  return (
    <div
      className={`min-h-screen space-y-4 overflow-hidden border-l-[2px] border-gray-500 bg-gray-900 p-10 text-white`}
    >
      {/* Background Color Picker */}
      <ColorPicker
        defaultValue="#020b29"
        onChange={handleBackgroundColorChange}
        className="h-100 max-w-sm rounded-md border bg-gray-900 p-4 shadow-sm"
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
      {/* Hand Color Picker */}
      <ColorPicker
        defaultValue="#efb100"
        onChange={handleHandColorChange}
        className="h-100 max-w-sm rounded-md border bg-gray-900 p-4 shadow-sm"
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
      <div className="flex flex-col gap-4">
        <SettingsCheckbox
          label="Show Year"
          checked={showYear}
          onChange={setShowYear}
        />
        <SettingsCheckbox
          label="Show Month"
          checked={showMonth}
          onChange={setShowMonth}
        />
        <SettingsCheckbox
          label="Show Day"
          checked={showDay}
          onChange={setShowDay}
        />
        <SettingsCheckbox
          label="Show Hour"
          checked={showHour}
          onChange={setShowHour}
        />
        <SettingsCheckbox
          label="Show Minute"
          checked={showMinute}
          onChange={setShowMinute}
        />
        <SettingsCheckbox
          label="Show Second"
          checked={showSecond}
          onChange={setShowSecond}
        />
      </div>
    </div>
  );
};
