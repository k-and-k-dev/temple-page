import styled from "styled-components";

export const InformationItem = (props) => {

    const { date, title, body } = props;

    return (
        <SItem>
            <SDate>{date}</SDate>
            <SHr></SHr>
            <STitle>{title}</STitle>
            <SBody></SBody>
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
`

const SDate = styled.p`
    font-size: 12px;
`

const SHr = styled.hr`
    margin-top: 5px;
`

const STitle = styled.p`
    margin-top: 5px;
    padding-top: 5px;
    line-height: 1.8em;
`

const SBody = styled.p`
    
`