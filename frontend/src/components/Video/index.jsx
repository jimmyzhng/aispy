import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=CYw4CvUSaLM&t=68s&ab_channel=nikeskateboarding"
        playing
        muted
      />
    </div>
  );
}
