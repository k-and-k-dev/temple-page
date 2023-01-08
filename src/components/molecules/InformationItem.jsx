import styled from "styled-components";
import { InformationDate } from "../atoms/information/InformationDate";
import { InformationHr } from "../atoms/information/InformationHr";
import { InformationTitle } from "../atoms/information/InformationTitle";
import { InformationBody } from "../atoms/information/InformationBody";

export const InformationItem = (props) => {
    const { date, title, body } = props;

    return (
        <SItem>
            <InformationDate>{date}</InformationDate>
            <InformationHr />
            <InformationTitle>{title}</InformationTitle>
            <InformationBody>{body}</InformationBody>
        </SItem>
    );
};

const SItem = styled.div`
    text-align: left;
    border-radius: 5px;
    background-color: #dbf0d0;
    margin-bottom: 10px;
    padding: 15px;
    color: #2c2c2c;
`;
