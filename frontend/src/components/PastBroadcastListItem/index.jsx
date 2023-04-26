export default function PastBroadcastListItem({ key, date, building }) {
  return (
    <div className="pb-list-item">
      <div className="pb-li-title">{date}</div>

      <div className="pb-li-desc"> {building} </div>
    </div>
  );
}
