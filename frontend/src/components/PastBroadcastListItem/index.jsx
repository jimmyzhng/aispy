import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PastBroadcastListItem({
  preview,
  date,
  building,
  onClick,
}) {
  const [previewPic, setPreviewPic] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/aws/${preview}`, {
        responseType: "blob",
      })
      .then((res) => URL.createObjectURL(res.data))
      .then((url) => setPreviewPic(url))
      .catch((err) => console.log(err));
  }, [preview]);

  return (
    <div className="pb-list-item" onClick={onClick}>
      <div className="pb-li-preview">
        <img src={previewPic} className="pb-li-preview-pic" />
      </div>
      <div className="pb-li-title">{date.slice(0, 10)}</div>

      <div className="pb-li-desc"> Building: {building} Exit</div>
    </div>
  );
}
