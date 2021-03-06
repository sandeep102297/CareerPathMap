import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import * as serviceWorker from "./serviceWorker";
import AuthProvider from './auth/context'
ReactDOM.render(
    <BrowserRouter>
    <AuthProvider>
            <App />
    </AuthProvider>
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();