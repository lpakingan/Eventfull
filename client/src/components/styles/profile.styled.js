import styled from "styled-components";

export const StyledProfile = styled.div`
    display: flex;
    flex-wrap: wrap;
    

    h1 {
        flex-basis: 100%;
        width: 100%;
        text-align: center;
        color: ${({ theme }) => theme.colors.header};
    }
`;

export const StyledProfileInfo = styled.div`
    margin: 5px auto;
    border-radius: 5px;

    .profile-image {
        display: flex;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .profile-body {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
        font-size: 18px;
        font-weight: 600;
        }

        span {
            color: ${({ theme }) => theme.colors.header};
        }

    }

    .profile-bio {
        max-width: 30%;
    }

`;



export const StyledProfileEventContainer = styled.div`
    align-items: center;
    margin: 0 auto;
    max-width: 70%;
`;


