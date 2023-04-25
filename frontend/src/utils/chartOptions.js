export const series = (data) => {
  return [
    {
      name: "People Spotted",
      data: data,
    },
  ];
};

export const options = {
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
