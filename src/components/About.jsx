import styled from "styled-components";

export const About = () => {
    return (
        <SMain id="about">
            <h1>善福寺について</h1>
            <h2>歴史</h2>
            <p>工事中</p>
            <h2>境内</h2>
            <p>工事中</p>
        </SMain>
    );
};

const SMain = styled.div`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;