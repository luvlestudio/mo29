import SectionType2 from "../common/sectionType2";
import styled from "styled-components";
import * as CSTM from "../../custom/custom";
import { 오시는길색깔 as COLOR } from "../../custom/color";

const BackgroundDiv = styled.div`
  background-color: ${COLOR.배경_색깔};
  text-align: center;
  padding: 50px 0 50px 0;
`;

const WeddingHallCallButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  width: 165px;
  height: 30px;
  font-size: 13px;
  border-radius: 15px;
`;

const weddingHallPhoneNumber = CSTM.결혼식장전화.split("-").join(" - ");

function Location() {
  const callWeddingHall = (e) => {
    window.location.href = "tel:" + CSTM.결혼식장전화;
  };
  return (
    <SectionType2>
      <BackgroundDiv>
        <span
          style={{
            color: COLOR.LOCATION_색깔,
            fontSize: "9px",
            textAlign: "center",
          }}
        >
          L O C A T I O N
        </span>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#545454",
            padding: "10px 0 15px 0",
          }}
        >
          오시는 길
        </p>
        <div
          style={{
            textAlign: "center",
            lineHeight: "1.5rem",
          }}
        >
          <p>{CSTM.결혼식장소}</p>
          <p style={{ fontWeight: 600, color: "#000000" }}>
            {CSTM.결혼식장소더자세히}
          </p>
        </div>
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            color: "#545454",
          }}
        >
          <WeddingHallCallButton onClick={(e) => callWeddingHall(e)}>
            <img
              src={process.env.PUBLIC_URL + "/imgs/전화/call.png"}
              style={{ width: "10px", height: "10px", marginRight: "10px" }}
              alt="전화"
            />
            {weddingHallPhoneNumber}
          </WeddingHallCallButton>
        </div>
      </BackgroundDiv>
    </SectionType2>
  );
}

export default Location;
