import { match } from "ts-pattern";
import { ClockHand, type ClockHandDirection } from "./ClockHand";

export type ClockFaceTime = " " | "-" | "|" | "┐" | "┘" | "└" | "┌";

type ClockFaceProps = {
  clockFace: ClockFaceTime;
  transitionTimeMs?: number;
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

// <div className="min-w-4 md:min-w-6 lg:min-w-10 2xl:min-w-14 aspect-square rounded-full border-[1px] border-teal-900 relative">
//   <ClockHand direction={firstHand} transitionTimeMs={transitionTimeMs} />
//   <ClockHand direction={secondHand} transitionTimeMs={transitionTimeMs} />
// </div>
export const ClockFace = ({ clockFace, transitionTimeMs }: ClockFaceProps) => {
  const [firstHand, secondHand] = getClockFaceTime(clockFace);
  return (
    <div className="aspect-square rounded-full border-[1px] border-teal-900 relative">
      <ClockHand direction={firstHand} transitionTimeMs={transitionTimeMs} />
      <ClockHand direction={secondHand} transitionTimeMs={transitionTimeMs} />
    </div>
  );
};
