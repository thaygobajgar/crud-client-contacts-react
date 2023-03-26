import styled, { css } from "styled-components";
import BaseTypography from "../components/typography";

export const StyledTitle = styled(BaseTypography)`
  /* font-size: 1rem; */
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  color: ${({ theme }) => theme.colors.black};
  &&.grey {
    color: #00000025; //alterar
  }

  &&.primary {
    color: #00ff; //alterar
  }

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: 44px;
          /* line-height? */
          //acrescentar
        `;

      case "two":
        return css`
          font-size: 36px;
          /* line-height? */
          //acrescentar
        `;

      case "three":
        return css`
          font-size: 32px;
          /* line-height? */
          //acrescentar
        `;
    }
  }}
`;

export const StyledText = styled(BaseTypography)`
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  color: var(--grey-4);
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
  line-height: ${({ fontSize }) =>
    fontSize ? +fontSize + +fontSize / 2 : 21}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};

  &&.italic {
    font-style: italic;
  }

  &&.grey {
    color: #00000025; //alterar
  }

  &&.primary {
    color: #00ff; //alterar
  }
`;
