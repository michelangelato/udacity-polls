import { render } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router";

import User from "./User";

describe("User", () => {
	it("will match the snapshot", () => {
		const user = {
			id: "sarahedo",
			name: "Sarah Edo",
			avatarURL: "/img/user1.jpg",
		};
		var view = render(
			<MemoryRouter>
				<User user={user} />
			</MemoryRouter>
		);
		expect(view).toMatchSnapshot();
	});
});
