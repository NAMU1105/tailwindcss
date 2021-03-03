import React from "react";
import Button from "../components/form/button";
import { SearchBarInput } from "../components/form/input";
// import { Checkbox } from "../components/form/input";

const Stars = (param) => {
  const arrStarCounts = [];
  let count = param.count;
  //   TODO: 나중에는 여기서 반올림/반내림을 처리해줄 것

  for (let index = 0; index < 5; index++) {
    if (count > 0) {
      arrStarCounts.push(true);
      count--;
    } else {
      arrStarCounts.push(false);
    }
  }

  return (
    <ul className={`flex ${param.customStyle}`}>
      {arrStarCounts.map((star, index) => (
        <li className={star ? `text-yellow-400` : `text-gray-600`} key={index}>
          <svg
            className="w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </li>
      ))}
    </ul>
  );
};

const Item = () => {
  return (
    <div
      id="products__item"
      className="relative w-full flex flex-col shadow-md p-2 cursor-pointer"
    >
      {/* TODO: 나중에는 이 부분을 슬라이더로 바꾸기 */}
      <figure>
        <img
          className="w-full"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAADUCAYAAAAfrK/uAAAVJ0lEQVR4Xu2dBc/sNhNGc8vMzMzMIPVf9w+0KjMzMzPTpxN9XrluwFnI7uw9kV61uptNPGcmj+3xOHvg/vvv/6fxkIAEJBCYwAGFLLD3bLoEJNASUMgMBAlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhKYXciOO+645sILL2xOPfXU5qijjmoOO+ywhRf++uuv5tdff20+/fTT5q233mr+/PPPyR4699xzmwsuuKA5/vjjF9f+559/mj/++KP5+uuvm/fee6/56quvJl+XL9BW2n722Wc3xx57bHPooYf+q+2//fZbe+033nijtWOfj0svvbS57LLLFgx+//335sUXX2x9V3sQAzfeeGMbBxz46KWXXmo+/vjj2kt0nnfWWWe1MXDCCSc0hx9+eHPgwIH2POKAdhIH77///tJxkN+UmLjmmmuac845p/nmm2+axx57bFLb52zrpIYFO3lWISNocVwuAH28EAUEgYCrORBIAoqHIwVu1/cQyw8++KB5+eWXay67OOfiiy9ueHiPOOKIwe8hvjyMH3300aTrRzz5jjvuaE477bRF0xHxKQ/ybbfd1pxxxhkLkYHZ888/vzSK2hjgBn///Xfro1deeWWpDpNrnH766c2VV17ZCibHFPvnbuvSUIN8cVYhu++++xocmA5EhV6SA/EpBY4e+rXXXhsVM6550003LQIq9b4EK9cvr82/v/POO+21a47rr7++YaR3yCGHLE7nurQ/tZ3PuM/BJGQ8yLBJIyp4wPTdd98dxcqI6aqrrlqMmn/88cfm6aefbvjvMgcd2HXXXdeOlPMjjzHiK+/k8CGjv+eee27SLbH3iiuuaDvlfEZRK2RztnWSYYFPnl3ICDSG4AR7OQ0hMBj1nHjiiQukP/30U/Pkk082/LfvKHt2pg48UN9++237FYKNwDvvvPMWgYdI0ht/+OGHg+674YYbWhFLDwBCRU/O1DefPhLcF110UdtL89mq06MoMXX11Ve3dic+P/zwQytIQ/4iBm6++eZFxzNFAPu44KNrr7229S8dFaJCjH3xxReLr+Aj4otzkwBx7zfffLP12djB9y+55JJ2Gtk1Mq8VsjnaOmbLvn0+q5AxFUG8hqaLBNitt97aThE5CDSmmG+//XYne3JW9OxpNPfll1+2D1JXfo1pAFPENLJC8B599NFen5ajBh7SF154YSGQ+xYMy9iDv+68885F58MoBwGhk+g7EBzYJvH75JNPmmeeeWaZ2y++k8SBzoV75wJWXhgxuvzyyxcx89133zUPPfRQ7/2JRb5z8skn/2sEhq38pXiaKmSbaOtKEAN/eVYhq+VUihM5LQSk67jrrruaU045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"
          alt="product thumbnail"
        />
      </figure>
      <figcaption className="">
        <button className="absolute top-5 right-5 bg-white shadow-md rounded-full w-9 h-9">
          <svg
            className="absolute top-2 left-2 text-red-500 w-5 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          <span>$99</span>
          <del>$150</del>
          <span>60% off</span>
        </p>
        <div className="flex">
          <Stars count={4} />
          <span>4.9</span>
          <span>778 Reviews</span>
        </div>
        {/* <Button bgcolor="white" color="black">
          Add to Cart
        </Button>
        <Button>Buy Now</Button> */}
      </figcaption>
    </div>
  );
};

<li>
  <svg
    className="w-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
</li>;

const Products = (props) => {
  return (
    <section className="flex flex-col w-full md:flex-row">
      <nav className="w-1/4 p-5 rounded-md shadow-md h-fit mr-5">
        {/* title: filters */}
        <h1 className="font-bold">filters</h1>
        {/* price range */}
        <div className="bg-white rounded-sm capitalize">
          <h4 className="font-bold">price range</h4>
          <div>range bar</div>
          <span>$0-$1500</span>
        </div>
        {/* category */}
        <div className="bg-white rounded-sm capitalize">
          <h4 className="font-bold">category</h4>
          <ul>
            <li>All</li>
            <li>Accessories</li>
            <li>Appliances</li>
            <li>Bags</li>
            <li>Electronic</li>
            <li>Entertainment</li>
            <li>induction</li>
            <li>Mobile phone</li>
            <Button href="/" planeText>
              see more
            </Button>
          </ul>
        </div>
        {/* Brands */}
        <div className="bg-white rounded-sm capitalize">
          <h4 className="font-bold">Brands</h4>
          <label htmlFor="" className="w-full block">
            <input className="" type="checkbox" name="" id="" />
            <span className="">
              cup
              <span className="float-right">25</span>
            </span>
          </label>
          <label htmlFor="" className="w-full block">
            <input className="" type="checkbox" name="" id="" />
            <span className="">
              cup
              <span className="float-right">25</span>
            </span>
          </label>
          <label htmlFor="" className="w-full block">
            <input className="" type="checkbox" name="" id="" />
            <span className="">
              cup
              <span className="float-right">25</span>
            </span>
          </label>
          <label htmlFor="" className="w-full block">
            <input className="" type="checkbox" name="" id="" />
            <span className="">
              cup
              <span className="float-right">25</span>
            </span>
          </label>
          <Button href="/" planeText>
            see more
          </Button>
        </div>
        {/* Ratings */}
        <div className="bg-white rounded-sm capitalize">
          <h4 className="font-bold">Ratings</h4>

          <label htmlFor="" className="w-full flex">
            <input className="" type="checkbox" name="" id="" />
            <Stars count={5} />
            <span className="float-right">25</span>
          </label>

          <label htmlFor="" className="w-full flex">
            <input className="" type="checkbox" name="" id="" />
            <Stars count={4} />
            <span className="float-right">25</span>
          </label>

          <label htmlFor="" className="w-full flex">
            <input className="" type="checkbox" name="" id="" />
            <Stars count={3} />
            <span className="float-right">25</span>
          </label>

          <label htmlFor="" className="w-full flex">
            <input className="" type="checkbox" name="" id="" />
            <Stars count={2} />
            <span className="float-right">25</span>
          </label>

          <label htmlFor="" className="w-full flex">
            <input className="" type="checkbox" name="" id="" />
            <Stars count={1} />
            <span className="float-right">25</span>
          </label>

          <label htmlFor="" className="w-full flex">
            <input className="" type="checkbox" name="" id="" />
            <Stars count={0} customStyle="w-full" />
            <span className="float-right">25</span>
          </label>
        </div>
        {/* <div className="bg-white rounded-sm capitalize">
          <h4 className="font-bold"></h4>
        </div> */}
      </nav>
      {/* /////////////////////////////////////////////////////// */}
      {/* 오른쪽 부분 */}
      {/* /////////////////////////////////////////////////////// */}
      <div className="w-3/4 p-5 ">
        <div
          id="products__header"
          className="flex items-center justify-between w-full p-5 mb-5"
        >
          <SearchBarInput />

          <span>Showing 1–8 of 86 results</span>

          <div className="flex">
            <span>Status:</span>
            <div>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span className="capitalize">Top rated</span>
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span className="capitalize">Top rated</span>
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span className="capitalize">Top rated</span>
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span className="capitalize">Top rated</span>
              </label>
            </div>
          </div>

          {/* icons */}
          <div className="flex">
            <svg
              className="text-gray-600 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
        </div>
        <div
          id="products__grid"
          className="w-full grid grid-cols-4 grid-flow-row gap-4"
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </section>
  );
};

export default Products;
