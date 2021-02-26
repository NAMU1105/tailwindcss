import React from "react";
import { Pie, defaults } from "react-chartjs-2";

import styled, { css } from "styled-components";
// import tw from "twin.macro";
import { ChartContainer } from "../../assets/styles/layout";

// TODO: chart 받는 데이터 형식 모두 같다면 파일 하나로 통일하고 props로 차트타입 받아서 차트 만들기
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

// defaults.global.tooltips.enabled = false;
defaults.global.legend.display = false;

// const ChartContainer = styled.div`
//   position: relative;
//   margin: auto;

//   ${(props) =>
//     props.responsiveWidth &&
//     css`
//       width: ${props.responsiveWidth}vw;
//     `}
//   ${(props) =>
//     props.responsiveHight &&
//     css`
//       height: ${props.responsiveHight}vh;
//     `}
// `;

const PieChart = (props) => {
  const { width, responsiveWidth, height, responsiveHight } = props;

  return (
    <article>
      {/* <h3 className="text-center">New users/sales</h3> */}
      <ChartContainer responsiveWidth={responsiveWidth}>
        <Pie
          id="barChart"
          data={{
            labels: [...DUMMY_CHART_DATA.labels],
            datasets: [
              {
                label: "Food",
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                //   #d24444 형태의 컬러값도 가능
                backgroundColor: ["orange", "red", "blue"],
                borderColor: "light-gray",
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
      </ChartContainer>
    </article>
  );
};

export default PieChart;
