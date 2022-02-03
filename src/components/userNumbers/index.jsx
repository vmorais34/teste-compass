import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Container,
    NumberContainer
} from "./styles";

const UserNumbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick('/repos')}>
                <h1>{props?.repos}</h1>
                <h2>Repositórios</h2>
            </NumberContainer>

            <NumberContainer onClick={() => handleOnClick('/starred')}>
                <h1>{props?.starred_url}</h1>
                <h2>Repositóriso com estrela</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>{props?.following}</h1>
                <h2>Seguindo</h2>
            </NumberContainer>
        </Container>
    );
}

export default UserNumbers;