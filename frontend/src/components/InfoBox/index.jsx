import "./index.scss";
import { BsFillRecordFill } from "react-icons/bs";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { HiOutlineStatusOffline } from "react-icons/hi";

import { useVideo } from "../../context/VideoContext";
import { AiFillAudio } from "react-icons/ai";
import { BsPersonFillExclamation } from "react-icons/bs";
import personCount from "../../helpers/personCount";
import RealtimeChart from "../RealtimeChart";

export default function InfoBox({ view }) {
  const { playing, detections } = useVideo();

  return (
    <div className="infobox-cont">
      <div className="infobox-title">{`Building: ${capitalizeFirstLetter(
        view
      )} Exit`}</div>

      <div className="infobox-desc">
        <div className="infobox-live">
          {playing ? (
            <>
              <BsFillRecordFill /> Live
            </>
          ) : (
            <>
              <HiOutlineStatusOffline /> Offline
            </>
          )}
        </div>

        <div className="infobox-activity">
          <div className="infobox-movement">
            <BsPersonFillExclamation />{" "}
            {personCount(detections) ? "Movement Detected" : "No Activity"}
          </div>

          <div className="infobox-audio">
            <AiFillAudio />{" "}
            {personCount(detections) ? "Audio Detected" : "No Activity"}
          </div>
        </div>
        <div className="infobox-chart">
          <div> People Detected </div>
          <RealtimeChart />
        </div>
      </div>
    </div>
  );
}
