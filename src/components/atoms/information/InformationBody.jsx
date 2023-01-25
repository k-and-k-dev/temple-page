import styled from "styled-components";

export const InformationBody = (props) => {
    const { children } = props;

    return <SBody>{children}</SBody>;
};

const SBody = styled.p`
    margin-top: 5px;
    font-size: 16px;
    line-height: 1.5;
`;
