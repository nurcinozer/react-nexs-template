import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Navbar,
    Header,
    Product,
    Details,
    Content,
    Buttons,
    Footer
} from './components';
import './dist/styles/main.scss';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Header />
            <Product />
            <Details />
            <Content />
            <Buttons />
            <Footer />
        </Router>
    )
}

export default App
