import votesReducer, { setVotes } from "./vote.slice";
import { describe, it, expect } from "vitest";

describe("votes reducer", () => {
	const initialState = {
		votes: [],
	};

	it("should handle initial state", () => {
		expect(votesReducer(undefined, { type: "" })).toEqual(initialState);
	});

	it("should handle setVotes", () => {
		const votes = [1, 2, 3];
		expect(votesReducer(initialState, setVotes(votes))).toEqual({ votes });
	});
});
