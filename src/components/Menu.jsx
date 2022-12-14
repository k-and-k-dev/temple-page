import React, { useState } from "react"
import { Link } from "react-router-dom"
import { slide as Slide } from "react-burger-menu"

export const Menu = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <Slide right
         isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}
        //  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
         {...props}>
            <Link to="/temple-page" onClick={closeMenu} className="menu-item">
                トップページ
            </Link>
            <Link to="/temple-page/information" onClick={closeMenu} className="menu-item">
                お知らせ
            </Link>
            <Link to="/temple-page/about" onClick={closeMenu} className="menu-item">
                善福寺について
            </Link>
            <Link to="/temple-page/access" onClick={closeMenu} className="menu-item">
                アクセス
            </Link>
            <Link to="/temple-page/contact" onClick={closeMenu} className="menu-item">
                お問い合わせ
            </Link>
        </Slide>
    );
};
