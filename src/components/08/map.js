import SectionType2 from "../common/sectionType2";
import styled from "styled-components";
import * as CSTM from "../../custom/custom";
import { useEffect } from "react";
import { 지도색깔 as COLOR } from "../../custom/color";

const kakao = window.kakao;

const KakaoMapButton = styled.button`
  color: ${COLOR.카카오맵으로보기_색깔};
  font-size: 13px;
  text-align: center;
  background-color: ${COLOR.배경_색깔};
  margin: 0 auto;
  height: 40px;
  width: 100%;
  font-weight: bold;
`;

function Map() {
  useEffect(() => {
    const mapContainer = document.getElementById("kakaoMap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(
          CSTM.결혼식장위치.lat,
          CSTM.결혼식장위치.lng
        ), // 지도의 중심좌표
        level: CSTM.결혼식장위치.level, // 지도의 확대 레벨
      };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // var imageSrc = "img/pick.png", // 마커이미지의 주소입니다
    //   imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
    //   imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    // var markerImage = new kakao.maps.MarkerImage(
    //     imageSrc,
    //     imageSize,
    //     imageOption
    //   ),
    //   markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      CSTM.마커위치.lat,
      CSTM.마커위치.lng
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      // image: markerImage, // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);
  return (
    <SectionType2>
      <div id="kakaoMap" style={{ width: "auto", height: "250px" }}></div>
      <KakaoMapButton onClick={(e) => window.open(`${CSTM.결혼식장맵링크}`)}>
        카카오맵으로 보기
      </KakaoMapButton>
    </SectionType2>
  );
}

export default Map;
