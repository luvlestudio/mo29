import React from "react";
import SectionType1 from "../common/sectionType1";

function MainSummary() {
  return (
    <SectionType1>
      <img
        src={`${process.env.PUBLIC_URL}/imgs/02/main-summary.png`}
        alt="메인 커버"
        style={{ width: "100%" }}
      />
    </SectionType1>
  );
}

export default MainSummary;
