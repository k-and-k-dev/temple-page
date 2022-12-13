import styled from "styled-components";
import locationImage from './../images/image24.png'

export const Location = () => {
    return (
        <SMain id="location">
            所在地<br /><br />
            <SMainImage src={locationImage} /><br />
            善福寺<br />
            〒276-0015<br />
            千葉県八千代市米本2077<br />
            TEL: 080-9578-0392
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