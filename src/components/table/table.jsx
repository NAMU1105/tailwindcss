import React, { useState } from "react";
import styled, { css } from "styled-components";
// import tw from "twin.macro";

import { CheckboxContext } from "../../context/checkbox-context";

// import UserList from "../../container/userList";
import UserItem from "../userItem";

// CSS
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
const Table = ({
  type,
  totalPosts,
  postsPerPage,
  posts,
  handleSortDate,
  paginate,
  handleDataNumber,
  loading,
}) => {
  // const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkItems, setCheckItems] = useState([]);

  // 페이지 네이션 부분
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 체크박스 전체 단일 개체 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      // 체크 해제
      setCheckItems(checkItems.filter((el) => el !== id));
    }

    // // 아이템 전체 체크 여부 변경
    // if (checkItems.length === postsPerPage) {
    //   setIsAllChecked(true);
    // } else {
    //   setIsAllChecked(false);
    // }
  };
  console.log(checkItems.length);
  // 체크박스 전체 선택
  // const changeAllChekcedHandler = () => {
  //   // console.log(isAllChecked);
  //   setIsAllChecked((prev) => !prev);
  // };

  const changeAllChekcedHandler = (checked) => {
    if (checked) {
      // console.log("wow");
      const idArray = [];
      // 전체 체크 박스가 체크 되면 id를 가진 모든 elements를 배열에 넣어주어서,
      // 전체 체크 박스 체크
      posts.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
      // setIsAllChecked(true);
    }

    // 반대의 경우 전체 체크 박스 체크 삭제
    else {
      setCheckItems([]);
      // setIsAllChecked(false);
    }
  };

  // const handleChange = (e) => {
  //   handleDataNumber(e);
  //   setCheckItems([]);
  // };

  return (
    // <CheckboxContext.Provider
    // value={{
    //   isAllChecked,
    //   changeAllChecked: changeAllChekcedHandler,
    // }}
    // >
    <TableWrapper>
      <Thead color="light-gray">
        <tr>
          {/* 나중에 map으로 할 수 있으면 map으로 만들기
          type별 th미리 만들어두고 분기처리해서 사용하는 방법도 고려해보기 */}
          <Th scope="col">
            {/* 전체 선택 체크박스 */}
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => changeAllChekcedHandler(e.target.checked)}
              // checkItems의 갯 수와 불러오는 데이터가 같을 때, 전체 선택을 활성화
              // 하나라도 빼면 체크 박스 해제
              checked={checkItems.length === postsPerPage ? true : false}
              // checked={isAllChecked}
            />
          </Th>
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
        {/* <UserList /> */}
        {posts.map((el, index) => (
          <UserItem
            key={index}
            data={el}
            index={index}
            checkItems={checkItems}
            setCheckItems={setCheckItems}
            handleSingleCheck={handleSingleCheck}
            loading={loading}
          />
        ))}
      </tbody>
    </TableWrapper>
    // </CheckboxContext.Provider>
  );
};

export default Table;
