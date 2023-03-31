import React from "react";

interface iBaseButtonProps {
  className?: string;
  tag?: "button" | "span";
  children?: React.ReactNode;
  fontSize?: number;
  buttonSize?: "big" | "default" | "small";
  buttonStyle?: "default" | "outline" | "inverse";
  type?: string;
  onClick?: () => void;
}

const BaseButton = ({
  children,
  className,
  tag,
  type,
  onClick,
}: iBaseButtonProps) => {
  return (
    <>
      {!tag && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
      {tag === "button" && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
      {tag === "span" && (
        <span className={className} onClick={onClick}>
          {children}
        </span>
      )}
    </>
  );
};
export default BaseButton;
