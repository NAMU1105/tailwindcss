import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "../components/table/table";
import Pagination from "../container/pagination";

const Users = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setPosts(res.data);
      const curPosts = [res.data][0].slice(0, postsPerPage);
      setCurrentPosts(curPosts);
      // console.log(res.data);
      // console.log([res.data][0].slice(0, postsPerPage - 1));
      setLoading(false);
    };

    fetchDatas();
  }, []);

  // Change the number of data by select option
  const handleDataNumber = (e) => {
    // postPerpage의 type이 (select>option.value) string이기 때문에 number로 바꾸어준다.
    // 이 부분에서 TypeScript의 중요성을 알게 되었다.
    setPostsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <section className="flex flex-col px-4 sm:px-20 sm:my-5">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <Table
              type="user"
              data={posts}
              posts={currentPosts}
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              handleDataNumber={handleDataNumber}
              loading={loading}
              // handleSortDate={handleSortDate}
              // paginate={paginate}
            />
          </div>
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default Users;
