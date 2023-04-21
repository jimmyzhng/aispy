import ReactPlayer from "react-player";

export default function View() {
  return (
    <div className="View">
      <h1>View</h1>

      <div className="view-content">
        <ReactPlayer url="../../../public/videos/test_video.mp4" />
      </div>
    </div>
  );
}
