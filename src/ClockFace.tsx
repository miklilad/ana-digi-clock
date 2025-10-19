import { match } from "ts-pattern";
import {
  ClockHand,
  type AnimationType,
  type ClockHandDirection,
} from "./ClockHand";

export type ClockFaceTime = " " | "-" | "|" | "┐" | "┘" | "└" | "┌";

type ClockFaceProps = {
  clockFace: ClockFaceTime;
  transitionTimeMs?: number;
  animationType?: AnimationType;
};

const getClockFaceTime = (
  clockFace: ClockFaceTime
): [ClockHandDirection, ClockHandDirection] =>
  match(clockFace)
    .with(" ", () => ["up", "up"])
    .with("-", () => ["left", "right"])
    .with("|", () => ["up", "down"])
    .with("┐", () => ["left", "down"])
    .with("┌", () => ["down", "right"])
    .with("└", () => ["up", "right"])
    .with("┘", () => ["left", "up"])
    .exhaustive() as [ClockHandDirection, ClockHandDirection];

export const ClockFace = ({
  clockFace,
  transitionTimeMs,
  animationType,
}: ClockFaceProps) => {
  const [firstHand, secondHand] = getClockFaceTime(clockFace);
  return (
    <div className="aspect-square rounded-full border-[1px] border-teal-900 relative">
      <ClockHand
        direction={firstHand}
        transitionTimeMs={transitionTimeMs}
        animationType={animationType}
      />
      <ClockHand
        direction={secondHand}
        transitionTimeMs={transitionTimeMs}
        animationType={animationType}
      />
    </div>
  );
};
