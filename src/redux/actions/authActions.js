import { createAction } from "@reduxjs/toolkit";

const signUpRequest = createAction("@auth/signUpRequest");
const signUpSuccess = createAction("@auth/signUpSuccess");
const signUpError = createAction("@auth/signUpError");

const signInRequest = createAction("@auth/signInRequest");
const signInSuccess = createAction("@auth/signInSuccess");
const signInError = createAction("@auth/signInError");

const signOutRequest = createAction("@auth/signOutRequest");
const signOutSuccess = createAction("@auth/signOutSuccess");
const signOutError = createAction("@auth/signOutError");

export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
};