import styled from "styled-components";
import { AboutItem } from "../molecules/AboutItem";

export const AboutItemList = (props) => {
    const { itemList, displayNum } = props;

    return (
        <SItemList>
            {itemList.slice(0, displayNum).map((item, index) => (
                <AboutItem title={item.title} image={item.image} body={item.body} key={index} />
            ))}
        </SItemList>
    );
};

const SItemList = styled.div`
    margin-top: 30px;
`;
