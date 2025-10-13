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
    <div className="flex flex-col w-full h-screen justify-center gap-16">
      <div className="flex flex-row gap-4 w-full justify-center items-end p-6">
        <Digit digit={dateIso[0] as DigitType} transitionTimeMs={10_000} />
        <Digit digit={dateIso[1] as DigitType} transitionTimeMs={10_000} />
        <Digit digit={dateIso[2] as DigitType} transitionTimeMs={10_000} />
        <Digit digit={dateIso[3] as DigitType} transitionTimeMs={10_000} />
        <div className="aspect-square w-3 ">
          <ClockFace clockFace={" "} />
        </div>
        <Digit digit={dateIso[5] as DigitType} transitionTimeMs={10_000} />
        <Digit digit={dateIso[6] as DigitType} transitionTimeMs={10_000} />
        <div className="aspect-square w-3 ">
          <ClockFace clockFace={" "} />
        </div>
        <Digit digit={dateIso[8] as DigitType} transitionTimeMs={10_000} />
        <Digit digit={dateIso[9] as DigitType} transitionTimeMs={10_000} />
      </div>
      <div className="flex flex-row gap-4 w-full justify-center items-center p-6">
        <Digit digit={dateIso[11] as DigitType} transitionTimeMs={5_000} />
        <Digit digit={dateIso[12] as DigitType} transitionTimeMs={5_000} />
        <div className="flex flex-col gap-2 w-3 ">
          <ClockFace clockFace={" "} />
          <ClockFace clockFace={" "} />
        </div>
        <Digit digit={dateIso[14] as DigitType} transitionTimeMs={5_000} />
        <Digit digit={dateIso[15] as DigitType} transitionTimeMs={5_000} />
        <div className="flex flex-col gap-2 w-3 ">
          <ClockFace clockFace={" "} />
          <ClockFace clockFace={" "} />
        </div>
        <Digit digit={dateIso[17] as DigitType} transitionTimeMs={2000} />
        <Digit digit={dateIso[18] as DigitType} transitionTimeMs={900} />
      </div>
    </div>
  );
};
