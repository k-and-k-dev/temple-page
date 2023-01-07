import styled from "styled-components";

export const Title = (props) => {
    return (
        <STitle>{props.children}</STitle>
    );
};

const STitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .17em;
    line-height: 1.8;
    color: #2c2c2c;
`