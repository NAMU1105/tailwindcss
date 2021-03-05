import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

// css
import { ContainerLayout } from "../assets/styles/layout";
import { HeadingFirst } from "../assets/styles/base";

const UserDetail = (props) => {
  //   const userId = useParams().userId;
  const objAuthContext = useContext(AuthContext);
  const userID = objAuthContext.userID;
  return (
    <>
      <ContainerLayout>
        <HeadingFirst align="left">Client Info</HeadingFirst>
        <div></div>
      </ContainerLayout>
    </>
  );
};

export default UserDetail;
