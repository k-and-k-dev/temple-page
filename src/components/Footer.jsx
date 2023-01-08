import styled from "styled-components";
import { Link } from "react-router-dom";
import { SNav, SNavUl, SNavLi, scrollToTop } from "./Header";

export const Footer = () => {
    const menuBtnToggle = () => {
        scrollToTop();
    };

    return (
        <SFooter>
            <SMenu>
                <SNav>
                    <SNavUl>
                        <SNavLi>
                            <Link to="/" onClick={menuBtnToggle}>
                                ホーム
                            </Link>
                        </SNavLi>
                        <SNavLi>
                            <Link to="/information" onClick={menuBtnToggle}>
                                お知らせ
                            </Link>
                        </SNavLi>
                        <SNavLi>
                            <Link to="/about" onClick={menuBtnToggle}>
                                当山について
                            </Link>
                        </SNavLi>
                        <SNavLi>
                            <Link to="/contact" onClick={menuBtnToggle}>
                                お問い合わせ
                            </Link>
                        </SNavLi>
                    </SNavUl>
                </SNav>
            </SMenu>
            <SCopy>
                <small>&copy;善福寺 All Rights Reserved.</small>
            </SCopy>
        </SFooter>
    );
};

const SFooter = styled.footer`
    color: #ffffff;
    background-color: #1b813e;
    padding-top: 30px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

const SMenu = styled.div``;

const SCopy = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-top: 90px;
    @media screen and (max-width: 767px) {
        margin-top: 50px;
    }
`;
