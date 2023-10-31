import { render } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router";

import Nav from "./Nav";

describe("Nav", () => {
	it("will match the snapshot", () => {
		var view = render(
			<MemoryRouter>
				<Nav />
			</MemoryRouter>
		);
		expect(view).toMatchSnapshot();
	});
});
