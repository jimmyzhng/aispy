import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function PastBroadcast() {
  const [pastBroadcasts, setPastBroadcasts] = useState(null);
  const { user, isLoggedIn } = useAuth();

  // console.log("pastBroadcasts", pastBroadcasts);
  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:3001/api/videos", {
          params: {
            id: user.id,
          },
        })
        .then((res) => {
          setPastBroadcasts(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="past-broadcast">
      <h1>Past Broadcasts</h1>
    </div>
  );
}
