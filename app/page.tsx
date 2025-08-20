import Image from "next/image";
import TitleBox from "./components/TitleBox";
import FortuneGrid from "./components/FortuneGrid";

export default function Home() {
  return (
    <div className="page">
      <div className="mainContainer">
        <TitleBox title="제 1장" subTitle="나의 사주 팔자" />

        <div className="titleBoxBackgroundBottomFade"/>

        <div className="titleBoxCharacterSpeechBubble">
          <div className="titleBoxCharacterSpeechBubbleContents">
            이제 본격적으로<br/>
            OO님의 사주팔자를 <br/>
            분석해볼 차례네요.
          </div>
        </div>

        <div className="section2">
          <div className="cut2Deco" />
          <div className="cut2">
            <div className="cut2Text"></div>
          </div>
        </div>

        <div className="section3">

          <div className="titleBoxCharacterSpeechBubble2">
            <div className="titleBoxCharacterSpeechBubble2Contents">
              제가 oo님의 사주를<br/>
              보기 쉽게 표로 정리했어요
            </div>
          </div>
          <div className="section3Bg">
            <Image
              src="/images/section3Image.png"
              alt="fortuneGridBg"
              className="section3BgImage"
              width={448}
              height={306}
            />
          <div className="section3BottomFade"/>
          </div>
          <FortuneGrid name="김로켓" data={{
            year: 1990,
            month: 1,
            day: 1,
            hour: 12,
            minute: 30,
            fortune: []
          }} />
        </div>
      </div>
    </div>
  );
}
