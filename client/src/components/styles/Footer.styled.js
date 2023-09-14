import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`;

export const StyledList = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const StyledListItem = styled.li`
    margin: 0 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: none; /* Set the default link color to black */
    
    &.active {
        color: black; /* Set the active link color to white */
        font-weight: bold;
    }
`;
