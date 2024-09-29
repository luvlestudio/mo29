import SectionType1 from "../common/sectionType1";
import styled from "styled-components";
import * as CSTM from "../../custom/custom";

// Styled component로 정의된 부모 요소
const ParentParagraph = styled.p`
  margin: 2% 0;
  text-align: center;
`;

function PhoneCall() {
  const handlePhoneCall = (event, 신랑또는신부) => {
    event.preventDefault();
    if (신랑또는신부 === "신랑") {
      window.location.href = "tel:" + CSTM.신랑전화번호;
    } else if (신랑또는신부 === "신부") {
      window.location.href = "tel:" + CSTM.신부전화번호;
    }
  };

  return (
    <SectionType1>
      <div style={{ lineHeight: "40px" }}>
        <ParentParagraph>
          <span
            style={{
              fontSize: "large",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {CSTM.신랑아버지생존여부 === false && (
              <img
                src={`${process.env.PUBLIC_URL}/imgs/꽃/국화꽃.png`}
                style={{ width: "20px", height: "20px" }}
                alt="국화꽃"
              />
            )}
            {CSTM.신랑아버지} ·{" "}
            {CSTM.신랑어머니생존여부 === false && (
              <img
                src={`${process.env.PUBLIC_URL}/imgs/꽃/국화꽃.png`}
                style={{ width: "20px", height: "20px" }}
                alt="국화꽃"
              />
            )}
            {CSTM.신랑어머니}
          </span>
          <span>
            <span>의</span>
            <span
              style={{
                fontSize: "large",
                minWidth: "3rem",
                display: "inline-block",
              }}
            >
              아들
            </span>
          </span>
          <span style={{ fontSize: "large" }}>{CSTM.신랑이름}</span>
          <span
            style={{
              fontSize: "large",
              display: "inline-block",
              minWidth: "3rem",
            }}
          >
            · · ·
          </span>
          <button onClick={(event) => handlePhoneCall(event, "신랑")}>
            <img
              src={`${process.env.PUBLIC_URL}/imgs/전화/call.png`}
              alt="전화"
              style={{ width: "15px", height: "15px" }}
            />
          </button>
        </ParentParagraph>
        <ParentParagraph>
          <span
            style={{
              fontSize: "large",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {CSTM.신부아버지생존여부 === false && (
              <img
                src={`${process.env.PUBLIC_URL}/imgs/꽃/국화꽃.png`}
                style={{ width: "20px", height: "20px" }}
                alt="국화꽃"
              />
            )}
            {CSTM.신부아버지} ·{" "}
            {CSTM.신부어머니생존여부 === false && (
              <img
                src={`${process.env.PUBLIC_URL}/imgs/꽃/국화꽃.png`}
                style={{ width: "20px", height: "20px" }}
                alt="국화꽃"
              />
            )}
            {CSTM.신부어머니}
          </span>
          <span>
            <span>의</span>
            <span
              style={{
                fontSize: "large",
                minWidth: "3rem",
                display: "inline-block",
              }}
            >
              딸
            </span>
          </span>
          <span style={{ fontSize: "large" }}>{CSTM.신부이름}</span>
          <span
            style={{
              fontSize: "large",
              display: "inline-block",
              minWidth: "3rem",
            }}
          >
            · · ·
          </span>
          <button onClick={(event) => handlePhoneCall(event, "신부")}>
            <img
              src={`${process.env.PUBLIC_URL}/imgs/전화/call.png`}
              alt="전화"
              style={{ width: "15px", height: "15px" }}
            />
          </button>
        </ParentParagraph>
      </div>
    </SectionType1>
  );
}

export default PhoneCall;
