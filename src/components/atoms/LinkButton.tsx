import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scrollToTop } from "../Header";
import { BaseButton } from "./BaseButton";

type Props = {
    page: string;
    children: React.ReactNode;
};

export const LinkButton = ({ page, children }: Props) => {
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
