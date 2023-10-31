// libraries
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

// custom functions
import { handleInitialData } from "../actions/shared";

// custom components
import Login from "./Login";
import Dashboard from "./Dashboard";
import PollVote from "./PollVote";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import NotFound from "./NotFound";

function App(props) {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props]);

	return (
		<Fragment>
			<LoadingBar />
			<div className="App">
				{props.loading === true ? (
					""
				) : props.authenticated ? (
					<Routes>
						<Route path="/" exact element={<Dashboard />} />
						<Route path="/questions/:id" element={<PollVote />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="/add" element={<NewPoll />} />
						<Route path="/notfound" element={<NotFound />} />
						<Route path="*" component={<NotFound />} />
					</Routes>
				) : (
					<Login />
				)}
			</div>
		</Fragment>
	);
}

const mapStateToProps = ({ polls, authedUser }) => ({
	loading: polls === null,
	authenticated: authedUser !== null,
});

export default connect(mapStateToProps)(App);
