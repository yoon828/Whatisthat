import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./user";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
