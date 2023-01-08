import styled from "styled-components";

export const InformationBody = (props) => {
    const { children } = props;

    return <SBody>{children}</SBody>;
};

const SBody = styled.p``;
