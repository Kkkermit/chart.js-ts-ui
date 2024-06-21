import { combineReducers } from "redux";
import { RESET_STORE } from "./action.redux";
import voteReducer from "./vote.slice";

const appReducer = combineReducers({
	voteReducer,
});

const rootReducer = (state: any, action: any) => {
	if (action.type === RESET_STORE) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
