import styled from "styled-components";
import { InformationTitle } from "../atoms/information/InformationTitle";
import { InformationHr } from "../atoms/information/InformationHr";
import { InformationBody } from "../atoms/information/InformationBody";
import { useState } from "react";

export const InformationItem = (props) => {
    const { title, body } = props;

    const [isShowBody, setIsShowBody] = useState(false);

    const handleClick = () => {
        setIsShowBody(!isShowBody);
    };

    return (
        <SItem onClick={handleClick} draggable="true">
            <InformationTitle>{title}</InformationTitle>
            <InformationHr />
            {/* アコーディオンいったんオフ */}
            {/* {isShowBody ? (
                <SBody>
                    <InformationBody>{body}</InformationBody>
                </SBody>
            ) : (
                <></>
            )} */}
            <SBody>
                <InformationBody>{body}</InformationBody>
            </SBody>
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

const SBody = styled.div`
    margin-top: 10px;
    transition: height 0.2s linear, opacity 0.2s ease-in;
    white-space: pre-wrap;
    text-align: left;
    /* overflow: hidden; */
`;
