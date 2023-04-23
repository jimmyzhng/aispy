// import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const XAXISRANGE = 10 * 1000;

// export default function RealtimeChart({ data }) {
//   // const [series, setSeries] = useState({ data: data.slice() });
//   const [options, setOptions] = useState({
//     options: {
//       chart: {
//         id: "realtime",
//         height: 350,
//         type: "line",
//         animations: {
//           enabled: true,
//           easing: "linear",
//           dynamicAnimation: {
//             speed: 1000,
//           },
//         },
//         toolbar: {
//           show: false,
//         },
//         zoom: {
//           enabled: false,
//         },
//       },

//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//       },
//       title: {
//         text: "Dynamic Updating Chart",
//         align: "left",
//       },
//       markers: {
//         size: 0,
//       },
//       xaxis: {
//         type: "numeric",
//         min: "400",
//         max: "459",
//       },
//       yaxis: {
//         min: 0,
//         max: 10,
//       },
//       legend: {
//         show: false,
//       },
//     },
//   });

//   useEffect(() => {
//     // const interval = setInterval(() => {
//     //   const newData = getNewSeries();
//     // });
//   }, []);
//   return (
//     <div className="realtime-chart-cont">
//       <ReactApexChart
//         options={options}
//         // series={series}
//         type="line"
//         height={350}
//       />
//     </div>
//   );
// }
