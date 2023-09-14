import styled from 'styled-components';

export const StyledEventList = styled.div`

    margin: 5px;
    padding-top: 10px;

.Card {
    img {
    margin-top: 30px;
    margin-bottom: 50px;
    width: fit-content;
    border: 1px solid #2e2e2e;
    }
    
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 2px 2px 6px 3px rgba(0,0,0,.5);
}

.Card-body {
    padding: 1rem;
}

.add-container {
    margin: 60px auto;
}

.add-btn {
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
`;