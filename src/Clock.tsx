import { useEffect, useState } from "react";
import { Digit } from "./Digit";
import type { DigitType } from "./Digit";
import { ClockFace } from "./ClockFace";

const getLocalTime = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60 * 1000);
};

export const Clock = () => {
  const [date, setDate] = useState<Date>(getLocalTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getLocalTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateIso = date.toISOString();

  return (
    <div className="flex flex-row gap-4 w-full h-screen justify-center items-center max-w-screen max-h-screen">
      <Digit digit={dateIso[11] as DigitType} />
      <Digit digit={dateIso[12] as DigitType} />
      <div className="flex flex-col gap-2">
        <ClockFace clockFace={" "} />
        <ClockFace clockFace={" "} />
      </div>
      <Digit digit={dateIso[14] as DigitType} />
      <Digit digit={dateIso[15] as DigitType} />
      <div className="flex flex-col gap-2">
        <ClockFace clockFace={" "} />
        <ClockFace clockFace={" "} />
      </div>
      <Digit digit={dateIso[17] as DigitType} transitionTimeMs={2000} />
      <Digit digit={dateIso[18] as DigitType} transitionTimeMs={900} />
    </div>
  );
};
