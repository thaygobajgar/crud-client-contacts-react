import styled from "styled-components";

export const StyledDashboard = styled.div`
  .contacts {
    min-height: 480px;
    border-radius: 12px;
    border: 2px solid ${({ theme }) => theme.colors.brand1};
    min-width: 320px;
  }
`;
