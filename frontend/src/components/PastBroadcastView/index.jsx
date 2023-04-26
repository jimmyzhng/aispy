import Detection from "../Detection";
import "./index.scss";
import InfoBox from "../InfoBox";
import { useParams } from "react-router-dom";

export default function PastBroadcastView() {
  const { id } = useParams();

  return (
    <div className="View">
      <div className="view-cont">
        <Detection view={id} />

        <div className="view-info-cont">
          <InfoBox view={id} />
        </div>
      </div>
    </div>
  );
}
