import { setVotes } from "../../../../redux/slice/vote.slice";
import { AppDispatch } from "../../../../redux/store/vote.store";

export const saveVotes = (votes: number[]) => (dispatch: AppDispatch) => {
	localStorage.setItem("votes", JSON.stringify(votes));

	dispatch(setVotes(votes));
};
