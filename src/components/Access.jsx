import styled from "styled-components";

export const Access = () => {
    return (
        <SMain>
            <h1>アクセス</h1>
            <SSection>
                <SMap>
                    <h2>所在地</h2>
                    <SMapIframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.46028154752884!2d140.11923203357935!3d35.75077893898744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022875e54a13eb3%3A0x85fe3b2e8814c895!2z5rWE5Zyf5a6XIOWWhOemj-Wvug!5e0!3m2!1sja!2sjp!4v1672043172770!5m2!1sja!2sjp" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></SMapIframe>
                    <SParagraph>善福寺</SParagraph>
                    <SParagraph>〒276-0015</SParagraph>
                    <SParagraph>千葉県八千代市米本2077</SParagraph>
                    <SParagraph>TEL: 080-9578-0392</SParagraph>
                </SMap>
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

const SMap = styled.div`
    width: 930px;
    max-width: 90%;
    margin-top: 75px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px) {
        width: 500px;
        margin-top: 45px;
    }
`

const SMapIframe = styled.iframe`
    border: 0;
    display: block;
    width: 100%;
    height: 320px;
    margin-top: 25px;
`
