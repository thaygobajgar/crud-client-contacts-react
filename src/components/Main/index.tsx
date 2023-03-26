import React from "react";
import { StyledMain } from "./styles";
interface iMainProps {
  children: React.ReactNode;
}

const Main = ({ children }: iMainProps) => {
  return <StyledMain className="container">{children}</StyledMain>;
};

export default Main;
