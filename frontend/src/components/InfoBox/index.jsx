import "./index.scss";
import { BsFillRecordFill } from "react-icons/bs";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { HiOutlineStatusOffline } from "react-icons/hi";

import { useVideo } from "../../context/VideoContext";
import { AiFillAudio } from "react-icons/ai";
import { BsPersonFillExclamation } from "react-icons/bs";

export default function InfoBox({ view }) {
  const video = useVideo();

  return (
    <div className="infobox-cont">
      <div className="infobox-title">{`Building: ${capitalizeFirstLetter(
        view
      )} Exit`}</div>

      <div className="infobox-desc">
        {video.playing ? (
          <>
            <BsFillRecordFill /> Live
          </>
        ) : (
          <>
            <HiOutlineStatusOffline /> Offline
          </>
        )}

        <div className="infobox-activity">
          <div className="infobox-movement">
            <BsPersonFillExclamation />{" "}
            {video.playing ? "Movement Detected" : "No Activity"}
          </div>

          <div className="infobox-audio">
            <AiFillAudio /> {video.playing ? "Audio Detected" : "No Activity"}
          </div>
        </div>
      </div>
    </div>
  );
}
