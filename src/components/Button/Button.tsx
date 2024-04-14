// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export type ButtonProps = {
  text?: string;
  variant?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  maxWidth?: string;
};

const Button: React.FC<ButtonProps> = ({
  disabled,
  text,
  onClick,
  variant,
  maxWidth,
  ...props
}) => {
  return (
    <ChakraButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      maxWidth={maxWidth ?? "fit-content"}
      variant={variant ?? "primary"}
      {...props}
    >
      {text}
    </ChakraButton>
  );
};

export default Button;
