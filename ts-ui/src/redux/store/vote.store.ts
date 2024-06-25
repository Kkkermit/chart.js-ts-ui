import { configureStore } from "@reduxjs/toolkit";
import votesReducer from "../slice/vote.slice";

export const store = configureStore({
	reducer: {
		votes: votesReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
