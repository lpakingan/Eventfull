import styled from "styled-components";

export const StyledSocial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    margin-left: 10px;

    h1 {
        flex-basis: 100%;
        width: 100%;
        text-align: center;
        color: ${({ theme }) => theme.colors.header};
    }
`;