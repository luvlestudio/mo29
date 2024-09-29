import styled from "styled-components";
import SectionType2 from "../common/sectionType2";
import * as CSTM from "../../custom/custom";
import { checkMobile } from "../../utils/mobile";

const Kakao = window.Kakao;

const ButtonGroupWrapper = styled.div`
  display: flex;
  padding: 0 30px 30px 30px;
`;

const Button = styled.button`
  width: 50%;
  height: 45px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #777777;
`;

function Share() {
  const handleShareByKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: CSTM.KAKAO_SHARE_CONFIG.title,
        description: CSTM.KAKAO_SHARE_CONFIG.description,
        imageUrl: CSTM.KAKAO_SHARE_CONFIG.imageUrl,
        imageWidth: CSTM.KAKAO_SHARE_CONFIG.imageWidth,
        imageHeight: CSTM.KAKAO_SHARE_CONFIG.imageHeight,
        link: {
          mobileWebUrl: CSTM.KAKAO_SHARE_CONFIG.link.mobileWebUrl,
          webUrl: CSTM.KAKAO_SHARE_CONFIG.link.webUrl,
        },
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            mobileWebUrl: CSTM.WEDDING_HOMEPAGE,
            webUrl: CSTM.WEDDING_HOMEPAGE,
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    });
  };

  const handleShareByMessage = () => {
    const message = "모바일 청첩장을 확인해주세요! " + window.location.href;
    if (checkMobile() === "android") {
      const link = "sms:?body=" + encodeURIComponent(message);
      window.location.href = link;
    } else if (checkMobile() === "ios") {
      const link = "sms:&body=" + encodeURIComponent(message);
      window.location.href = link;
    } else {
      const link = "sms:?body=" + encodeURIComponent(message);
      window.location.href = link;
    }
  };

  return (
    <SectionType2>
      <ButtonGroupWrapper>
        <Button onClick={() => handleShareByKakao()}>
          <img
            src={`${process.env.PUBLIC_URL}/imgs/kakao/logo.png`}
            alt="kakao-logo"
            style={{ width: "25px", height: "25px" }}
          />
          &nbsp;카카오톡
        </Button>
        <Button onClick={() => handleShareByMessage()}>
          <img
            src={`${process.env.PUBLIC_URL}/imgs/smile/smile.png`}
            alt="2G-Phone"
            style={{ width: "25px", height: "25px" }}
          />
          &nbsp;2G 휴대폰 전송
        </Button>
      </ButtonGroupWrapper>
    </SectionType2>
  );
}

export default Share;
