import styled from "styled-components";
import mainImage from './../images/image19.png'
import { Information } from "./Information";
import { Location } from "./Location";
import { Contact } from "./Contact";

export const Main = () => {
    return (
        <SMain id="main">
            <SMainImage src={mainImage} />
            <Information />
            <Location />
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