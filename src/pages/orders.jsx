import React, { useState, useEffect } from "react";
import axios from "axios";

import OrderTable from "../components/table/orderTable";

/* 구매 관리 하는 페이지 */
const Order = (props) => {
  const [arrPosts, setPosts] = useState([]);
  const [arrCurrentPosts, setCurrentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [intCurrentPage, setCurrentPage] = useState(1);
  const [intPostsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchDatas = async () => {
      setIsLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setPosts(res.data);
      const arrResultPosts = [res.data][0].slice(0, intPostsPerPage);
      setCurrentPosts(arrResultPosts);
      setIsLoading(false);
    };

    fetchDatas();
  }, []);

  // Change the number of data by select option
  const handleDataNumber = (e) => {
    setPostsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const paginate = () => {};

  return (
    <section className="flex flex-col px-4 sm:px-20 sm:my-5">
      <h1 className="uppercase pb-5 font-bold">order list</h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="flex flex-col items-center py-2 align-middle min-w-full sm:px-6 lg:px-8">
          <OrderTable
            type="orders"
            data={arrPosts}
            posts={arrCurrentPosts}
            postsPerPage={intPostsPerPage}
            totalPosts={arrPosts.length}
            handleDataNumber={handleDataNumber}
            isLoading={isLoading}
            // handleSortDate={handleSortDate}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
