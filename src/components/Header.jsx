import styled from "styled-components";
import { Link } from "react-router-dom"
import { Menu } from "./Menu"
import logoImage from './../images/image1.png'

export const Header = () => {
    return (
        <SHeader>
            <SLogo>
                <Link to="/temple-page"><img src={logoImage} alt="logoImage" /></Link>
            </SLogo>
            <SMenu width={ "100%" } />
        </SHeader>
    );
};

const SHeader = styled.header`
    background: white;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
`;

const SLogo = styled.div`
    text-align: left;
    margin: 5px;
`;

const SMenu = styled(Menu)`
    margin: 0 0 0 auto;
`;