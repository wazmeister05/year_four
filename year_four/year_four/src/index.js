import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Main from './Javascript/Main';
//import * as serviceWorker from "./Javascript/serviceWorker";

ReactDOM.render(
    //<React.StrictMode>
    <BrowserRouter>
        <Main/>
    </BrowserRouter>,
    //</React.StrictMode>,
    document.getElementById('root')
);
//serviceWorker.unregister();