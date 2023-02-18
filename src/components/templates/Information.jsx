import styled from "styled-components";
import { Spacer } from "../atoms/Spacer";
import { Title } from "../atoms/Title";
import { InformationList } from "../organisms/InformationList";

export const Information = (props) => {
    const { marginTop, displayNum } = props;

    const itemList = [
        {
            title: "2023.2.18 令和5年春季彼岸会のお知らせ",
            body: `下記の通り春季彼岸会を執り行います。
ご回向・お塔婆をご希望の方は、お電話、FAX、WEBお問い合わせ等にてお申し込み下さい。
【日時】3月21日(火) 13:00～14:00
【場所】善福寺本堂
【内容】13:00より法要、13:45より法話を行います`,
        },
        {
            title: "2023.1.1 ホームページを作成しました",
            body: `この度、当山のホームページを作成しました。寺院のお知らせなどを掲載していきます。引き続きよろしくお願いいたします。`,
        },
    ];

    return (
        <>
            <Spacer size={marginTop} />
            <SInformation>
                <Title>お知らせ</Title>
                <InformationList itemList={itemList} displayNum={displayNum} />
            </SInformation>
        </>
    );
};

const SInformation = styled.section`
    margin-top: 60px;
    font-family: "Zen Old Mincho", serif;
`;
