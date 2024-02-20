type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
};

export default function Button({
  children,
  onClick,
  disabled,
  selected,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-sm  focus:outline-none focus:ring-2 ${
        selected
          ? "bg-cyan-600 text-white focus:ring-cyan-300 cursor-not-allowed"
          : "bg-white text-cyan-800"
      }  `}
    >
      {children}
    </button>
  );
}
