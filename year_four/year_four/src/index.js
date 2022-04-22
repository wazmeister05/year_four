import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from "react-router-dom";
import Main from './Javascript/Main';

ReactDOM.render(
    <HashRouter>
        <Main/>
    </HashRouter>,
    document.getElementById('root')
);
