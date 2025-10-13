import { match } from "ts-pattern";
import { ClockFace, type ClockFaceTime } from "./ClockFace";
import { memo } from "react";
import type { AnimationType } from "./ClockHand";

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
  animationType?: AnimationType;
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

const DigitBase = ({ digit, transitionTimeMs, animationType }: DigitProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-0 grow">
      {getDigitsClockFace(digit).map((row, index) => (
        <ClockFace
          clockFace={row}
          key={index}
          transitionTimeMs={transitionTimeMs}
          animationType={animationType}
        />
      ))}
    </div>
  );
};

export const Digit = memo(DigitBase);
