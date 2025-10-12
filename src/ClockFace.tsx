import { match } from "ts-pattern";
import { ClockHand, type ClockHandDirection } from "./ClockHand";

export type ClockFaceTime = " " | "-" | "|" | "┐" | "┘" | "└" | "┌";

type ClockFaceProps = {
  clockFace: ClockFaceTime;
};

const getClockFaceTime = (
  clockFace: ClockFaceTime
): [ClockHandDirection, ClockHandDirection] =>
  match(clockFace)
    .with(" ", () => ["left", "left"])
    .with("-", () => ["left", "right"])
    .with("|", () => ["up", "down"])
    .with("┐", () => ["left", "down"])
    .with("┌", () => ["down", "right"])
    .with("└", () => ["up", "right"])
    .with("┘", () => ["left", "up"])
    .exhaustive() as [ClockHandDirection, ClockHandDirection];

export const ClockFace = ({ clockFace }: ClockFaceProps) => {
  const [firstHand, secondHand] = getClockFaceTime(clockFace);
  return (
    <div className="min-w-11 aspect-square rounded-full border-2 border-teal-900 relative">
      <ClockHand direction={firstHand} />
      <ClockHand direction={secondHand} />
    </div>
  );
};
