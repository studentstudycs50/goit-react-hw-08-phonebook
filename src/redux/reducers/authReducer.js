import { createReducer } from "@reduxjs/toolkit";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutSuccess
 
} from "../actions/authActions";

const initialState = {
  email: "",
  idToken: "",
  refreshToken: "",
  isAuth: false,
  localId: "",
  error: "",
};
const authReducer = createReducer(
  { ...initialState },
  {
    [signUpRequest]: (state, action) => ({
      ...state,
      isloading: true,
    }),
    [signUpSuccess]: (state, action) => ({
      ...state,
      email: action.payload.email,
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
      isAuth: true,
      localId: action.payload.localId,
      isloading: false,
    }),
    [signUpError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [signInRequest]: (state, action) => ({
      ...state,
      isloading: true,
    }),
    [signInSuccess]: (state, action) => ({
      ...state,
      email: action.payload.email,
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
      isAuth: true,
      localId: action.payload.localId,
      isloading: false,
    }),
    [signInError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    
    [signOutSuccess]: () => ({
      ...initialState,
    }),
   
  }
);

export { authReducer };