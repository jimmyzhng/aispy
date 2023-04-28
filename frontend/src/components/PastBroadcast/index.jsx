import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import PastBroadcastListItem from "../PastBroadcastListItem";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";

export default function PastBroadcast() {
  const [pastBroadcastList, setPastBroadcastList] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { setPastBroadcast } = useVideo();

  console.log("pastBroadcastList", pastBroadcastList);

  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:3001/api/videoList", {
          params: {
            id: user.id,
          },
        })
        .then((res) => {
          const videos = res.data;
          console.log("videos", videos);
          const pastBroadcastList = videos.filter(
            (vid) => vid.past_broadcast === true
          );
          setPastBroadcastList(pastBroadcastList);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="past-broadcast">
      <h1 className="pb-title">Past Broadcasts</h1>

      <div className="pb-list">
        {pastBroadcastList &&
          pastBroadcastList.map((broadcast) => {
            return (
              <PastBroadcastListItem
                key={broadcast.id}
                preview={broadcast.preview}
                name={broadcast.name}
                date={broadcast.date}
                building={broadcast.building}
                onClick={() => {
                  setPastBroadcast(true);
                  navigate(`/pastbroadcasts/${broadcast.id}`);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
