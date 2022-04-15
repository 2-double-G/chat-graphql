import { ButtonHTMLAttributes } from "react";

type bottonColor = "default" | "orange" | "violet" | "secondary";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: bottonColor;
  children: React.ReactNode | React.ReactChild;
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
