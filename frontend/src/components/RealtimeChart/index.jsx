import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useVideo } from "../../context/VideoContext";
import ApexChart from "apexcharts";
import personCount from "../../helpers/personCount";
import { series, options } from "../../utils/chartOptions";

export default function RealtimeChart() {
  const [dataStream, setDataStream] = useState([{ x: 0, y: 0 }]);
  const { detections } = useVideo();

  const appendData = async (dataPoint) => {
    let lastDataPoint = dataStream[dataStream.length - 1];
    // Preventing memory issues
    if (dataStream.length > 1000) {
      dataStream.reverse().pop();
      dataStream.reverse();
    }
    setDataStream((prev) => [
      ...prev,
      { x: lastDataPoint.x + 0.05, y: dataPoint },
    ]);
  };

  useEffect(() => {
    appendData(personCount(detections));
    ApexChart.exec("realtime", "updateSeries", [{ data: dataStream }]);
  }, [detections]);
  return (
    <div className="realtime-chart-cont">
      <ReactApexChart
        options={options}
        series={series(dataStream)}
        type="line"
        height={200}
      />
    </div>
  );
}
