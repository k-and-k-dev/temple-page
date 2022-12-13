import { getQueriesForElement } from "@testing-library/react";
import { useState } from "react";
import { slide as Menu } from 'react-burger-menu'
import logoImage from './../images/image1.png'

export const Header = () => {

    const headerStyle = {
        background: "white",
        width: "100%",
        height: "100px",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
        display: "flex"
    };

    const logoStyle = {
        margin: "auto"
    };

    return (
        <header id="header" style={headerStyle}>
            <div className="logo" style={logoStyle}>
                <a href="#"><img src={logoImage} /></a>
            </div>
        </header>
    );
};