import styled from "styled-components";
import { Spacer } from "../atoms/Spacer";
import { Title } from "../atoms/Title";
import { InformationList } from "../organisms/InformationList";

export const Information = (props) => {
    const { marginTop, displayNum } = props;

    const itemList = [
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
