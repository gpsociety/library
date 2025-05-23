import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/Routes.jsx";
import "./i18n";
import './App.css'
import './styles/styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <AppRouter />
    </React.StrictMode>,
)
