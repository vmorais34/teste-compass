import React, { useContext } from 'react';

import Container from "../components/container";
import ReposContainer from "../components/reposContainer";

import { context } from '../context';

const Starred = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <ReposContainer name="" repos={ctx.userStarred} />
        </Container>
    );
}

export default Starred;