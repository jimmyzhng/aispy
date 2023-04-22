import { useEffect, useState } from "react";

export default function RealtimeChart() {
  const [state, setState] = useState({
    series: [
      {
        data: data.slice(),
      },
    ],

    options: {
      chart: {
        id: "realtime",
        height: 350,
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
      },
      title: {
        text: "Dynamic Updating Chart",
        align: "left",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        range: XAXISRANGE,
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    },
  });

  useEffect(() => {
    getNewSeries(lastDate, {
      min: 10,
      max: 90,
    });
  });
  return <div className="realtime-chart-cont"></div>;
}
