import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpOperation } from "../../redux/operations/authOperatins";
import SignInStyled from '../SignIn/SignInStyled';


const initialState = {
  email: "",
  password: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpOperation(state));
    setState(initialState);
  };

  return (
    <SignInStyled>
      <h2 className="login-title">Sign Up</h2>
      <form onSubmit={onHandleSubmit} className="login-form">
        <label className="login-label">
          Email
          <input
            className="login-input"
            type="text"
            name="email"
            placeholder="Enter email"
            value={state.email}
            onChange={onHandleChange}
          />
        </label>
        <label className="login-label">
          Password
          <input
            className="login-input"
            type="text"
            name="password"
            placeholder="Enter password"
            value={state.password}
            onChange={onHandleChange}
          />
        </label>
        <button type="submit" className="button">
          Registration
        </button>
      </form>
    </SignInStyled>
  );
};

export default SignUp;
