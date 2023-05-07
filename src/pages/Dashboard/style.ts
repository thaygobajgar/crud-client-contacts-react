import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: 1.6rem;
  .contacts {
    min-height: 480px;
    border-radius: 12px;
    border: 2px solid var(--brand-1);
    min-width: 70%;
    max-width: 90%;
  }
`;
