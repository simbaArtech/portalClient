import "./StockPhoto.css";
import FileController from "../media/FileController";

const StockPhoto = ({ item }) => {
  return (
    <div className="stock-photo-container">
      <FileController item={item} />
      <div className="stock-photo-overlay">{item.title}</div>
    </div>
  );
};

export default StockPhoto;
