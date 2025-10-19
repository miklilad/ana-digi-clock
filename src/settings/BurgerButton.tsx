export interface BurgerButtonProps {
  handleClick: () => void;
}

export const BurgerButton = ({ handleClick }: BurgerButtonProps) => {
  return (
    <button
      className="absolute top-10 right-1/1 rounded-l-full border-y-[2px] border-l-[2px] border-gray-500 p-1 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2 py-2 pr-1 pl-3">
        <div className="h-1 w-6 rounded-full bg-gray-500"></div>
        <div className="h-1 w-6 rounded-full bg-gray-500"></div>
        <div className="h-1 w-6 rounded-full bg-gray-500"></div>
      </div>
    </button>
  );
};
