import { useSettings } from "./settings/useSettings";

export type ClockHandDirection = "up" | "down" | "left" | "right";
export type AnimationType = "ease-in-out" | "ease-out" | "ease-in" | "linear";

type ClockHandProps = {
  direction: ClockHandDirection;
  transitionTimeMs?: number;
  animationType?: AnimationType;
};

const getRotation = (direction: ClockHandDirection) => {
  switch (direction) {
    case "up":
      return "rotate-90";
    case "down":
      return "rotate-270";
    case "left":
      return "rotate-0";
    case "right":
      return "rotate-180";
  }
};

export const ClockHand = ({
  direction,
  transitionTimeMs = 5000,
  animationType,
}: ClockHandProps) => {
  const rotation = getRotation(direction);
  const { handColor } = useSettings();
  return (
    <div
      className={`h-1/5 w-1/2
         origin-right absolute top-1/2
         -translate-y-1/2 rounded-full ${rotation} transition-transform
          `}
      style={{
        transitionDuration: `${transitionTimeMs}ms`,
        transitionTimingFunction: animationType ?? "linear",
        backgroundColor: `rgba(${handColor[0]}, ${handColor[1]}, ${handColor[2]}, ${handColor[3]})`,
      }}
    ></div>
  );
};
