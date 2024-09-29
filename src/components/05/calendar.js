import SectionType1 from "../common/sectionType1";

function Calendar() {
  return (
    <SectionType1>
      <img
        src={`${process.env.PUBLIC_URL}/imgs/03/calendar.png`}
        alt="달력"
        style={{ width: "100%", height: "100%" }}
      />
    </SectionType1>
  );
}

export default Calendar;
