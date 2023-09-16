import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center; /* Center vertically */
    background-color: ${({ theme }) => theme.colors.header};
    padding: 20px;
    font-size: 1.5em;

    .nav-right {
        min-width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: black;
        }
    }
`;

export const StyledLogo = styled.img`
    width: 200px;
    height: auto;
`;

export const StyledProfileIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 20px; /* Adjust the margin as needed */
`;


