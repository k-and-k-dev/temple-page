import styled from "styled-components";
import { Spacer } from "./Spacer";

export const Information = (props) => {
    const { marginTop } = props;
    return (
        <>
            <Spacer size={marginTop}></Spacer>
            <SInformation>
                <SInformationTitle>お知らせ</SInformationTitle>
                <SInformationList>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.12.25</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>令和5年修正会開催について</SInformationListItemContent>
                    </SInformationListItem>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.10.01</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>本堂修繕工事開始のご案内</SInformationListItemContent>
                    </SInformationListItem>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.09.05</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>令和4年秋彼岸について</SInformationListItemContent>
                    </SInformationListItem>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.08.01</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>令和4年施餓鬼会中止のお知らせ</SInformationListItemContent>
                    </SInformationListItem>
                </SInformationList>
                <SInformationButton>もっと見る</SInformationButton>
            </SInformation>
        </>
    );
};

const SInformation = styled.section`
    margin-top: 60px;
    font-family: 'Zen Old Mincho', serif;
`;

const SInformationTitle = styled.h1`
    height: 54px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .17em;
    line-height: 1.8;
    color: #2c2c2c;
`

const SInformationList = styled.ul`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`

const SInformationListItem = styled.li`
    text-align: left;
    border-radius: 5px;
    background-color: #dbf0d0;
    margin-bottom: 10px;
    padding: 15px;
    color: #2c2c2c;
`

const SInformationListItemDate = styled.p`
    font-size: 12px;
`

const SInformationListItemHr = styled.hr`
    margin-top: 5px;
`

const SInformationListItemContent = styled.p`
    margin-top: 5px;
    padding-top: 5px;
    line-height: 1.8em;
`
const SInformationButton = styled.button`
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Zen Old Mincho', serif;
    font-size: 20px;
    color: #fffffb;
    background-color: #1b813e;
    padding: 10px 20px;
    border: 0px;
`