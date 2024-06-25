import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
import { RESET_STORE } from "../action/action.redux";
import { describe, it, expect } from "vitest";

describe("rootReducer", () => {
	it("should return the initial state", () => {
		const store = configureStore({ reducer: rootReducer });
		const initialState = rootReducer(undefined, { type: "@@INIT" });
		expect(store.getState()).toEqual(initialState);
	});

	it("should reset the state when receiving RESET_STORE action", () => {
		const store = configureStore({ reducer: rootReducer });
		store.dispatch({ type: "SOME_ACTION", payload: {} });
		store.dispatch({ type: RESET_STORE });
		const resetState = rootReducer(undefined, { type: "@@INIT" });
		expect(store.getState()).toEqual(resetState);
	});
});
