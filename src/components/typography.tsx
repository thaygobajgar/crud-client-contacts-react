import React from "react";

interface iBaseTypographyProps {
  className?: string;
  tag?: string;
  children?: React.ReactNode;
  fontSize?: string | number;
  opacity?: number;
  fontWeight?: 600 | 500 | 400;
  color?: "black" | "white" | "blue" | "red";
  disabled?: boolean;
  onClick?: () => void;
}

const BaseTypography = ({
  children,
  className,
  tag,
  onClick,
}: iBaseTypographyProps) => {
  return (
    <>
      {!tag && <p className={className}>{children}</p>}
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "h5" && <h5 className={className}>{children}</h5>}
      {tag === "h6" && <h6 className={className}>{children}</h6>}
      {tag === "p" && <p className={className}>{children}</p>}
      {tag === "span" && (
        <span className={className} onClick={onClick}>
          {children}
        </span>
      )}
      {tag === "small" && <small className={className}>{children}</small>}
      {tag === "label" && <label className={className}>{children}</label>}
      {tag === "caption" && <caption className={className}>{children}</caption>}
    </>
  );
};

export default BaseTypography;
