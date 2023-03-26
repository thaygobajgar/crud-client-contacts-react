import React from "react";
interface iContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: iContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
