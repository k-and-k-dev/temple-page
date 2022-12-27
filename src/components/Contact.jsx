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
                <SForm action="#">
                    <SFormArea>
                        <SFormAreaDt><span>お名前</span></SFormAreaDt>
                        <SFormAreaDd><SInput type="text" name="name" required></SInput></SFormAreaDd>
                        <SFormAreaDt><span>メールアドレス</span></SFormAreaDt>
                        <SFormAreaDd><SInput type="email" name="email" required></SInput></SFormAreaDd>
                        <SFormAreaDt><span>お問い合わせ内容</span></SFormAreaDt>
                        <SFormAreaDd><STextArea name="message" required></STextArea></SFormAreaDd>
                        <SPConfirm>ご入力内容をご確認の上、お間違いがなければ送信ボタンを押してください。</SPConfirm>
                        <SSubmitBtn type="submit">送信</SSubmitBtn>
                    </SFormArea>
                </SForm>
            </SSection>
        </SMain>
    );
};

const SMain = styled.article`
    width: 930px;
    max-width: 90%;
    margin-top: 100px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px) {
        width: 500px;
    }
`;

const SSection = styled.section`
    margin: 20px;
`

const SParagraph = styled.p`
    margin: 10px;
`   

const SForm = styled.form`
    width: 930px;
    max-width: 90%;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
`

const SFormArea = styled.dl`
    background-color: #f8f8f8;
    border: 1px solid #aaaaaa;
    margin-top: 25px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
`

const SFormAreaDt = styled.dt`
    width: 200px;
    padding: 15px 0;
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
    &::after {
        content: '必須';
        font-size: 11px;
        color: #eb4f32;
        margin-left: 10px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        padding-bottom: 0;
    }
`

const SFormAreaDd = styled.dd`
    width: calc(100% - 200px);
    padding: 15px 0;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

const SInput = styled.input`
    width: 100%;
    max-width: 280px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
`

const STextArea = styled.textarea`
    width: 100%;
    height: 260px;
    padding: 10px;
    line-height: 1.5;
`

const SPConfirm = styled.p`
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    margin-top: 30px;
    @media screen and (max-width: 767px) {
        text-align: left;
    }
`

const SSubmitBtn = styled.button`
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    background-color: #f4dd64;
    display: inline-block;
    min-width: 180px;
    line-height: 48px;
    border-radius: 24px;
    font-family: 'Montserat', sans-serif;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: #d8b500;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`