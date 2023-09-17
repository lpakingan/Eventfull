import styled from 'styled-components';

export const StyledNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:;
    margin-top: 200px;

    h1 {
        color: ${({ theme }) => theme.colors.header};
        display: flex;
        font-size: 80px;
    }

    span {
        font-size: 200px;
        display: flex;
        flex-shrink: 2;
    }

    h2 {
        color: ${({ theme }) => theme.colors.header};
    }

    p {
        font-size: 24px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.header};
        font-size: 24px;
        font-weight: 700;
    }


`;
