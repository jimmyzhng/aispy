import "./index.scss";
import { BsFillRecordFill } from "react-icons/bs";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { GoUnmute, GoMute } from "react-icons/go";

import { useVideo } from "../../context/VideoContext";
import { AiFillAudio } from "react-icons/ai";
import { BsPersonFillExclamation } from "react-icons/bs";
import personCount from "../../helpers/personCount";
import RealtimeChart from "../RealtimeChart";
import classNames from "classnames";

export default function InfoBox({ view }) {
  const { playing, detections, soundDetections, muted, setMuted } = useVideo();

  const movementDetectionClass = classNames({
    "infobox-detections": true,
    active: personCount(detections),
  });

  const soundDetectionClass = classNames({
    "infobox-detections": true,
    active: soundDetections,
  });

  return (
    <div className="infobox-cont">
      {muted ? (
        <GoMute
          className="infobox-audio mute"
          size={25}
          onClick={() => setMuted(!muted)}
        />
      ) : (
        <GoUnmute
          className="infobox-audio unmute"
          size={25}
          onClick={() => setMuted(!muted)}
        />
      )}
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
          <div className={movementDetectionClass}>
            <BsPersonFillExclamation />{" "}
            {personCount(detections) ? `Movement Detected` : "No Activity"}
          </div>

          <div className={soundDetectionClass}>
            <AiFillAudio /> {soundDetections ? "Audio Detected" : "No Activity"}
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
