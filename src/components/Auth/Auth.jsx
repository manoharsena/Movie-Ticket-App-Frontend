import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthRequest } from "../../api-helpers/api-helpres.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onResReceived = (data) => {
    dispatch(userActions.login());
    localStorage.setItem("userId", data.data._id);
    navigate("/");
  };

  const getData = (data) => {
    sendUserAuthRequest(data.inputs, data.signup)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;
