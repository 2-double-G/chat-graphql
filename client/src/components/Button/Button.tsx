type bottonColor = "default" | "orange" | "violet" | "secondary";

interface IButton {
  color?: bottonColor;
  props?: any;
  className?: string;
  children: React.ReactNode | React.ReactChild;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  children,
  color = "default",
  ...props
}) => {
  const variant = `btn btn-${color} `;
  const className = `${variant}${props.className ? props.className : ""}`;

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};
