import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

import UserList from "../../container/userList";

const TableWrapper = styled.table.attrs({
  className:
    "min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
})``;

const Thead = styled.thead.attrs({
  className: "bg-gray-50",
})`
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `};
`;
const Th = styled.th.attrs({
  className:
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
})``;

//  TODO: 다이나믹 테이블 생성할 수 있는 컴포넌트 만들기
const Table = (props) => {
  return (
    <TableWrapper>
      <Thead color="light-gray">
        <tr>
          {/* 나중에 map으로 할 수 있으면 map으로 만들기 */}
          <Th scope="col">Name</Th>
          <Th scope="col">Title</Th>
          <Th scope="col">Status</Th>
          <Th scope="col">Role</Th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </Thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <UserList />
        {/* TODO: 위의 한 개 빼고 나중에 주석처리하기 */}
        <UserList />
        <UserList />
        <UserList />
      </tbody>
    </TableWrapper>
  );
};

export default Table;
