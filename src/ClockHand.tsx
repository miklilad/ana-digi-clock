export type ClockHandDirection = "up" | "down" | "left" | "right" | number;

type ClockHandProps = {
  direction: ClockHandDirection;
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

export const ClockHand = ({ direction }: ClockHandProps) => {
  const rotation = getRotation(direction);
  return (
    <div
      className={`bg-yellow-500 h-2 w-1/2
         origin-right absolute top-1/2
          -translate-y-1/2 rounded-full ${rotation}
          transition duration-900 ease-in-out
          `}
    ></div>
  );
};
