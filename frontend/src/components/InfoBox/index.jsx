import "./index.scss";
import { BsFillRecordFill } from "react-icons/bs";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { HiOutlineStatusOffline } from "react-icons/hi";

import { useVideo } from "../../context/VideoContext";
import { AiFillAudio } from "react-icons/ai";
import { BsPersonFillExclamation } from "react-icons/bs";
import personCount from "../../helpers/personCount";
import RealtimeChart from "../RealtimeChart";
import classNames from "classnames";

export default function InfoBox({ view }) {
  const { playing, detections } = useVideo();

  const detectionClass = classNames({
    "infobox-detections": true,
    active: personCount(detections),
  });

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
          <div className={detectionClass}>
            <BsPersonFillExclamation />{" "}
            {personCount(detections) ? `Movement Detected` : "No Activity"}
          </div>

          <div className={detectionClass}>
            <AiFillAudio />{" "}
            {personCount(detections) ? "Audio Detected" : "No Activity"}
          </div>
        </div>
        <div className="infobox-chart">
          <div className="infobox-chart-title"> People Detected </div>
          <RealtimeChart />
        </div>
      </div>
    </div>
  );
}
