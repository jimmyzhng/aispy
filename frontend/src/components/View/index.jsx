import Detection from "../Detection";
import "./index.scss";
import InfoBox from "../InfoBox";
import { useParams } from "react-router-dom";

export default function View() {
  const { id } = useParams();

  return (
    <div className="View">
      <h1>View</h1>

      <div className="view-cont">
        <Detection view={id} />
        <InfoBox view={id} />
      </div>
    </div>
  );
}
