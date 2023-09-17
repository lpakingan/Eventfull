import styled from "styled-components";

export const StyledFeed = styled.div`

    .add-btn-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .post-container {
        border: 1px solid #eaeaea;
        margin-top: 10px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .post-btn-container {
        display: flex;
        align-self: flex-end;
    }

    .edit-btn {
        background: transparent;
        border: none;
        font-size: 30px;
        cursor: pointer;
    }

    .delete-btn {
        background: transparent;
        border: none;
        font-size: 30px;
        cursor: pointer;
    }
`;