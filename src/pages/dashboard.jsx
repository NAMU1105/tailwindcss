import React from "react";
import { BarChart, HorizontalBarChart } from "../components/charts/barChart";
import PieChart from "../components/charts/pieChart";
import Button from "../components/form/button";

import { ContainerLayout } from "../assets/styles/layout";
import { HeadingFirst } from "../assets/styles/base";

const Dashboard = (props) => {
  return (
    <section className="flex flex-col min-h-content px-4 py-4 sm:px-20">
      <h2 className="font-bold uppercase rounded-lg w-full mb-5">Dashboard</h2>
      <div id="content" className="flex flex-col md:flex-row">
        <div id="left" className="md:w-1/3  md:mr-5">
          <div className="flex flex-col bg-gray-100 rounded-lg mb-5">
            <div className="bg-indigo-200 p-5 pb-10 rounded-tr-lg rounded-tl-lg">
              <h3 className="capitalize font-bold text-indigo-500">
                Welcome back!
              </h3>
              <span className="text-indigo-500">4D Dashboard</span>
            </div>
            <div className="p-5 flex">
              <div className="w-1/3">
                <img
                  className="w-20 p-1 rounded-full transform -translate-y-10 bg-gray-100"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt="profile"
                />
                <h3 className="font-bold">Henry Price</h3>
                <span className="block">Softeware engineer</span>
              </div>
              <div className="w-full flex flex-col justify-between">
                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <span>125</span>
                    <span className="block font-bold">projects</span>
                  </div>
                  <div className="w-1/2">
                    <span>1245</span>
                    <span className="block font-bold">revenue</span>
                  </div>
                </div>
                <Button>
                  view profile
                  <svg
                    className="w-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
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
            <div className="flex flex-col justify-between bg-gray-100 rounded-lg w-1/3 p-2 md:p-5 mr-1 md:mr-5">
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
            <div className="flex flex-col justify-between bg-gray-100 rounded-lg w-1/3 p-2 md:p-5 mr-1 md:mr-5">
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

            <div className="flex flex-col justify-between bg-gray-100 rounded-lg w-1/3 p-2 md:p-5">
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
            <div
              id="activity"
              className="flex flex-col bg-gray-100 rounded-lg p-5 mr-0 mb-5 md:mr-5 md:w-1/2 md:mb-0"
            >
              <span className="h-8 font-bold">Activity</span>
              <ul className="w-full relative border-l border-dashed border-gray-600 p-y-4 mb-auto">
                <li className="flex w-full pb-12">
                  <div>
                    <svg
                      className="w-5 absolute -left-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex">
                    <div className="flex w-24 ml-4">
                      <h3>22 Nov </h3>
                      <svg
                        className="w-4 ml-2.5 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <div className=" ml-auto">
                      <p>Responded to need “Volunteer Activities"</p>
                    </div>
                  </div>
                </li>
                <li className="flex w-full pb-12">
                  <div>
                    <svg
                      className="w-5 absolute -left-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex">
                    <div className="flex w-24 ml-4">
                      <h3>22 Nov </h3>
                      <svg
                        className="w-4 ml-2.5 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <div className="ml-auto">
                      <p>Responded to need “Volunteer Activities"</p>
                    </div>
                  </div>
                </li>
                <li className="flex w-full">
                  <div>
                    <svg
                      className="w-5 absolute -left-2.5 animate-bounceHorizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex">
                    <div className="flex w-24 ml-4">
                      <h3>22 Nov </h3>
                      <svg
                        className="w-4 ml-2.5 text-indigo-500 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <div className=" ml-auto">
                      <p>Responded to need “Volunteer Activities"</p>
                    </div>
                  </div>
                </li>
              </ul>
              <Button href="/" notFullWidth size="1rem">
                View more
              </Button>
            </div>
            <div
              id="topSellingCity"
              className="flex flex-col bg-gray-100 rounded-lg p-5 md:w-1/2 "
            >
              <span className="h-8 font-bold">Top Cities Selling Product</span>
              <div className="flex flex-col items-center">
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
              </div>
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
