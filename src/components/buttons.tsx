import React from "react";

interface iBaseButtonProps {
  className?: string;
  tag?: "button" | "span";
  children?: React.ReactNode;
  fontSize?: number;
  buttonSize?: "big" | "default" | "small";
  buttonStyle?: "default" | "outline" | "inverse";
  type?: string;
}

const BaseButton = ({ children, className, tag }: iBaseButtonProps) => {
  return (
    <>
      {!tag && <button className={className}>{children}</button>}
      {tag === "button" && <button className={className}>{children}</button>}
      {tag === "span" && <span className={className}>{children}</span>}
    </>
  );
};
export default BaseButton;
