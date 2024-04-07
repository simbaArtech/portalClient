import "./StockMedia.css";
import FileController from "../Media/FileController";
import {useNavigate} from "react-router-dom";

const StockMedia = ({item}) => {
  const navigate = useNavigate();
  return (
    <div className="stock-media-container">
      <FileController item={item} onClick={() => navigate("/mediaAlbum")} />
      <div className="stock-media-overlay">{item.title}</div>
    </div>
  );
};

export default StockMedia;
