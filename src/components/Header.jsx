import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import logoImage from './../images/image11.png'
import MenuIconImage from './../images/icon-menu.png'

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto",
    });
};

export const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const logoBtnToggle = () => {
        scrollToTop();
    }

    const menuBtnToggle = () => {
        setMenuActive(!menuActive);
        scrollToTop();
    }

    return (
        <SHeader>
            <SHeaderInner>
                <SLogoContainer>
                    <SLogoImage>
                        <Link to="/" onClick={logoBtnToggle}><img src={logoImage} alt="logo" /></Link>
                    </SLogoImage>
                    <SLogoTextDenomination>浄土宗</SLogoTextDenomination>
                    <SLogoTextTemple>善福寺</SLogoTextTemple>
                </SLogoContainer>
                <SButton onClick={menuBtnToggle}></SButton>
                {menuActive ?
                    <SMenuActive>
                        <SNav>
                            <SNavUl>
                                <SNavLi><Link to="/" onClick={menuBtnToggle}>ホーム</Link></SNavLi>
                                <SNavLi><Link to="/information" onClick={menuBtnToggle}>お知らせ</Link></SNavLi>
                                <SNavLi><Link to="/about" onClick={menuBtnToggle}>当山について</Link></SNavLi>
                                <SNavLi><Link to="/contact" onClick={menuBtnToggle}>お問い合わせ</Link></SNavLi>
                            </SNavUl>
                        </SNav>
                    </SMenuActive>
                    :
                    <SMenu>
                        <SNav>
                            <SNavUl>
                                <SNavLi><Link to="/">ホーム</Link></SNavLi>
                                <SNavLi><Link to="/information">お知らせ</Link></SNavLi>
                                <SNavLi><Link to="/about">当山について</Link></SNavLi>
                                <SNavLi><Link to="/contact">お問い合わせ</Link></SNavLi>
                            </SNavUl>
                        </SNav>
                    </SMenu>
                }
            </SHeaderInner>
        </SHeader>
    );
};

const SHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    height: 70px;
    z-index: 10;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 767px) {
    }
`;

const SHeaderInner = styled.div`
    max-width: 930px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 767px) {
        padding-left: 20px;
        padding-right: 20px;
        position: relative;
    }
`

const SLogoContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
    }
`

const SLogoImage = styled.p`
    display: block;
    width: 50px;
    height: 50px;
    margin: 10px;
    @media screen and (max-width: 767px) {
    }
`;

const SLogoTextDenomination = styled.p`
    font-family: 'Yuji Boku', serif;
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #2c2c2c;
`

const SLogoTextTemple = styled.p`
    font-family: 'Yuji Boku', serif;
    font-size: 40px;
    letter-spacing: 0.3em;
    color: #2c2c2c;
    margin-left: 10px;
`

const SButton = styled.button`
    display: none;
    @media screen and (max-width: 767px) {
        display: block;
        width: 44px;
        height: 34px;
        background-image: url(${MenuIconImage});
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        border-radius: 0;
        outline: none;
    }
`

const SMenu = styled.div`
    @media screen and (max-width: 767px) {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        color: #ffffff;
        background-color: #1b813e;
        padding-top: 30px;
        padding-bottom: 50px;
    }
`

const SMenuActive = styled(SMenu)`
    @media screen and (max-width: 767px) {
        display: block;
    }
`

export const SNav = styled.nav`
`

export const SNavUl = styled.ul`
    display: flex;
    @media screen and (max-width: 767px) {
        display: block;
        text-align: center;
    }
`

export const SNavLi = styled.li`
    margin-left: 20px;
    margin-right: 20px;
    @media screen and (max-width: 767px) {
        margin-top: 20px;
    }
`