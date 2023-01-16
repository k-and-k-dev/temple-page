import styled from "styled-components";
import { Spacer } from "../atoms/Spacer";
import { Title } from "../atoms/Title";
import { InformationList } from "../organisms/InformationList";

export const Information = (props) => {
    const { marginTop, displayNum } = props;

    const itemList = [
        {
            title: "2023.1.1 ホームページを作成しました",
            body: `この度、当山のホームページを作成しました。\r\n寺院のお知らせなどを掲載していきます。\r\n引き続きよろしくお願いいたします。`,
        },
    ];

    return (
        <>
            <Spacer size={marginTop}></Spacer>
            <SInformation>
                <Title>お知らせ</Title>
                <InformationList
                    itemList={itemList}
                    displayNum={displayNum}
                ></InformationList>
            </SInformation>
        </>
    );
};

const SInformation = styled.section`
    margin-top: 60px;
    font-family: "Zen Old Mincho", serif;
`;
