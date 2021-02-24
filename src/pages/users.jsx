import React from "react";
import Table from "../components/table/table";
import Pagination from "../container/pagination";

const Users = (props) => {
  return (
    <section className="flex flex-col px-4 sm:px-20 sm:my-5">
      {/* <div className="flex flex-col"> */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {/* table */}
            <Table />
          </div>
        </div>
      </div>
      {/* </div> */}
      <Pagination />
    </section>
  );
};

export default Users;
