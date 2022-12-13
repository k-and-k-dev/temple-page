import styled from "styled-components";

export const Information = () => {
    return (
        <SMain id="information">
            お知らせ<br /><br />
            子供生まれました
        </SMain>
    );
};

const SMain = styled.div`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;