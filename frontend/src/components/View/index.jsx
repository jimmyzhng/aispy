import ReactPlayer from "react-player";
import Detection from "../Detection";
import "./index.scss";

export default function View() {
  return (
    <div className="View">
      <h1>View</h1>

      <div className="view-content">
        <Detection />
      </div>
    </div>
  );
}
