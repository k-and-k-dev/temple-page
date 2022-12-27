import styled from "styled-components";
import { Link } from "react-router-dom"
import logoImage from './../images/image1.png'
import { SNav, SNavUl, SNavLi } from './Header'

export const Footer = () => {

    return (
        <SFooter>
            <SMenu>
                <SNav>
                    <SNavUl>
                        <SNavLi><Link to="/information">Information</Link></SNavLi>
                        <SNavLi><Link to="/about">About</Link></SNavLi>
                        <SNavLi><Link to="/access">Access</Link></SNavLi>
                        <SNavLi><Link to="/contact">Contact</Link></SNavLi>
                    </SNavUl>
                </SNav>
            </SMenu>
            <SLogo>
                <Link to="/"><img src={logoImage} alt="logo" /></Link>
            </SLogo>
            <STell>
                TEL 080-9578-0392
            </STell>
            <SCopy>
                <small>&copy;善福寺 All Rights Reserved.</small>
            </SCopy>
        </SFooter>
    );
};

const SFooter = styled.footer`
    color: #ffffff;
    background-color: #24211b;
    padding-top: 30px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const SMenu = styled.div`
`

const SLogo = styled.p`
    display: block;
    width: 235px;
    margin-top: 90px;
    @media screen and (max-width: 767px) {
        margin-top: 60px;
    }
`;

const STell = styled.p`
    font-size: 26px;
    font-weight: bold;
    margin-top: 28px;
    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`

const SCopy = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-top: 90px;
    @media screen and (max-width: 767px) {
        margin-top: 50px;
    }
`