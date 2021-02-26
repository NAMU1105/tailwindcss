import React from "react";
import BarChart from "../components/charts/barChart";
import PieChart from "../components/charts/pieChart";

// import styled from "styled-components";
// import tw from "twin.macro";

import { ContainerLayout } from "../assets/styles/layout";
import { HeadingFirst } from "../assets/styles/base";

const Dashboard = (props) => {
  return (
    <section className="flex flex-col min-h-content px-4 sm:px-20">
      <h2 className="bg-gray-100 rounded-lg w-full p-5 mb-5">Dashboard</h2>
      <div id="content" className="flex flex-col md:flex-row">
        <div id="left" className="md:w-1/3  md:mr-5">
          <div className="flex flex-col bg-gray-100 rounded-lg p-5 mb-5">
            <div>
              <span>Profile</span>
            </div>
            <div>
              <span>Henry Price</span>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 rounded-lg p-5 mb-5">
            <span>Monthly earning</span>
            <PieChart />
          </div>
          <div className="flex flex-col bg-gray-100 rounded-lg p-5 mb-5">
            social source
          </div>
        </div>
        <div id="right" className="md:w-2/3">
          <div className="flex w-full">
            {/* 오른쪽 첫 번째 아이템 시작 */}
            <div className="flex flex-col justify-between bg-gray-100 rounded-lg w-1/3 p-5 mr-5">
              <span>Orders</span>
              <div className="flex justify-between items-center">
                <span className="text-black font-bold block">1235</span>
                <span className=" bg-indigo-500 rounded-full block text-white relative h-8 w-8">
                  <svg
                    className="w-5 absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* 오른쪽 첫 번째 아이템 끝 */}
            <div className="flex flex-col justify-between bg-gray-100 rounded-lg w-1/3 p-5 mr-5">
              <span>Orders</span>
              <div className="flex justify-between items-center">
                <span className="text-black font-bold block">1235</span>
                <span className=" bg-indigo-500 rounded-full block text-white relative h-8 w-8">
                  <svg
                    className="w-5 absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-gray-100 rounded-lg w-1/3 p-5 mr-5">
              <span>Orders</span>
              <div className="flex justify-between items-center">
                <span className="text-black font-bold block">1235</span>
                <span className=" bg-indigo-500 rounded-full block text-white relative h-8 w-8">
                  <svg
                    className="w-5 absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 rounded-lg  p-5 my-5">
            <BarChart />
          </div>
          <div className="flex">
            <div className="flex flex-col bg-gray-100 rounded-lg w-1/2 p-5 mr-5">
              <span>Activity</span>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-lg w-1/2 p-5">
              <span>top selling region</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
