import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";


export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer/>
        </>
    );
};
