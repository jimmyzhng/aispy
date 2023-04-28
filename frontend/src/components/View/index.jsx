import Detection from "../Detection";
import "./index.scss";
import InfoBox from "../InfoBox";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../../context/VideoContext";

export default function View() {
  const { id } = useParams();
  const { currentView, setCurrentView, setVideo } = useVideo();
  // console.log("currentView", currentView);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/video", {
        params: {
          id,
        },
      })
      .then((res) => {
        let currentViewDesc = res.data;
        setCurrentView(currentViewDesc);

        // Make request to AWS to retrieve video with given name
        axios
          .get(`http://localhost:3001/api/aws/${currentViewDesc.name}`, {
            responseType: "blob",
          })
          .then((res) => URL.createObjectURL(res.data))
          .then((video) => {
            setVideo(video);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(currentView);

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
