import "./EduResourseRow.css";
import "./TemplateRow.css";
import "./GenericItem.css";
import GenericItem from "./GenericItem";
import Star from "../Rate/Star";
import eduTypeByText from "../../utils/eduTypeByText";

const EduResourseRow = (item) => {
  return [
    <GenericItem
      title={item?.title}
      subTitle="שם התוצר"
      style={{ width: "6vw" }}
    />,
    <div className="generic-row-item-container">
      <img
        src={eduTypeByText(item?.type)}
        alt="edu type"
        className="item-type-img"
      />
      <GenericItem
        title={item?.type}
        subTitle="סוג תוצר"
        style={{ width: "2.8vw" }}
      />
    </div>,
    <GenericItem
      title={item?.subject?.title}
      subTitle={item?.subSubject?.title}
      style={{ width: "6.25vw" }}
    />,
    <div className="edu-row-comment">12 תגובות</div>,
    <div className="generic-item-container" style={{ width: "3.125vw" }}>
      <Star style={{ width: "20px" }} clickable={true} />
      <div className="generic-item-sub-title">מומלץ</div>
    </div>,
    <GenericItem
      title={item?.date}
      subTitle="תאריך העלאה"
      style={{ width: "5.2vw" }}
    />,
    <div className="edu-row-tag-container">
      {item?.tags?.map((tag, tagIndex) => (
        <div key={`tag ${tagIndex}`} className="edu-row-tag">
          {tag?.title}
        </div>
      ))}
    </div>,
  ];
};

export default EduResourseRow;