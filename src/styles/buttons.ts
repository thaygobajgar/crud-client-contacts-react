import styled, { css } from "styled-components";
import BaseButton from "../components/buttons";

export const StyledButton = styled(BaseButton)`
  /* font-family: ; */
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
  border: 1px solid blue;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  transition: 0.5s ease;
  &&:hover {
    filter: brightness(1.5);
    box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
  }

  /* CRIAR O BUTTONSTYLE PARA PADRAO DE CORES */

  ${({ buttonStyle, theme }) => {
    switch (buttonStyle) {
      case "default":
        return css`
          background-color: ${theme.colors.black};
        `;
      case "outline":
        return css`
          background-color: transparent;
        `;
      case "inverse":
        return css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
        `;
      default:
        return css`
          background-color: ${theme.colors.translucid};
        `;
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "big":
        return css`
          width: 300px;
          height: 150px;
          padding: 0 2rem;
        `;
      case "default":
        return css`
          width: 150px;
          height: 100px;
          padding: 0 2rem;
        `;
      case "small":
        return css`
          width: 50px;
          height: 50px;
          padding: 0 2rem;
        `;
      default:
        return css`
          padding: 0 2rem;
        `;
    }
  }}
`;
