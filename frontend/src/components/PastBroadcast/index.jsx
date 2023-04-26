import ReactPlayer from "react-player";

export default function PastBroadcast() {
  return (
    <div className="past-broadcast">
      <h1>Past Broadcasts</h1>

      <video controls>
        <source
          src="https://aispy.s3.us-west-2.amazonaws.com/pb-north.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
