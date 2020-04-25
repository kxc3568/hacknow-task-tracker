import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Security from './components/Authentication/Security';

const App = () => {
    return ( <BrowserRouter>
            <Security />
        </BrowserRouter> );
}

export default App;
