import styled from "styled-components";

export const Contact = () => {
    return (
        <SMain id="contact">
            <h1>お問い合わせ</h1>
            <p>葬儀、法要、その他お問い合わせにつきましては、下記の通りお電話もしくはメールにてご連絡下さい。</p>
            <h2>お電話でのお問い合わせ</h2>
            <p>080-9578-0392</p>
            <h2>メールでのお問い合わせ</h2>
            <p>下記専用フォームにて必要事項を入力後、送信ボタンを押して下さい。</p>
            <p>数日中にご回答差し上げますが、万が一返信のない場合には恐れ入りますがお電話にて改めてご連絡下さい。</p>
            <p>ここにフォーム（工事中）</p>
        </SMain>
    );
};

const SMain = styled.main`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;
