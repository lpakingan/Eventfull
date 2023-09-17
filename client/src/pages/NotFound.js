import { StyledNotFound } from "../components/styles/notFound.styled";
import { Icon } from '@iconify/react';

const NotFound = () => {
    return (
        <StyledNotFound>
            <span><Icon icon="fluent-mdl2:sad" color="#ff424e" /></span>
            <h1>404</h1>
            <p>Sorry, the page you are looking for does not exist or an error has occurred.</p>
             <a href="/">Return Here</a>
        </StyledNotFound>
    );
}

export default NotFound;
