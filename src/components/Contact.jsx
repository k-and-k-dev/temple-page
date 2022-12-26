import styled from "styled-components";

export const Contact = () => {
    return (
        <SMain>
            <h1>お問い合わせ</h1>
            <SParagraph>葬儀、法要、その他お問い合わせにつきましては、下記の通りお電話もしくはメールにてご連絡下さい。</SParagraph>
            <SSection>
                <h2>お電話でのお問い合わせ</h2>
                <SParagraph>080-9578-0392</SParagraph>
            </SSection>
            <SSection>
                <h2>メールでのお問い合わせ</h2>
                <SParagraph>下記専用フォームにて必要事項を入力後、送信ボタンを押して下さい。</SParagraph>
                <SParagraph>数日中にご回答差し上げますが、万が一返信のない場合には恐れ入りますがお電話にて改めてご連絡下さい。</SParagraph>
                <SParagraph>ここにフォーム（工事中）</SParagraph>
            </SSection>
        </SMain>
    );
};

const SMain = styled.article`
    width: 100%;
    margin-top: 100px;
    text-align: center;
`;

const SSection = styled.section`
    margin: 20px;
`

const SParagraph = styled.p`
    margin: 10px;
`
