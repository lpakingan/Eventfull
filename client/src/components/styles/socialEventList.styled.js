import styled from 'styled-components';

export const StyledSocialEventList = styled.div`

    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom:100px;
    


    .Card {
        padding-top: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: start;
        box-shadow: 2px 2px 6px 3px rgba(0,0,0,.5);
        padding-left: 10px;
        padding-right: 10px;
        flex: 0 1 350px;

        .view-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
            margin-bottom: 10px;
            gap: 10px;

            p {
                font-size: 18px;
                font-weight: 700;
                span {
                    color: ${({ theme }) => theme.colors.header};
                    text-decoration-line: underline;
                }
            }

            .add-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
                width: 160px;
                height: 50px;
                background: ${({ theme }) => theme.colors.header};
                border-radius: 50px;
                font-size: 16px;
                font-weight: 700;
                color: #fff;
                cursor: pointer;
                margin-top: 10px;
                margin-bottom: 10px;
            }

            textarea {
                margin: 10px;
                padding: 10px;
                min-width: 300px;
                min-height: 200px;
                border: 1px solid ${({ theme }) => theme.colors.header};
                font-size: 20px;
                font-weight: 700;
            }
        }

        .error-message {
                margin-top: 5px;
                margin-bottom: 5px;
                font-size: 18px;
                font-weight: 700;
            }

        .Card-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .Card-body {
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            span {
                color: ${({ theme }) => theme.colors.header};
            }

            img {
            margin-top: 20px;
            border: 1px solid ${({ theme }) => theme.colors.header};
            max-width: 200px;
            max-height:200px;
            }

            h1 {
                max-height: 50%;
            }

            p {
                margin-top: 5px;
                font-size: 18px;
                font-weight: 700;
            }

        }
    }

    .view-container {

        .login-message {
            color: ${({ theme }) => theme.colors.header};
        }
        
        a {
            text-decoration: none;
        }
    }

    .post-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .feed-card {
        display: flex;
        flex-direction: column;
        align-items: start;

        button {
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
                width: 160px;
                height: 50px;
                background: ${({ theme }) => theme.colors.header};
                border-radius: 50px;
                font-size: 16px;
                font-weight: 700;
                color: #fff;
                cursor: pointer;
                margin-top: 10px;
                margin-bottom: 10px;
            }

            .error-message {
                font-size: 18px;
                font-weight: 700;
                span {
                    color: ${({ theme }) => theme.colors.header};
                    text-decoration-line: underline;
                }
            }
    }
`;