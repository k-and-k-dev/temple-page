import styled from "styled-components";
import { InformationItem } from "../molecules/InformationItem";

export const InformationList = (props) => {
    const { itemList, displayNum } = props;

    return (
        <SItemList>
            {itemList.slice(0, displayNum).map((item, index) => (
                <InformationItem
                    date={item.date}
                    title={item.title}
                    body={item.body}
                    key={index}
                ></InformationItem>
            ))}
        </SItemList>
    );
};

const SItemList = styled.div`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;
