import React from "react";
import { BarChart, HorizontalBarChart } from "../components/charts/barChart";
import PieChart from "../components/charts/pieChart";
import Table from "../components/table/table";

// import styled from "styled-components";
// import tw from "twin.macro";

import { ContainerLayout } from "../assets/styles/layout";
import { HeadingFirst } from "../assets/styles/base";
import Button from "../components/form/button";

const Dashboard = (props) => {
  return (
    <section className="flex flex-col min-h-content px-4 py-4 sm:px-20">
      <h2 className="font-bold rounded-lg w-full mb-5 px-5">Dashboard</h2>
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
            <span className="h-8 font-bold">Monthly earning</span>
            <PieChart />
          </div>

          {/* SOCIAL SOURCE */}
          <div className="flex flex-col bg-gray-100 rounded-lg p-5 mb-5">
            <span className="h-8 font-bold">social source</span>
            <div className="flex flex-col items-center">
              {/* icon */}
              <span className=" bg-indigo-500 rounded-full block text-white relative h-20 w-20 mb-5">
                <svg
                  className="w-10 absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2"
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
              <span>
                Facebook -<span>125 sales</span>
              </span>
              <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                ullam, beatae placeat eius doloribus, cupiditate commodi animi
              </p>
              <Button planeText>Learn more</Button>
              {/* sns */}
              <div className="flex mt-5 justify-evenly w-full">
                <div className="flex flex-col flex-1 items-center">
                  {/* icon */}
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
                  <span>Facebook</span>
                  <span>125 sales</span>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  {/* icon */}
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
                  <span>Facebook</span>
                  <span>125 sales</span>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  {/* icon */}
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
                  <span>Facebook</span>
                  <span>125 sales</span>
                </div>
              </div>
            </div>
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

            <div className="flex flex-col justify-between bg-gray-100 rounded-lg w-1/3 p-5">
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
            <span className="h-8 font-bold">Monthly earning</span>
            <BarChart />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col bg-gray-100 rounded-lg p-5 mr-0 mb-5 md:mr-5 md:w-1/2 md:mb-0">
              <span className="h-8 font-bold">Activity</span>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-lg p-5 md:w-1/2 ">
              <span className="h-8 font-bold">Top Cities Selling Product</span>
              <svg
                className="w-16 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>1,456</span>
              <span>San Francisco</span>
              <HorizontalBarChart />
            </div>
          </div>
        </div>
      </div>

      {/* <Table type="user" /> */}
    </section>
  );
};

export default Dashboard;
