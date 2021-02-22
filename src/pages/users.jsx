import React from "react";
import Pagination from "../container/pagination";

import UserList from "../container/userList";

const Users = (props) => {
  return (
    <section className="flex flex-col px-4 sm:px-20 sm:my-5">
      {/* <div className="flex flex-col"> */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {/* TODO: 다이나믹 테이블 생성할 수 있는 컴포넌트 만들기 */}
            <table className="min-w-full divide-y divide-gray-200   shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* item goes here */}
                <UserList />
                {/* TODO: 위의 한 개 빼고 나중에 주석처리하기 */}
                <UserList />
                <UserList />
                <UserList />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* pagination starts */}
      <Pagination />
      {/* pagination ends */}
    </section>
  );
};

export default Users;
