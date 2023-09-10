import styled from "styled-components";

export const StyledSocialFeed = styled.div`
    display: flex;
    flex-wrap: wrap;

    h1 {
        flex-basis: 100%;
        width: 100%;
        text-align: center;
        color: ${({ theme }) => theme.colors.header};
    }
`;