import styled from "styled-components";
import locationImage from './../images/image24.png'

export const Access = () => {
    return (
        <SMain id="access">
            <h1>アクセス</h1>
            <h2>所在地</h2>
                <p><SMainImage src={locationImage} /></p>
                <p>善福寺</p>
                <p>〒276-0015</p>
                <p>千葉県八千代市米本2077</p>
                <p>TEL: 080-9578-0392</p>
            <h2>画廊</h2>
            <p>工事中</p>
        </SMain>
    );
};

const SMain = styled.div`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;

const SMainImage = styled.img`
    width: 50%;
`;
