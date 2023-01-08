import styled from "styled-components";
import { Link } from "react-router-dom";
import { scrollToTop } from "../Header";
import { BaseButton } from "./BaseButton";

export const LinkButton = (props) => {
    const { page, children } = props;

    const menuBtnToggle = () => {
        scrollToTop();
    };

    return (
        <SButton>
            <Link to={page} onClick={menuBtnToggle}>
                {children}
            </Link>
        </SButton>
    );
};

const SButton = styled(BaseButton)``;
