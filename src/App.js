import { useEffect } from "react";
import "./App.css";
import * as CSTM from "./custom/custom";
import { Helmet } from "react-helmet";
import { loadScript } from "./utils/scriptLoader";
import MainCover from "./components/01/mainCover";
import MainSummary from "./components/02/mainSummary";
import PhoneCall from "./components/03/phoneCall";
import Gallery from "./components/04/gallery";
import Calendar from "./components/05/calendar";
import Timer from "./components/06/timer";
import Location from "./components/07/location";
import GallerySwiper from "./components/modal/gallerySwiper";
import Map from "./components/08/map";
import LocationNotice from "./components/09/locationNotice";
import BankAccount from "./components/10/bankAccount";
import Share from "./components/11/share";
import Footer from "./components/footer/footer";
import PlayMusic from "./components/playMusic/playMusic";

function App() {
  useEffect(() => {
    if (CSTM.꽃잎효과ONOFF) {
      setTimeout(() => {
        loadScript(`${process.env.PUBLIC_URL}/scripts/snowfall.js`);
      }, 1000);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${CSTM.신랑이름} ♥ ${CSTM.신부이름}의 결혼식에 초대합니다.`}</title>
        <meta name="description" content="결혼식에 초대합니다♡" />
        <link rel="canonical" href={CSTM.WEDDING_HOMEPAGE} />
        <meta property="og:url" content="https://mo18.luvle.co.kr" />
        <meta
          property="og:title"
          content={`${CSTM.신랑이름} ♥ ${CSTM.신부이름}의 결혼식에 초대합니다.`}
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:description" content="결혼식에 초대합니다♡" />
        <meta property="og:image" content={CSTM.OG_IMAGE_URL} />
        <meta
          property="og:site_name"
          content={`${CSTM.신랑이름} ♥ ${CSTM.신부이름}의 결혼식에 초대합니다.`}
        />
      </Helmet>
      <div>
        <MainCover></MainCover>
        <MainSummary></MainSummary>
        <PhoneCall></PhoneCall>
        <Gallery></Gallery>
        <Calendar></Calendar>
        <Timer></Timer>
        <Location></Location>
        <Map></Map>
        <LocationNotice></LocationNotice>
        <BankAccount></BankAccount>
        <Share></Share>
        <Footer></Footer>
        <PlayMusic></PlayMusic>
      </div>
      <GallerySwiper></GallerySwiper>
    </>
  );
}

export default App;
