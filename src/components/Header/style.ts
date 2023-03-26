import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.green};
  position: fixed;
  height: 50px;
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .userMenu {
    display: flex;
    align-items: center;
    gap: 1rem;

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
  height: 60px;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  input {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    background-color: transparent;
    max-width: 300px;
    border-radius: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.translucid};
    }
  }
`;
