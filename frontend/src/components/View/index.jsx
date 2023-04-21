import ReactPlayer from "react-player";
import Detection from "../Detection";
import "./index.scss";
import InfoBox from "../InfoBox";

export default function View({ name }) {
  return (
    <div className="View">
      <h1>View</h1>

      <div className="view-content">
        <InfoBox />
        <Detection />
      </div>
    </div>
  );
}
