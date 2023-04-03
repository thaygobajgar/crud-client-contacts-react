import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.brand1};
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;
    padding-bottom: 1rem;
  }

  .userMenu {
    display: flex;
    align-items: center;
    gap: 1rem;

    .logout {
      border: 1px solid ${({ theme }) => theme.colors.brand1};
      background: ${({ theme }) => theme.colors.alert2};
      padding: 0.3rem;
      border-radius: 12px;
      color: ${({ theme }) => theme.colors.translucid};
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.alert};
      }
    }
    img {
      border-radius: 50px;
      border: 1px solid ${({ theme }) => theme.colors.translucid};
      width: 50px;
      height: 50px;
      object-fit: cover;

      font-size: 8px;
    }
  }

  @media (max-width: 600px) {
    .container {
      flex-direction: column-reverse;
    }
    .userMenu {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const StyledHeaderForm = styled.form`
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  gap: 6px;
  input {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    background-color: transparent;
    max-width: 300px;
    border-radius: 10px;
    height: 32px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.translucid};
    }
  }
`;
