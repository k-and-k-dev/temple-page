import styled from "styled-components";

export const InformationDate = (props) => {
    const { children } = props;

    return <SDate>{children}</SDate>;
};

const SDate = styled.p`
    font-size: 12px;
`;
