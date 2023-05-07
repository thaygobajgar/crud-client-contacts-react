import styled, { css } from "styled-components";
import BaseTypography from "../components/typography";

export const StyledTitle = styled(BaseTypography)`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  opacity: ${({ opacity }) => (opacity ? opacity / 100 : 1)};
  color: ${({ color }) => (color ? `var(${color})` : "var(--grey-0)")};
  font-size: ${({ fontSize, tag }) =>
    fontSize
      ? fontSize
      : tag
      ? tag === "h1"
        ? 44
        : tag === "h2"
        ? 36
        : tag === "h3"
        ? 32
        : tag === "h4"
        ? 28
        : tag === "h5"
        ? 24
        : tag === "h6"
        ? 20
        : tag === "h7"
        ? 16
        : 16
      : 16}px;
  line-height: ${({ fontSize, tag }) =>
    fontSize
      ? fontSize
      : tag
      ? tag === "h1"
        ? 56
        : tag === "h2"
        ? 45
        : tag === "h3"
        ? 40
        : tag === "h4"
        ? 35
        : tag === "h5"
        ? 30
        : tag === "h6"
        ? 25
        : tag === "h7"
        ? 20
        : 20
      : 20}px;
`;

export const StyledText = styled(BaseTypography)`
  color: ${({ color }) => (color ? `var(${color})` : "var(--grey-0)")};
  font-weight: 400;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
  line-height: ${({ fontSize }) =>
    fontSize ? +fontSize + +fontSize / 2 : 20}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  opacity: ${({ opacity }) => (opacity ? opacity / 100 : 1)};

  ${({ tag }) => {
    if (tag === "label") {
      return css`
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
      `;
    }
  }}
`;
