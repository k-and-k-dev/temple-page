import styled from "styled-components";

export const InformationTitle = (props) => {
    const { children } = props;

    return <STitle>{children}</STitle>;
};

const STitle = styled.p`
    margin-top: 5px;
    padding-top: 5px;
    line-height: 1.8em;
`;
