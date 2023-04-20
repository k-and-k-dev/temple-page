import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationList = (props) => {
    const { navList, callback } = props;
    return (
        <SNav>
            <ul>
                {navList.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link} target={item.target} onClick={callback}>
                            {item.body}
                        </Link>
                    </li>
                ))}
            </ul>
        </SNav>
    );
};

const SNav = styled.nav`
    ul {
        display: flex;
        @media screen and (max-width: 767px) {
            display: block;
            text-align: center;
        }
    }
    li {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: auto;
        margin-bottom: auto;
        @media screen and (max-width: 767px) {
            margin-top: 20px;
        }
    }
`;
