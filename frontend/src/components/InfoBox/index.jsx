import "./index.scss";
import { BsFillRecordFill } from "react-icons/bs";

export default function InfoBox({ view }) {
  return (
    <div className="infobox-cont">
      <div className="infobox-title">{`Building: ${view} Exit`}</div>

      <div className="infobox-desc">
        <BsFillRecordFill /> Live
        <div>Person spotted</div>
      </div>
    </div>
  );
}
