import { configureStore, Dispatch, Action } from "@reduxjs/toolkit";
import votesReducer from "../slice/vote.slice";

export const store = configureStore({
	reducer: {
		votes: votesReducer,
	},
});

type Votes = {
	chartType: string;
	votes: number[];
};

export const saveVotes = (votes: Votes) => {
	return (dispatch: Dispatch<Action<string>>) => {
		dispatch({ type: "SAVE_VOTES", payload: votes });
		localStorage.setItem("data", JSON.stringify(votes));
	};
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
