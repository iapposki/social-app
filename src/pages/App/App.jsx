import React from 'react';
import {Container} from 'react-bootstrap';
import Routes from './Routing';

// in writing code in class style, we returned whatever we needed to display in render. In functional style like below, we do the same thing using just return and putting everything we need to display in return.
const App = () => {
    console.log('hello')
    return(
        <Routes />
    )
};


export default App;