import styled from "styled-components";
import mainImage from './../images/image19.png'
import { Information } from "./Information";
import { About } from "./About";
import { Access } from "./Access";
import { Contact } from "./Contact";

export const Main = () => {
    return (
        <SMain>
            <SMainImage src={mainImage} alt="mainImage" />
            <Information></Information>
            <About></About>
            <Access></Access>
            <Contact></Contact>
        </SMain>
    );
};

const SMain = styled.main`
    width: 100%;
    margin-top: 70px;
    text-align: center;
    @media screen and (max-width: 767px) {
    }
`;

const SMainImage = styled.img`
    width: 100%;
    // height: 70vh;
`;
