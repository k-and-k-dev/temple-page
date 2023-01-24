import styled from "styled-components";

export const Title = (props) => {
    const { children } = props;

    return <STitle>{children}</STitle>;
};

const STitle = styled.h1`
    font-family: "Zen Old Mincho", serif;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.17em;
    line-height: 1.8;
    color: #2c2c2c;
`;
