import styled from "styled-components";
import { Information } from "../components/templates/Information";
import { About } from "../components/templates/About";
import { Contact } from "../components/templates/Contact";
import { Access } from "../components/templates/Access";
import { LinkButton } from "../components/atoms/LinkButton";
import mainImage from "./../images/main.webp";

export const MainPage = () => {
    return (
        <SMain>
            <SMainImage src={mainImage} alt="mainImage" />
            <Information displayNum="3"></Information>
            <LinkButton page="/Information">もっと見る</LinkButton>
            <About></About>
            <LinkButton page="/About">もっと見る</LinkButton>
            <Access></Access>
            <Contact></Contact>
        </SMain>
    );
};

const SMain = styled.main`
    margin-top: 70px;
    text-align: center;
    @media screen and (max-width: 767px) {
    }
`;

const SMainImage = styled.img`
    width: 100%;
`;
