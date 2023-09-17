import styled from 'styled-components';

export const StyledProfileEventList = styled.div`

    margin: 5px;
    padding-top: 10px;
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    justify-self: end;
    padding-bottom: 100px;

    span {
            color: ${({ theme }) => theme.colors.header};
        }
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.header};
    }

    .Card {
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 1;
        max-width: 100%;
        padding: 1rem;
        margin: 1rem;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 6px 3px rgba(0,0,0,.5);
    }

    .Card-header {
        gap: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: space-between;
        max-width:50%;

        img {
        border: 1px solid ${({ theme }) => theme.colors.header};
        max-width:100%;
        max-height:100%;
        }
    }

    .Card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 50%;
    }

    .btn-container {
        margin: 60px auto;
        display: flex;
        gap: 20px;
        width: 100%;
        justify-content: space-evenly;
    }

    .edit-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 40px;
        background: ${({ theme }) => theme.colors.header};
        border-radius: 50px;
        font-size: 22px;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
    }

    .remove-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 40px;
        background: ${({ theme }) => theme.colors.header};
        border-radius: 50px;
        font-size: 22px;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
    }

    .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 50px;
    }

    .modal-content {

        form {
            display: flex;
            flex-direction: column;

            select {
                width: 30%;
                height: 40px;
                font-size: 22px;
                border-radius: 5px;
                padding-left: 10px;
                border: 1px solid ${({ theme }) => theme.colors.header};
                font-weight: 700;
            }

            option {
                font-size: 22px;
                padding-left: 10px;
                border: 1px solid ${({ theme }) => theme.colors.header};
                font-weight: 700;
            }

            .update-btn {

                margin-top: 20px;
                display: flex;
                justify-self: center;
                align-self: center;
                width: 220px;
                height: 60px;
                background: ${({ theme }) => theme.colors.header};
                border-radius: 50px;
                font-size: 20px;
                font-weight: 700;
                color: #fff;
                cursor: pointer;
            }
        }
    }
`;
