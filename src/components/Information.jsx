import styled from "styled-components";

export const Information = () => {
    return (
        <SMain>
            <h1>お知らせ</h1>
            <SParagraph>子供生まれました</SParagraph>
        </SMain>
    );
};

const SMain = styled.article`
    width: 100%;
    margin-top: 130px;
    text-align: center;
`;

const SParagraph = styled.p`
    margin: 10px;
`