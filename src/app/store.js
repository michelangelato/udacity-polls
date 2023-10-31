import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import middleware from "../middleware";

// console.log("middleware", middleware);

export const store = configureStore({
	reducer: reducer,
	middleware: middleware,
});
