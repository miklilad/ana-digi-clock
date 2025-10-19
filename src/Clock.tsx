import { useEffect, useState } from "react";
import { Digit } from "./Digit";
import type { DigitType } from "./Digit";
import { ClockFace } from "./ClockFace";
import { useSettings } from "./settings/useSettings";

const getLocalTime = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60 * 1000);
};

export const Clock = () => {
  const [date, setDate] = useState<Date>(getLocalTime());

  const {
    backgroundColor,
    showYear,
    showMonth,
    showDay,
    showHour,
    showMinute,
    showSecond,
  } = useSettings();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getLocalTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateIso = date.toISOString();

  return (
    <div
      className="flex h-screen w-full flex-col justify-center gap-16"
      style={{
        backgroundColor: `rgba(${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]}, ${backgroundColor[3]})`,
      }}
    >
      <div className="flex max-h-1/2 flex-row items-end justify-center gap-4 p-6">
        {showDay && (
          <>
            <Digit digit={dateIso[8] as DigitType} transitionTimeMs={10_000} />
            <Digit digit={dateIso[9] as DigitType} transitionTimeMs={10_000} />
          </>
        )}
        {showDay && showMonth && (
          <div className="aspect-square w-1/50">
            <ClockFace clockFace={" "} />
          </div>
        )}
        {showMonth && (
          <>
            <Digit digit={dateIso[5] as DigitType} transitionTimeMs={10_000} />
            <Digit digit={dateIso[6] as DigitType} transitionTimeMs={10_000} />
          </>
        )}
        {showYear && showMonth && (
          <div className="aspect-square w-1/50">
            <ClockFace clockFace={" "} />
          </div>
        )}
        {showYear && (
          <>
            <Digit digit={dateIso[0] as DigitType} transitionTimeMs={10_000} />
            <Digit digit={dateIso[1] as DigitType} transitionTimeMs={10_000} />
            <Digit digit={dateIso[2] as DigitType} transitionTimeMs={10_000} />
            <Digit digit={dateIso[3] as DigitType} transitionTimeMs={10_000} />
          </>
        )}
      </div>
      <div className="flex max-h-1/2 flex-row items-center justify-center gap-4 p-6">
        {showHour && (
          <>
            <Digit
              digit={dateIso[11] as DigitType}
              transitionTimeMs={5_000}
              animationType="ease-in-out"
            />
            <Digit
              digit={dateIso[12] as DigitType}
              transitionTimeMs={5_000}
              animationType="ease-in-out"
            />
          </>
        )}
        {showHour && showMinute && (
          <div className="flex w-1/50 flex-col gap-2">
            <ClockFace clockFace={" "} />
            <ClockFace clockFace={" "} />
          </div>
        )}
        {showMinute && (
          <>
            <Digit
              digit={dateIso[14] as DigitType}
              transitionTimeMs={5_000}
              animationType="ease-in-out"
            />
            <Digit
              digit={dateIso[15] as DigitType}
              transitionTimeMs={5_000}
              animationType="ease-in-out"
            />
          </>
        )}
        {showMinute && showSecond && (
          <div className="flex w-1/50 flex-col gap-2">
            <ClockFace clockFace={" "} />
            <ClockFace clockFace={" "} />
          </div>
        )}
        {showSecond && (
          <>
            <Digit
              digit={dateIso[17] as DigitType}
              transitionTimeMs={2000}
              animationType="ease-in-out"
            />
            <Digit
              digit={dateIso[18] as DigitType}
              transitionTimeMs={900}
              animationType="ease-in-out"
            />
          </>
        )}
      </div>
    </div>
  );
};
