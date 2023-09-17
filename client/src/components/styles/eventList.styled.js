import styled from 'styled-components';

export const StyledEventList = styled.div`

    margin: 5px;
    max-width: 60%;

.Card {
    img {
    max-height: 500px;
    max-width: 50%;
    flex: 1 1 auto;
    border: 1px solid #2e2e2e;
    }
    
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    gap: 20px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 2px 2px 6px 3px rgba(0,0,0,.5);
}

.Card-body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 1 auto;

    p {
        font-size: 18px;
        font-weight: 700;
    }
}

.add-container {
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 60px;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 50px;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
}

.add-container {
    display: flex;
    gap: 20px;
    
    a {
        text-decoration: none;
    }
}

.success-message {
    display: flex;
    width: 100%;
    margin: 20px auto;
    font-size: 18px;
    font-weight: 700;
}
`;