import "./index.scss";
import { BsFillRecordFill } from "react-icons/bs";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { GoUnmute, GoMute } from "react-icons/go";

import { useVideo } from "../../context/VideoContext";
import { AiFillAudio } from "react-icons/ai";
import { BsPersonFillExclamation, BsDisplayFill } from "react-icons/bs";
import personCount from "../../helpers/personCount";
import RealtimeChart from "../RealtimeChart";
import classNames from "classnames";
import PastBroadcast from "../PastBroadcast";

export default function InfoBox({ view }) {
  const {
    playing,
    detections,
    soundDetections,
    muted,
    setMuted,
    currentView,
    pastBroadcast,
  } = useVideo();

  const movementDetectionClass = classNames({
    "infobox-detections": true,
    active: personCount(detections),
  });

  const soundDetectionClass = classNames({
    "infobox-detections": true,
    active: soundDetections,
  });

  if (!currentView) {
    return null;
  }

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
        currentView.building
      )} Exit`}</div>

      <div className="infobox-desc">
        <div className="infobox-live">
          {pastBroadcast ? (
            <>
              <BsDisplayFill /> {`Replay (${currentView.date.slice(0, 10)})`}
            </>
          ) : playing ? (
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
          <div className="infobox-chart-title"> Detections (people) </div>
          <RealtimeChart />
        </div>
      </div>
    </div>
  );
}
