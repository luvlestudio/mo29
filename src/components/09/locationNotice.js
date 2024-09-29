import SectionType2 from "../common/sectionType2";
import * as CSTM from "../../custom/custom";

function LocationNotice() {
  return (
    <SectionType2>
      <img
        src={CSTM.결혼식장안내이미지}
        alt="결혼식장 안내"
        style={{ width: "100%", height: "100%" }}
      />
    </SectionType2>
  );
}

export default LocationNotice;
