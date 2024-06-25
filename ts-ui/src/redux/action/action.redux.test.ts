import { configureStore } from "@reduxjs/toolkit";
import { RESET_STORE, resetStore } from "./action.redux";
import voteReducer from "../slice/vote.slice";
import { fetchVotes, saveVotes } from "./action.redux";
import { describe, it, expect, beforeEach } from "vitest";

describe("action.redux", () => {
	let store: any;

	beforeEach(() => {
		store = configureStore({
			reducer: {
				votes: voteReducer,
			},
		});
		localStorage.clear();
	});

	it("fetches votes from local storage", () => {
		const data = {
			chartType: "pie",
			votes: [],
		};
		localStorage.setItem("data", JSON.stringify(data));
		store.dispatch(fetchVotes());
		expect(store.getState().votes).toEqual(data);
	});

	it("saves votes to local storage", () => {
		const data = {
			chartType: "pie",
			votes: [],
		};
		store.dispatch(saveVotes(data.votes));
		const storedData = JSON.parse(localStorage.getItem("data") || "[]");
		expect(storedData).toEqual(data.votes);
		expect(store.getState().votes.votes).toEqual(data.votes);
	});

	it("should create an action to reset the store", () => {
		const expectedAction = {
			type: RESET_STORE,
		};
		expect(resetStore()).toEqual(expectedAction);
	});
});
