import styled from "styled-components";

export const StyledExploreSearchBar = styled.div`

margin: 10px;

.event-search {
    display: flex;
    background: #eaeaea;
    border-radius: 60px;
    max-width: 500px;
}

.search-input {
        border-radius: 60px;
        background: #eaeaea;
        outline: none;
        border: none;
        font-size: 20px;
        padding-left: 20px;
        width: 480px;
        height: 40px;
}

.search-btn {
    display: flex;
    align-items: center;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    background: #eaeaea;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.header};
    cursor: pointer;
    border-style: none;
}

.search-btn:hover {
    background: ${({ theme }) => theme.colors.header};
}
`;