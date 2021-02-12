import axios from "axios";
import {
 
  signUpError,
  signUpRequest,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  signInError,
  signInRequest,
} from "../actions/authActions";

const signUpOperation = (user) => async (dispatch) => {
    dispatch(signUpRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
            ...user,
            returnSecureToken: true,
        });
        
        dispatch(signUpSuccess(response.data));
    }catch (error) {
            dispatch(signUpError(error))
        }
}

const signInOperation = (user) => async (dispatch) => {
    dispatch(signInRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
            ...user,
            returnSecureToken: true,
        });
        dispatch(signInSuccess(response.data));
    }catch (error) {
            dispatch(signInError(error.response.data.error.code))
        }
}

const signOutOperation = () => async (dispatch) => {
    dispatch(signOutSuccess())
}

export {signUpOperation, signInOperation, signOutOperation}