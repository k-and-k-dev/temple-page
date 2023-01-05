import styled from "styled-components";
import mainImage from './../images/image19.png'
import { Spacer } from "./Spacer";

export const About = (props) => {
    const { marginTop } = props;
    return (
        <>
            <Spacer size={marginTop}></Spacer>
            <SAbout>
                <SAboutTitle>当山について</SAboutTitle>
                <SAboutImage src={mainImage} alt="aboutImage"></SAboutImage>
                <SAboutContent>当山は、千葉県八千代市米本にある浄土宗の寺院です。<br />正式名称は、光明山攝取院善福寺です。<br />最譽貞庵上人を開基開山として、安土桃山時代である天正18年（1590年）に創建されました。</SAboutContent>
            </SAbout>
        </>
    );
};

const SAbout = styled.section`
    margin-top: 60px;
    font-family: 'Zen Old Mincho', serif;
`

const SAboutTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .17em;
    line-height: 1.8;
    color: #2c2c2c;
`

const SAboutImage = styled.img`
    display: block;
    width: 90%;
    height: 800px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px) {
        height: 240px;
    }
`

const SAboutContent = styled.p`
    width: 90%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
    color: #2c2c2c;
    text-align: center;
`
