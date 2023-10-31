import React from "react";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Leaderboard from "./Leaderboard";

test("renders learn react link", () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Leaderboard />
			</MemoryRouter>
		</Provider>
	);

	expect(screen.getByText(/Users/i)).toBeInTheDocument();
});
