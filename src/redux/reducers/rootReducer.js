import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authReducer";
import { formReducer } from "./formReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: [
    "email",
    "idToken",
    "refreshToken",
    "isAuth",
  ],
 
};

const rootReducer = combineReducers({
  form: formReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer ;