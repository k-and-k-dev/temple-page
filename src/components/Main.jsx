import styled from "styled-components";
import mainImage from './../images/image19.png'
import { Information } from "./Information";
import { About } from "./About";
import { Access } from "./Access";
import { Contact } from "./Contact";

export const Main = () => {
    return (
        <SMain id="page-wrap">
            <SMainImage src={mainImage} />
            <Information />
            <About />
            <Access />
            <Contact />
        </SMain>
    );
};

const SMain = styled.main`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;

const SMainImage = styled.img`
    width: 100%;
`;