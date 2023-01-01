import styled from "styled-components";

export const About = () => {
    return (
        <SMain>
            <h1>善福寺について</h1>
            <SSection>
                <h2>歴史</h2>
                <p>工事中</p>
            </SSection>
            <SSection>
                <h2>境内</h2>
                <p>工事中</p>
            </SSection>
        </SMain>
    );
};

const SMain = styled.article`
    width: 100%;
    margin-top: 130px;
    text-align: center;
`;

const SSection = styled.section`
    margin: 20px;
`