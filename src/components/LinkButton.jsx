import { Link } from "react-router-dom";
import styled from "styled-components";
import { scrollToTop } from "./Header";

export const LinkButton = (props) => {

    const { page } = props;

    const menuBtnToggle = () => {
        scrollToTop();
    };

    return (
        <SButton>
            <Link to={page} onClick={menuBtnToggle}>{props.children}</Link>
        </SButton>
    );
};

const SButton = styled.button`
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
