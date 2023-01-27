import styled from "styled-components";

export const AboutItem = (props) => {
    const { title, image, body } = props;

    return (
        <SItem>
            <STitle>{title}</STitle>
            <SImage>
                <img src={image} alt={title} />
            </SImage>
            <SBody>{body}</SBody>
        </SItem>
    );
};

const SItem = styled.div`
    margin-top: 30px;
`;

const STitle = styled.h2``;

const SImage = styled.p`
    img {
        display: block;
        width: 90%;
        height: 800px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        @media screen and (max-width: 767px) {
            width: 100%;
            height: 240px;
        }
    }
`;

const SBody = styled.p`
    width: 90%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
    color: #2c2c2c;
    text-align: center;
`;
