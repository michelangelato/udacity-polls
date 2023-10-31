import { render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../app/store";
import { handleInitialData } from "../actions/shared";
import PollList from "./PollList";

describe("PollList", () => {
	it("will match the snapshot", () => {
		const pollIds = [
			"8xf0y6ziyjabvozdd253nd",
			"6ni6ok3ym7mf1p33lnez",
			"am8ehyc8byjqgar0jgpub9",
		];
		store.dispatch(handleInitialData());
		var view = render(
			<Provider store={store}>
				<MemoryRouter>
					<PollList pollIds={pollIds} />
				</MemoryRouter>
			</Provider>
		);
		expect(view).toMatchSnapshot();
	});
});
