import styled from "styled-components";
import { Information } from "../components/Information";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Access } from "../components/Access";
import mainImage from './../images/image19.png'

export const MainPage = () => {
    return (
        <SMain>
            <SMainImage src={mainImage} alt="mainImage" />
            <Information></Information>
            <About></About>
            <Access></Access>
            <Contact></Contact>
        </SMain >
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
