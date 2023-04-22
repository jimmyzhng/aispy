import "./index.scss";
import { BsFillRecordFill } from "react-icons/bs";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { HiOutlineStatusOffline } from "react-icons/hi";

import { useVideo } from "../../context/VideoContext";

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

        <div>Person spotted</div>
      </div>
    </div>
  );
}
