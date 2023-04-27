import Detection from "../Detection";
import "./index.scss";
import InfoBox from "../InfoBox";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../../context/VideoContext";

export default function View() {
  const { id } = useParams();
  const { currentView, setCurrentView } = useVideo();
  console.log("currentView", currentView);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/video", {
        params: {
          id,
        },
      })
      .then((res) => setCurrentView(res.data))
      .catch((err) => console.log(err));
  }, []);

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
