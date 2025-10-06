// src/components/MinecraftButton.tsx
import type { ButtonHTMLAttributes } from "react";

export type MinecraftButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function MinecraftButton({
  variant = "primary",
  children,
  ...rest
}: MinecraftButtonProps) {
  return (
    <button className={`mc-btn ${variant}`} {...rest}>
      <span className="mc-btn__label">{children}</span>
    </button>
  );
}