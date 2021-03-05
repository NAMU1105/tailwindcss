import React, { useState, useEffect } from "react";
import axios from "axios";

import UserTable from "../components/table/userTable";
// import Pagination from "../container/pagination";

const Users = (props) => {
  const [arrPosts, setPosts] = useState([]);
  const [arrCurrentPosts, setCurrentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSortDate = () => {};

  return (
    <section className="flex flex-col px-4 sm:px-20 sm:my-5">
      <h1 className="uppercase py-5 font-bold">user list</h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div>
            {/* <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"> */}
            <UserTable
              type="user"
              data={arrPosts}
              posts={arrCurrentPosts}
              postsPerPage={intPostsPerPage}
              totalPosts={arrPosts.length}
              handleDataNumber={handleDataNumber}
              isLoading={isLoading}
              handleSortDate={handleSortDate}
              // paginate={paginate}
            />
          </div>
        </div>
      </div>
      {/* <Pagination /> */}
    </section>
  );
};

export default Users;
