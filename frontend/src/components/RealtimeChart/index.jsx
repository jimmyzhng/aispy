import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useVideo } from "../../context/VideoContext";
import ApexChart from "apexcharts";
import personCount from "../../utils/personCount";
import { series, options } from "../../utils/chartOptions";
import { useRef } from "react";
import { useChart } from "../../context/ChartContext";
import { appendData } from "../../utils/chartOptions";

export default function RealtimeChart() {
  const { dataStream, setDataStream } = useChart();
  const { detections } = useVideo();

  useEffect(() => {
    const newDataStream = appendData(dataStream, personCount(detections));

    setDataStream(newDataStream);
    ApexChart.exec("realtime", "updateSeries", [{ data: newDataStream }]);
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
