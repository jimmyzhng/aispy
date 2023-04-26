import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PastBroadcastListItem({
  preview,
  name,
  date,
  building,
}) {
  const [previewPic, setPreviewPic] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/preview/${preview}`, {
        responseType: "blob",
      })
      .then((res) => URL.createObjectURL(res.data))
      .then((url) => setPreviewPic(url))
      .catch((err) => console.log(err));
  }, [preview]);

  return (
    <div className="pb-list-item">
      <div className="pb-li-preview">
        <img src={previewPic} />
      </div>
      <div className="pb-li-title">{date.slice(0, 10)}</div>

      <div className="pb-li-desc"> Building: {building} Exit</div>
    </div>
  );
}
