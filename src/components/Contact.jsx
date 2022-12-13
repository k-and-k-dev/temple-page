import styled from "styled-components";

export const Contact = () => {
    return (
        <SMain id="contact">
            お問い合わせ<br />
            葬儀、法要、その他お問い合わせにつきましては、下記の通りお電話もしくはメールにてご連絡下さい。<br />
            お電話でのお問い合わせ<br />
            080-9578-0392<br />
            メールでのお問い合わせ<br />
            下記専用フォームにて必要事項を入力後、送信ボタンを押して下さい。<br />
            数日中にご回答差し上げますが、万が一返信のない場合には恐れ入りますがお電話にて改めてご連絡下さい。<br />
            ここにフォーム
        </SMain>
    );
};

const SMain = styled.main`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;

const SMainImage = styled.img`
    width: 100%;
`;