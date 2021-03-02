import React from "react";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import tw from "twin.macro";

// CSS
const TD = styled.td.attrs({
  className: "px-6 py-4 whitespace-nowrap",
})`
  & {
    > div {
      ${tw`text-sm text-gray-900`}
    }
  }
`;

// 결제 상태(디폴트: 결제완료)
const PaymentStatusWrapper = styled.span.attrs({
  className:
    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
})`
  // 환불(refund)
  ${(props) =>
    props.refund &&
    css`
      background-color: rgba(241, 180, 76, 0.18);
      color: #f1b44c;
    `};

  // 지불거절(chargeback)
  ${(props) =>
    props.chargeback &&
    css`
      background-color: rgba(244, 106, 106, 0.18);
      color: #f46a6a;
    `};

  // 미지급(계좌이체의 경우)
  ${(props) =>
    props.notYet &&
    css`
      background-color: rgb(236 127 56 / 18%);
      color: #ea6c4f;
    `};
`;

const OrderItem = ({
  data,
  handleSingleCheck,
  checkItems,
  loading,
  index,
  setCheckItems,
}) => {
  const {
    id = "#SK2540",
    billingName = "Neal Matthews",
    date = "07 Oct, 2019",
    totalPrice = 400,
    paymentStatus = "paid",
    paymentMethod = "Visa",
  } = data;

  const history = useHistory();

  return (
    <tr
      id={id}
      //   onClick={() =>
      //     history.push({
      //       pathname: "/editUser",
      //       state: { id: id },
      //     })
      //   }
      className="cursor-pointer"
    >
      <TD>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
          checked={checkItems.includes(data.id) ? true : false}
        />
      </TD>

      <TD>
        <div>{id}</div>
      </TD>
      <TD>
        <div>{billingName}</div>
      </TD>
      <TD>{date}</TD>
      <TD>${totalPrice}</TD>
      <TD>
        <PaymentStatusWrapper>{paymentStatus}</PaymentStatusWrapper>
      </TD>
      <TD>{paymentMethod}</TD>
      <TD>view details</TD>
      <TD className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="/" className="text-layout hover:text-layout-dark">
          Edit
        </a>
      </TD>
    </tr>
  );
};

export default OrderItem;
