import { setVotes } from "../slice/vote.slice";
import { AppDispatch } from "../store/vote.store";

export const RESET_STORE = "RESET_STORE";

export const resetStore = () => ({
	type: RESET_STORE,
});

export const fetchVotes = () => (dispatch: AppDispatch) => {
	const savedVotes = localStorage.getItem("votes");
	if (savedVotes) {
		dispatch(setVotes(JSON.parse(savedVotes)));
	}
};

export const saveVotes = (votes: number[]) => (dispatch: AppDispatch) => {
	localStorage.setItem("votes", JSON.stringify(votes));
	dispatch(setVotes(votes));
};
