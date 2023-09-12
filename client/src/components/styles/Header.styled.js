import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center; /* Center vertically */
    background-color: ${({ theme }) => theme.colors.header};
    padding: 20px;
    font-size: 1.5em;
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

