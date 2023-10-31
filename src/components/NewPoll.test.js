import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../app/store";
import NewPoll from "./NewPoll";

describe("NewPoll", () => {
	it("will match the snapshot", () => {
		var view = render(
			<Provider store={store}>
				<MemoryRouter>
					<NewPoll />
				</MemoryRouter>
			</Provider>
		);
		expect(view).toMatchSnapshot();
	});

	it("will display an error if the optionA and optionB are not provided.", async () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<NewPoll />
				</MemoryRouter>
			</Provider>
		);

		var optionOne = screen.getByTestId("option-1");
		var optionTwo = screen.getByTestId("option-2");
		var createBtn = screen.getByTestId("create-btn");
		fireEvent.change(optionOne, {
			target: { value: "Travel by train" },
		});
		fireEvent.change(optionTwo, {
			target: { value: "Travel by car" },
		});
		expect(createBtn).not.toBeDisabled();
	});
});
