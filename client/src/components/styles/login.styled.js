import styled from "styled-components";

export const StyledLogin = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 50px;
    padding-bottom: 30px;
    width: 600px;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-top: 30px;
    color: ${({ theme }) => theme.colors.header};
  }

  .text {
    font-size: 48px;
    font-weight: 700;
  }
  .error-message {
    color: red;
    background: #ffe6e6;
    border: 1px solid red;
    padding: 10px;
    width: 76%;
    margin-bottom: 10px;
  }
  .underline {
    width: 61px;
    height: 5px;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .input {
    display: flex;
    align-items: center;
    margin: auto;
    width: 480px;
    height: 80px;
    background: #eaeaea;
    border-radius: 6px;
  }

  .input img {
    margin: 0 30px;
  }

  .input input {
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 20px;
  }

  .signup-here {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: #797979;
    font-size: 18px;
  }

  .signup-here span {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.header};
    cursor: pointer;
  }

  .submit-container {
    margin: 60px auto;
  }

  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 60px;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 50px;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
