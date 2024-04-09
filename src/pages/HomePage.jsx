import SideBar from "../components/SideBar/SideBar";
import Tabs from "../components/Tabs/Tabs";
import "./HomePage.css";
import WhiteContainer from "../components/WhiteContainer/WhiteContainer";
import rabit from "../assets/img/rabit.jpg";
import RecommendedItem from "../components/ItemsComponents/RecommendedItem";
import TitlesList from "../components/TitlesList/TitlesList";
//delete in production
const data = [
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
];

const titlesArray = [
  "מבואות מודיעין",
  "טכנולוגיה וסייבר",
  "מחקר ומיצוי מידע",
  "שפה",
  "המלצות",
  "בלה בלה",
];
const titlesObjectsArray = titlesArray.map((title) => ({ text: title }));

const tabsArray = ["במיוחד בשבילך", "כל התוצרים", "תוצרים שאהבתי"];

const HomePage = () => {
  return (
    <div className="home-page-wrapper page-container">
      <p className="recommended-title">מומלצים</p>
      <div className="recommended-wrapper">
        <RecommendedItem
          item={data[0]}
          style={{ height: "100%", width: "100%" }}
        />
        <SideBar
          numItems={2}
          height="100%"
          ItemComponent={RecommendedItem}
          data={data}
        />
      </div>
      <Tabs style={{ marginTop: "12.7vh" }} tabsArray={tabsArray} />
      <TitlesList
        titlesArray={titlesObjectsArray}
        getDefaultTitle={() => titlesObjectsArray[0]}
        style={{
          containerStyle: { marginTop: "7vh" },
          color: "#5D5D5D",
        }}
      />
    </div>
  );
};

export default HomePage;
