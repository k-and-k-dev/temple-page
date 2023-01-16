import styled from "styled-components";

export const InformationTitle = (props) => {
    const { children } = props;

    return <STitle>{children}</STitle>;
};

const STitle = styled.p`
    line-height: 1.8em;
`;
