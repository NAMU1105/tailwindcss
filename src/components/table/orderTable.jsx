import React, { useState } from "react";
import styled, { css } from "styled-components";
// import tw from "twin.macro";

// import { CheckboxContext } from "../../context/checkbox-context";

// import UserList from "../../container/userList";
import OrderItem from "../orderItem";
import Pagination from "../../container/pagination";
import { SearchBarInput } from "../form/input";

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
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ",
})``;

//  TODO: 다이나믹 테이블 생성할 수 있는 컴포넌트 만들기
const OrderTable = ({
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
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <div className="w-full flex items-center justify-between pb-5">
        <SearchBarInput />

        {/* 검색 정렬 */}
        <div>
          <select name="" id="" onChange={handleSortDate}>
            <option value="최신주문일순">최신주문일순</option>
            <option value="주문일의 역순">주문일의 역순</option>
          </select>

          <select name="" id="" defaultValue="50" onChange={handleChange}>
            <option value="10">10개씩보기</option>
            <option value="20">20개씩보기</option>
            <option value="50">50개씩보기</option>
            <option value="100">100개씩보기</option>
            <option value="150">150개씩보기</option>
          </select>
        </div>
      </div>

      <TableWrapper>
        <Thead color="light-gray">
          <tr>
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
            <Th scope="col">order no.</Th>
            <Th scope="col">date</Th>
            <Th scope="col">Billing Name</Th>
            <Th scope="col">total</Th>
            <Th scope="col">Payment Status </Th>
            <Th scope="col">Payment Method</Th>
            <Th scope="col">View Details</Th>
            <Th scopt="col">
              <span className="sr-only">Action</span>
            </Th>
          </tr>
        </Thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((el, index) => (
            <OrderItem
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

export default OrderTable;
