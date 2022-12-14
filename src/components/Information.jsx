import styled from "styled-components";

export const Information = () => {
    return (
        <SMain id="information">
            <h1>お知らせ</h1>
            子供生まれました
        </SMain>
    );
};

const SMain = styled.div`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;