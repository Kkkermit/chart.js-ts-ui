import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VotesState {
	votes: number[];
}

const initialState: VotesState = {
	votes: [],
};

export const votesSlice = createSlice({
	name: "votes",
	initialState,
	reducers: {
		setVotes: (state, action: PayloadAction<number[]>) => {
			state.votes = action.payload;
		},
	},
});

export const { setVotes } = votesSlice.actions;

export default votesSlice.reducer;
