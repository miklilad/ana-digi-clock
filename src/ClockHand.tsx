export type ClockHandDirection = "up" | "down" | "left" | "right" | number;

type ClockHandProps = {
  direction: ClockHandDirection;
  transitionTimeMs?: number;
};

const getRotation = (direction: ClockHandDirection) => {
  if (typeof direction === "number") {
    return `rotate-${direction}`;
  }
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
}: ClockHandProps) => {
  const rotation = getRotation(direction);
  return (
    <div
      className={`bg-yellow-500 h-1/5 w-1/2
         origin-right absolute top-1/2
          -translate-y-1/2 rounded-full ${rotation}
          transition ease-in-out
          `}
      style={{ transitionDuration: `${transitionTimeMs}ms` }}
    ></div>
  );
};
