import "./ListTemplate.css";

const ListTemplate = ({
  subjects,
  getSubSubjects,
  selectedSubject,
  setSelectedSubject,
}) => {
  return (
    <div className="list-template-container">
      {subjects?.map((subject, index) => {
        return (
          <div
            className="list-item"
            key={`listItem${index}`}
            style={{
              backgroundColor:
                subject.title === selectedSubject.title && "#f2f4fa",
            }}
            onClick={() => {
              setSelectedSubject(subject);
              getSubSubjects(subject);
            }}
          >
            <div className="list-item-text">{subject.title}</div>
            <div
              className="rectangle"
              style={{
                backgroundColor:
                  subject.title === selectedSubject.title && "#7d81b2",
                color: subject.title === selectedSubject.title && "#f1f3fb",
              }}
            >
              2
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTemplate;