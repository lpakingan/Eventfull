import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.header};
    padding: 20px;
    font-size: 1.5em;

    h1 {
        flex: 1;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    flex: 2;
    padding: 20px;
    font-size: 1em;
`;
