import moment from "moment";

// folder 이름
export const 폴더이름 = "mo18";
export const WEDDING_HOMEPAGE = `https://${폴더이름}.luvle.co.kr`;

// 카톡 링크 공유했을 때 나오는 대표이미지
export const OG_IMAGE_URL =
  "https://image.cine21.com/resize/cine21/still/2005/1121/M0020066_focus52804[W578-].jpg";

// 꽃잎 효과
export const 꽃잎효과ONOFF = false; // 꽃잎효과를 키고 싶다면 true, 끄고 싶다면 false로 변경

/**
 * 신랑 신부
 */
// 이름
export const 신랑이름 = "이영석";
export const 신부이름 = "김민정";
// 전화번호
export const 신랑전화번호 = "010-0000-0001";
export const 신부전화번호 = "010-0000-0002";

/**
 * 신랑 가족 관계
 */
export const 신랑아버지 = "이재영";
export const 신랑아버지생존여부 = true; // true: 생존, false: 사망
export const 신랑어머니 = "김영숙";
export const 신랑어머니생존여부 = true; // true: 생존, false: 사망

/**
 * 신부 가족 관계
 */
export const 신부아버지 = "김영근";
export const 신부아버지생존여부 = true; // true: 생존, false: 사망
export const 신부어머니 = "이영숙";
export const 신부어머니생존여부 = false; // true: 생존, false: 사망

/**
 * 결혼식
 */
// 날짜
export const 결혼식날짜 = moment("2024-11-16 15:00", "YYYY-MM-DD HH:mm");
// 장소
export const 결혼식장소 = "충남 천안시 서북구 천안대로 1198-30";
export const 결혼식장소더자세히 = "비렌티웨딩홀 신관 3층 루체오홀";
// 결혼식장 전화
export const 결혼식장전화 = "041-0000-0000";
// 지도
export const 결혼식장위치 = {
  lat: 36.84784786358723,
  lng: 127.15908677087823,
  level: 3, // 지도의 확대 레벨
};
export const 마커위치 = {
  lat: 36.84784786358723,
  lng: 127.15908677087823,
};
export const 결혼식장맵링크 = "https://kko.to/GyOW40h3cO";
export const 결혼식장안내이미지 = `${process.env.PUBLIC_URL}/imgs/04/location-notice.png`;

/**
 * 계좌
 */
// 신랑 측
export const 신랑계좌번호 = {
  이름: 신랑이름, // <-- 자동으로 들어가니 수정하지 마세요. 만약 건드렸다면 "신랑이름"으로 수정해주세요.
  은행: "하나은행",
  계좌번호: "000-0000-0000-01",
};

export const 신랑혼주계좌번호리스트 = [
  {
    이름: "차은우",
    은행: "국민은행",
    계좌번호: "000-0000-0000-02",
  },
  {
    이름: "이민정",
    은행: "한국은행",
    계좌번호: "000-0000-0000-03",
  },
];

// 신부 측
export const 신부계좌번호 = {
  이름: 신부이름, // <-- 자동으로 들어가니 수정하지 마세요. 만약 건드렸다면 "신부이름"으로 수정해주세요.
  은행: "카카오뱅크",
  계좌번호: "000-0000-0000-04",
};

export const 신부혼주계좌번호리스트 = [
  {
    이름: "박서준",
    은행: "신한은행",
    계좌번호: "000-0000-0000-05",
  },
  {
    이름: "장원영",
    은행: "농협은행",
    계좌번호: "000-0000-0000-06",
  },
];

/**
 * SNS SHARE
 */
export const KAKAO_SHARE_CONFIG = {
  title: `${신랑이름} ♥ ${신부이름}의 모바일 청첩장`, // <-- 신랑이름과 신부이름만 안건드리면 됩니다.
  description: "결혼식에 초대합니다♡",
  imageUrl:
    "https://image.cine21.com/resize/cine21/still/2005/1121/M0020066_focus52804[W578-].jpg",
  imageWidth: 1200, // 이미지 가로
  imageHeight: 630, // 이미지 세로
  link: {
    mobileWebUrl: `${WEDDING_HOMEPAGE}`,
    webUrl: `${WEDDING_HOMEPAGE}`,
  },
};

/**
 * 꼭 잊지말고 사진 넣기!!
 * public/imgs/갤러리사진리스트/01 부터 끝까지 넣어주세용
 * jpg인지 png인지도 확인하고 만약 png이면 파일이름 뒤에 png로 바꿔주세용!!
 * 그리고 사진 크기가
 * 702 X 926 사이즈 비슷하게 맞춰주면 잘나와용
 */
export const 갤러리사진리스트 = [
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/01.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/02.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/03.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/04.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/05.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/06.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/07.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/08.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/09.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/10.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/11.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/12.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/13.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/14.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/15.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/갤러리사진리스트/16.jpg` },
];

/**
 * 큰 갤러리사진 리스트
 * public/imgs/큰갤러리사진리스트/01 부터 끝까지 넣어주세용
 */
export const 큰갤러리사진리스트 = [
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/01.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/02.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/03.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/04.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/05.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/06.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/07.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/08.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/09.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/10.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/11.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/12.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/13.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/14.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/15.jpg` },
  { src: `${process.env.PUBLIC_URL}/imgs/큰갤러리사진리스트/16.jpg` },
];
