import "./index.scss";

export default function PastBroadcastListItem({ url, date, building }) {
  return (
    <div className="pb-list-item">
      <div className="pb-li-title">{date.slice(0, 10)}</div>

      <div className="pb-li-desc"> Building: {building} Exit</div>
    </div>
  );
}
