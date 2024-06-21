import { RESET_STORE, resetStore } from "./action.redux";
import { describe, it, expect } from "vitest";

describe("action.redux", () => {
	it("should create an action to reset the store", () => {
		const expectedAction = {
			type: RESET_STORE,
		};
		expect(resetStore()).toEqual(expectedAction);
	});
});
