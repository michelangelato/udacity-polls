import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../app/store";
import Login from "./Login";

describe("Login", () => {
	it("Login match the snapshot", () => {
		var view = render(
			<Provider store={store}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</Provider>
		);
		expect(view).toMatchSnapshot();
	});

	it("verify that a user name field, password field, and submit button are present on the page", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getByTestId("username")).not.toBeNull();
		expect(screen.getByTestId("password")).not.toBeNull();
		expect(screen.getByTestId("login-btn")).not.toBeNull();
	});

	it("verify that a user entering an incorrect username or password and clicking submit will see an error on the page", async () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</Provider>
		);

		var username = screen.getByTestId("username");
		var password = screen.getByTestId("password");
		var loginBtn = screen.getByTestId("login-btn");
		fireEvent.change(username, {
			target: { value: "sarahedo" },
		});
		fireEvent.change(password, {
			target: { value: "wrong-password" },
		});
		fireEvent.click(loginBtn);
		expect(screen.getByTestId("alert-error")).toBeInTheDocument();
	});
});
