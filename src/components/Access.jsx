import styled from "styled-components";
import locationImage from './../images/image24.png'

export const Access = () => {
    return (
        <SMain>
            <h1>アクセス</h1>
            <SSection>
            <h2>所在地</h2>
            <SParagraph><SMainImage src={locationImage} /></SParagraph>
            <SParagraph>善福寺</SParagraph>
            <SParagraph>〒276-0015</SParagraph>
            <SParagraph>千葉県八千代市米本2077</SParagraph>
            <SParagraph>TEL: 080-9578-0392</SParagraph>
            </SSection>
            <SSection>
            <h2>画廊</h2>
            <SParagraph>工事中</SParagraph>
            </SSection>
        </SMain>
    );
};

const SMain = styled.article`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;

const SSection = styled.section`
    margin: 20px;
`

const SParagraph = styled.p`
    margin: 10px;
`

const SMainImage = styled.img`
    width: 50%;
`;
