import React, { useState } from "react";
import styled, { css } from "styled-components";

import UserItem from "../userItem";
import Pagination from "../../container/pagination";

// CSS
const TableWrapper = styled.table.attrs({
  className:
    "min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
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
  isLoading,
}) => {
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
  };
  // console.log(checkItems.length);

  // 체크박스 전체 선택
  const changeAllChekcedHandler = (checked) => {
    if (checked) {
      const idArray = [];
      // 전체 체크 박스가 체크 되면 id를 가진 모든 elements를 배열에 넣어주어서,
      // 전체 체크 박스 체크
      posts.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }

    // 반대의 경우 전체 체크 박스 체크 삭제
    else {
      setCheckItems([]);
    }
  };

  const handleChange = (e) => {
    handleDataNumber(e);
    setCheckItems([]);
  };

  if (isLoading) {
    return <h3 className="text-center">Loading...</h3>;
  }

  return (
    <>
      <TableWrapper>
        <Thead color="light-gray">
          <tr>
            {/* 나중에 map으로 할 수 있으면 map으로 만들기
          type별 th미리 만들어두고 분기처리해서 사용하는 방법도 고려해보기 */}
            {/* 전체 선택 체크박스 */}
            <Th scope="col">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => changeAllChekcedHandler(e.target.checked)}
                // checkItems의 갯 수와 불러오는 데이터가 같을 때, 전체 선택을 활성화
                // 하나라도 빼면 체크 박스 해제
                checked={checkItems.length === postsPerPage ? true : false}
              />
            </Th>
            <Th scope="col">Name</Th>
            <Th scope="col">Title</Th>
            <Th scope="col">Status</Th>
            {/* <Th scope="col">Role</Th> */}
            <Th scopt="col">
              <span className="sr-only">Edit</span>
            </Th>
          </tr>
        </Thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((el, index) => (
            <UserItem
              key={index}
              data={el}
              index={index}
              checkItems={checkItems}
              setCheckItems={setCheckItems}
              handleSingleCheck={handleSingleCheck}
            />
          ))}
        </tbody>
      </TableWrapper>
      <Pagination />
    </>
  );
};

export default Table;
