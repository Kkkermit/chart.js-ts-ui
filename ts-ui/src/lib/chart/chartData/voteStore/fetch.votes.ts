import { setVotes } from "../../../../redux/slice/vote.slice";
import { AppDispatch } from "../../../../redux/store/vote.store";

export const fetchVotes = () => (dispatch: AppDispatch) => {
	const savedVotes = localStorage.getItem("votes");
	if (savedVotes) {
		dispatch(setVotes(JSON.parse(savedVotes)));
	}
};
