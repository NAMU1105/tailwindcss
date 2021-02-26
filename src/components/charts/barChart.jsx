import React from "react";
import { Bar, defaults } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";

const DUMMY_CHART_DATA = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

const BarChart = (props) => {
  const {
    horizontal,
    vertical,
    width,
    responsiveWidth,
    height,
    responsiveHight,
  } = props;

  return (
    <article>
      <h3 className="my-3">New users/sales</h3>
      <Bar
        id="barChart"
        data={{
          labels: [...DUMMY_CHART_DATA.labels],
          //   labels: [
          //     "Jan",
          //     "Feb",
          //     "Mar",
          //     "Apr",
          //     "May",
          //     "Jun",
          //     "Jul",
          //     "Aug",
          //     "Sep",
          //     "Oct",
          //     "Nov",
          //     "Dec",
          //   ],
          datasets: [
            {
              label: "Food",
              data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
              //   #d24444 형태의 컬러값도 가능
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "Beverage",
              data: [47, 52, 67, 58, 9, 50, 58, 9, 50, 58, 9, 50],
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderColor: "rgba(255, 206, 86, 1)",
              borderWidth: 1,
            },
            {
              label: "Desserts",
              data: [47, 52, 67, 58, 9, 50, 58, 9, 50, 58, 9, 50],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 16,
            },
          },
        }}
      />
    </article>
  );
};

export default BarChart;
