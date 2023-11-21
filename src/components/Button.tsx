import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}> {children}</button>;
}

export default Button;
