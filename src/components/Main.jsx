import styled from "styled-components";
import mainImage from './../images/image19.png'
// import { Information } from "./Information";
// import { About } from "./About";
// import { Access } from "./Access";
// import { Contact } from "./Contact";

export const Main = () => {
    return (
        <SMain>
            <SMainImage src={mainImage} alt="mainImage" />
            <SInformation>
                <SInformationTitle>お知らせ</SInformationTitle>
                <SInformationList>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.12.25</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>令和5年修正会開催について</SInformationListItemContent>
                    </SInformationListItem>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.10.01</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>本堂修繕工事開始のご案内</SInformationListItemContent>
                    </SInformationListItem>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.09.05</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>令和4年秋彼岸について</SInformationListItemContent>
                    </SInformationListItem>
                    <SInformationListItem>
                        <SInformationListItemDate>2022.08.01</SInformationListItemDate>
                        <SInformationListItemHr />
                        <SInformationListItemContent>令和4年施餓鬼会中止のお知らせ</SInformationListItemContent>
                    </SInformationListItem>
                </SInformationList>
                <SInformationButton>もっと見る</SInformationButton>
            </SInformation>
            <SAbout>
                <SAboutTitle>当山について</SAboutTitle>
                <SAboutImage src={mainImage} alt="aboutImage"></SAboutImage>
                <SAboutContent>当山は、千葉県八千代市米本にある浄土宗の寺院です。<br />正式名称は、光明山攝取院善福寺です。<br />最譽貞庵上人を開基開山として、安土桃山時代である天正18年（1590年）に創建されました。</SAboutContent>
                <SAboutButton>もっと見る</SAboutButton>
            </SAbout>
            <SAccess>
                <SAccessTitle>アクセス</SAccessTitle>
                <SAccessMap>
                    <SAccessMapIframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.46028154752884!2d140.11923203357935!3d35.75077893898744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022875e54a13eb3%3A0x85fe3b2e8814c895!2z5rWE5Zyf5a6XIOWWhOemj-Wvug!5e0!3m2!1sja!2sjp!4v1672043172770!5m2!1sja!2sjp" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></SAccessMapIframe>
                </SAccessMap>
                <SAccessAddress>
                    <SAccessAddressTitle>
                        <SAccessAddressTitleSub>浄土宗</SAccessAddressTitleSub>
                        <SAccessAddressTitleMain>善福寺</SAccessAddressTitleMain>
                    </SAccessAddressTitle>
                    <SAccessAddressContent>〒276-0015<br />千葉県八千代市米本2077<br />TEL: 047-488-5809<br />FAX: 047-488-5810</SAccessAddressContent>
                </SAccessAddress>
                <SAccessDirectionPublic>
                    <SAccessDirectionPublicTitle>公共交通機関をご利用の場合</SAccessDirectionPublicTitle>
                    <SAccessDirectionPublicHr></SAccessDirectionPublicHr>
                    <SAccessDirectionPublicContent>京成電鉄「勝田台」駅下車<br />東洋バス「米本団地」行きに乗車し約14分<br />「米本神社前」下車後、徒歩約7分</SAccessDirectionPublicContent>
                </SAccessDirectionPublic>
                <SAccessDirectionCar>
                    <SAccessDirectionCarTitle>お車でお越しの場合</SAccessDirectionCarTitle>
                    <SAccessDirectionCarHr></SAccessDirectionCarHr>
                    <SAccessDirectionCarContent>国道16号線「米本神社前」交差点を<br />千葉北IC方向からお越しの場合は右折<br />柏IC方向からお越しの場合は左折<br />すぐの突き当りを左折し200m<br />※鐘楼堂より手前の空き場所に駐車願います</SAccessDirectionCarContent>
                </SAccessDirectionCar>
            </SAccess>
            <SContact>
                <SContactTitle>お問い合わせ</SContactTitle>
                <SContactContent>葬儀、法要、その他お問い合わせにつきましては、下記の通りお電話かメールにてご連絡下さい。</SContactContent>
                <SContactTell>
                    <SContactTellTitle>お電話でのお問い合わせ</SContactTellTitle>
                    <SContactTellHr></SContactTellHr>
                    <SContactTellContent>047-488-5809</SContactTellContent>
                </SContactTell>
                <SContactMail>
                    <SContactMailTitle>メールでのお問い合わせ</SContactMailTitle>
                    <SContactMailHr></SContactMailHr>
                    <SContactMailContent>下記専用フォームにて必要事項を入力後、送信ボタンを押して下さい。<br />数日中にご回答差し上げますが、万が一返信のない場合には再度送信いただくか、お電話にてご連絡ください。</SContactMailContent>
                </SContactMail>
                <SContactForm action="#">
                    <SContactFormArea>
                        <SContactFormAreaRequiredDt><span>お名前（漢字）</span></SContactFormAreaRequiredDt>
                        <SContactFormAreaDd><SContactFormInput type="text" name="name-kanji" required></SContactFormInput></SContactFormAreaDd>
                        <SContactFormAreaRequiredDt><span>お名前（フリガナ）</span></SContactFormAreaRequiredDt>
                        <SContactFormAreaDd><SContactFormInput type="text" name="name-hurigana" required></SContactFormInput></SContactFormAreaDd>
                        <SContactFormAreaRequiredDt><span>メールアドレス</span></SContactFormAreaRequiredDt>
                        <SContactFormAreaDd><SContactFormInput type="email" name="email" required></SContactFormInput></SContactFormAreaDd>
                        <SContactFormAreaOptionDt><span>件名</span></SContactFormAreaOptionDt>
                        <SContactFormAreaDd><SContactFormInput type="email" name="subject"></SContactFormInput></SContactFormAreaDd>
                        <SContactFormAreaRequiredDt><span>お問い合わせ内容</span></SContactFormAreaRequiredDt>
                        <SContactFormAreaDd><SContactFormTextArea name="message" required></SContactFormTextArea></SContactFormAreaDd>
                        <SContactFormConfirm>ご入力内容をご確認の上、お間違いがなければ送信ボタンを押してください。</SContactFormConfirm>
                        <SContactFormSubmitBtn type="submit">送信</SContactFormSubmitBtn>
                    </SContactFormArea>
                </SContactForm>
            </SContact>
        </SMain>
    );
};

const SMain = styled.main`
    width: 100%;
    margin-top: 70px;
    text-align: center;
    @media screen and (max-width: 767px) {
    }
`;

const SMainImage = styled.img`
    width: 100%;
    // height: 70vh;
`;

const SInformation = styled.section`
    margin-top: 60px;
    font-family: 'Zen Old Mincho', serif;
`;

const SInformationTitle = styled.h1`
    height: 54px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .17em;
    line-height: 1.8;
    color: #2c2c2c;
`

const SInformationList = styled.ul`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`

const SInformationListItem = styled.li`
    text-align: left;
    border-radius: 5px;
    background-color: #dbf0d0;
    margin-bottom: 10px;
    padding: 15px;
    color: #2c2c2c;
`

const SInformationListItemDate = styled.p`
    font-size: 12px;
`

const SInformationListItemHr = styled.hr`
    margin-top: 5px;
`

const SInformationListItemContent = styled.p`
    margin-top: 5px;
    padding-top: 5px;
    line-height: 1.8em;
`
const SInformationButton = styled.button`
    font-family: 'Zen Old Mincho', serif;
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    color: #fffffb;
    background-color: #1b813e;
    padding: 10px 20px;
    border: 0px;
`

const SAbout = styled.section`
    margin-top: 60px;
    font-family: 'Zen Old Mincho', serif;
`

const SAboutTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .17em;
    line-height: 1.8;
    color: #2c2c2c;
`

const SAboutImage = styled.img`
    width: 90%;
    height: 35vh;
    margin-top: 30px;
`

const SAboutContent = styled.p`
    width: 90%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
    color: #2c2c2c;
    /* text-align: left; */
    text-align: center;
`

const SAboutButton = styled.button`
    font-family: 'Zen Old Mincho', serif;
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: #FFFFFB;
    background-color: #1b813e;
    padding: 10px 20px;
    border: 0px;
`

const SAccess = styled.section`
    width: 90%;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Zen Old Mincho', serif;
`

const SAccessTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .17em;
    line-height: 1.8;
    color: #2c2c2c;
`

const SAccessMap = styled.div`
    width: 930px;
    max-width: 100%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px) {
        width: 500px;
        max-width: 100%;
    }
`

const SAccessMapIframe = styled.iframe`
    display: block;
    width: 100%;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
    border: 0;
`

const SAccessAddress = styled.div`
    margin-top: 10px;
`

const SAccessAddressTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SAccessAddressTitleSub = styled.p`
    letter-spacing: .17em;
    line-height: 1.5;
`

const SAccessAddressTitleMain = styled.p`
    font-size: 24px;
    letter-spacing: .17em;
    line-height: 1.5;
    color: #2c2c2c;
    margin-left: 5px;
`

const SAccessAddressContent = styled.p`
    line-height: 1.5;
    color: #2c2c2c;
`

const SAccessDirectionPublic = styled.div`
    margin-top: 30px;
`

const SAccessDirectionPublicTitle = styled.p`
`

const SAccessDirectionPublicHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`

const SAccessDirectionPublicContent = styled.p`
    margin-top: 5px;
    line-height: 1.8em;
`

const SAccessDirectionCar = styled.p`
    margin-top: 30px;
`

const SAccessDirectionCarTitle = styled.p`
`

const SAccessDirectionCarHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`

const SAccessDirectionCarContent = styled.p`
    margin-top: 5px;
    line-height: 1.8em;
`

const SContact = styled.section`
    width: 90%;
    margin-top: 60px;
    font-family: 'Zen Old Mincho', serif;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

const SContactTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .17em;
    line-height: 1.8;
    color: #2c2c2c;
`

const SContactContent = styled.p`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    /* text-align: left; */
    text-align: center;
    line-height: 1.5;
    color: #2c2c2c;
`

const SContactTell = styled.div`
    margin-top: 30px;
`

const SContactTellTitle = styled.p`
`

const SContactTellHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`

const SContactTellContent = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    color: #2c2c2c;
`

const SContactMail = styled.div`
    margin-top: 30px;
`

const SContactMailTitle = styled.p`
`

const SContactMailHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`

const SContactMailContent = styled.p`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    /* text-align: left; */
    text-align: center;
    font-size: 16px;
    line-height: 1.8em;
`

const SContactForm = styled.form`
    width: 930px;
    max-width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    @media screen and (max-width: 767px) {
        max-width: 100%;
    }
`

const SContactFormArea = styled.dl`
    background-color: #f8f8f8;
    border: 1px solid #aaaaaa;
    padding: 10px 30px;
    display: flex;
    flex-wrap: wrap;
`

const SContactFormAreaRequiredDt = styled.dt`
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

const SContactFormAreaOptionDt = styled.dt`
    width: 200px;
    padding: 15px 0;
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
    &::after {
        content: '';
        font-size: 11px;
        /* color: #eb4f32; */
        margin-left: 10px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        padding-bottom: 0;
    }
`

const SContactFormAreaDd = styled.dd`
    width: calc(100% - 200px);
    padding: 15px 0;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

const SContactFormInput = styled.input`
    width: 100%;
    max-width: 280px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
`

const SContactFormTextArea = styled.textarea`
    width: 100%;
    height: 260px;
    padding: 10px;
    line-height: 1.5;
`

const SContactFormConfirm = styled.p`
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    /* margin-top: 30px; */
    text-align: center;
    @media screen and (max-width: 767px) {
        /* text-align: left; */
    }
`

const SContactFormSubmitBtn = styled.button`
    width: 30%;
    margin-top: 20px;
    margin-bottom: 10px;
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
    cursor: pointer;
    border: none;
    &:hover {
        background-color: #d8b500;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`