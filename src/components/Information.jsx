import styled from "styled-components";
import { InformationList } from "./InformationList";
import { Spacer } from "./Spacer";
import { Title } from "./Title";

export const Information = (props) => {
    const { marginTop, displayNum } = props;

    const itemList = [
        { date: "2022.12.25", title: "令和5年修正会開催について", body: "aaa" },
        { date: "2022.10.01", title: "本堂修繕工事開始のご案内", body: "bbb" },
        { date: "2022.09.05", title: "令和4年秋彼岸について", body: "ccc" },
        { date: "2022.08.01", title: "令和4年施餓鬼会中止のお知らせ", body: "ddd" }
    ]

    return (
        <>
            <Spacer size={marginTop}></Spacer>
            <SInformation>
                <Title>お知らせ</Title>
                <InformationList itemList={itemList} displayNum={displayNum}></InformationList>
            </SInformation>
        </>
    );
};

const SInformation = styled.section`
    margin-top: 60px;
    font-family: 'Zen Old Mincho', serif;
`;
