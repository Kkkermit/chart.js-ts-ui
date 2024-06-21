// votes.store.test.ts
import { configureStore } from "@reduxjs/toolkit";
import votesReducer, { setVotes } from "./vote.slice";
import { describe, it, expect, beforeEach } from "vitest";

describe("votes store", () => {
	const initialState = {
		votes: [],
	};
	let store = configureStore({ reducer: { votes: votesReducer } });

	beforeEach(() => {
		store = configureStore({ reducer: { votes: votesReducer } });
	});

	it("should handle initial state", () => {
		expect(store.getState().votes).toEqual(initialState);
	});

	it("should handle setVotes", () => {
		const votes = [1, 2, 3];
		store.dispatch(setVotes(votes));
		expect(store.getState().votes).toEqual({ votes });
	});
});
