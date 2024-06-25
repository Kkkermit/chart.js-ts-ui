import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VoteState {
	votes: number[];
	chartType: "pie" | "bar" | "line";
}

const initialState: VoteState = {
	votes: [],
	chartType: "pie",
};

const voteSlice = createSlice({
	name: "votes",
	initialState,
	reducers: {
		setVotes: (state, action: PayloadAction<number[]>) => {
			state.votes = action.payload;
		},
		setChartType: (state, action: PayloadAction<"pie" | "bar" | "line">) => {
			state.chartType = action.payload;
		},
	},
});

export const { setVotes, setChartType } = voteSlice.actions;

export default voteSlice.reducer;
