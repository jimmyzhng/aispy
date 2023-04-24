import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useVideo } from "../../context/VideoContext";
import Chart from "react-apexcharts";
import ApexChart from "apexcharts";
import personCount from "../../helpers/personCount";

const XAXISRANGE = 10 * 1000;

export default function RealtimeChart() {
  const [dataStream, setDataStream] = useState([{ x: 0, y: 0 }]);
  const { detections } = useVideo();
  const series = [
    {
      name: "People Spotted",
      data: dataStream,
    },
  ];

  const options = {
    chart: {
      id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "numeric",
      labels: {
        style: { colors: "#fff" },
      },
      group: {
        colors: ["#fff"],
      },
      axisTicks: {
        color: "#fff",
      },
      axisBorder: {
        color: "#fff",
      },
    },
    yaxis: {
      min: 0,
      max: 10,
      labels: {
        style: { colors: "#fff" },
      },
      axisTicks: {
        color: "#fff",
      },
      axisBorder: {
        color: "#fff",
      },
    },
    legend: {
      show: false,
    },
    colors: ["#fff"],
  };

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
        series={series}
        type="line"
        height={250}
      />
    </div>
  );
}
