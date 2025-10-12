import { match } from "ts-pattern";
import { ClockFace, type ClockFaceTime } from "./ClockFace";
import { memo } from "react";

export type DigitType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

type DigitProps = {
  digit: DigitType;
  transitionTimeMs?: number;
};

const getDigitsClockFace = (digit: DigitType) =>
  match(digit)
    .with("0", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["|", "┌", "┐", "|"],
      ["|", "|", "|", "|"],
      ["|", "|", "|", "|"],
      ["|", "└", "┘", "|"],
      ["└", "-", "-", "┘"],
    ])
    .with("1", (): ClockFaceTime[][] => [
      ["┌", "-", "┐", " "],
      ["└", "┐", "|", " "],
      [" ", "|", "|", " "],
      [" ", "|", "|", " "],
      ["┌", "┘", "└", "┐"],
      ["└", "-", "-", "┘"],
    ])
    .with("2", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["└", "-", "┐", "|"],
      ["┌", "-", "┘", "|"],
      ["|", "┌", "-", "┘"],
      ["|", "└", "-", "┐"],
      ["└", "-", "-", "┘"],
    ])
    .with("3", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["└", "-", "┐", "|"],
      ["┌", "-", "┘", "|"],
      ["└", "-", "┐", "|"],
      ["┌", "-", "┘", "|"],
      ["└", "-", "-", "┘"],
    ])
    .with("4", (): ClockFaceTime[][] => [
      ["┌", "┐", "┌", "┐"],
      ["|", "|", "|", "|"],
      ["|", "└", "┘", "|"],
      ["└", "-", "┐", "|"],
      [" ", " ", "|", "|"],
      [" ", " ", "└", "┘"],
    ])
    .with("5", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["|", "┌", "-", "┘"],
      ["|", "└", "-", "┐"],
      ["└", "-", "┐", "|"],
      ["┌", "-", "┘", "|"],
      ["└", "-", "-", "┘"],
    ])
    .with("6", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["|", "┌", "-", "┘"],
      ["|", "└", "-", "┐"],
      ["|", "┌", "┐", "|"],
      ["|", "└", "┘", "|"],
      ["└", "-", "-", "┘"],
    ])
    .with("7", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["└", "-", "┐", "|"],
      [" ", " ", "|", "|"],
      [" ", " ", "|", "|"],
      [" ", " ", "|", "|"],
      [" ", " ", "└", "┘"],
    ])
    .with("8", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["|", "┌", "┐", "|"],
      ["|", "└", "┘", "|"],
      ["|", "┌", "┐", "|"],
      ["|", "└", "┘", "|"],
      ["└", "-", "-", "┘"],
    ])
    .with("9", (): ClockFaceTime[][] => [
      ["┌", "-", "-", "┐"],
      ["|", "┌", "┐", "|"],
      ["|", "└", "┘", "|"],
      ["└", "-", "┐", "|"],
      ["┌", "-", "┘", "|"],
      ["└", "-", "-", "┘"],
    ])
    .exhaustive()
    .flat();

const DigitBase = ({ digit, transitionTimeMs }: DigitProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-0">
      {getDigitsClockFace(digit).map((row, index) => (
        <ClockFace
          clockFace={row}
          key={index}
          transitionTimeMs={transitionTimeMs}
        />
      ))}
    </div>
  );
};

export const Digit = memo(DigitBase);
