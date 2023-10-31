// libraries
import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// custom functions
import { formatDate } from "../utils/helpers";
import { handleAnswerPoll } from "../actions/polls";

// custom components
import Header from "./Header";
import User from "./User";

const withRouter = (Component) => {
	const ComponentWithRouterProp = (props) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	};

	return ComponentWithRouterProp;
};

const PollVote = (props) => {
	const { poll, author, voter, dispatch } = props;
	const navigate = useNavigate();

	useEffect(() => {
		if (!poll) {
			navigate("/notfound");
		}
	}, [navigate, poll]);

	const selectOptionOne = (e) => {
		e.preventDefault();
		dispatch(handleAnswerPoll(poll.id, "optionOne"));
		//navigate("/");
	};

	const selectOptionTwo = (e) => {
		e.preventDefault();
		dispatch(handleAnswerPoll(poll.id, "optionTwo"));
		//navigate("/");
	};

	const getPercentageOne = () => {
		return (
			(
				(poll.optionOne.votes.length /
					(poll.optionOne.votes.length + poll.optionTwo.votes.length)) *
				100
			).toFixed(1) + "%"
		);
	};

	const getPercentageTwo = () => {
		return (
			(
				(poll.optionTwo.votes.length /
					(poll.optionOne.votes.length + poll.optionTwo.votes.length)) *
				100
			).toFixed(1) + "%"
		);
	};

	return (
		<div>
			<Header />
			{!poll ? (
				""
			) : (
				<div className="poll-prompt">
					<div>
						<p>
							<strong>Poll by {author.id}</strong>
						</p>
						<User user={author} view={3} />
					</div>
					<p className="text-secondary">{formatDate(poll.timestamp)}</p>
					<h2>Would you Rather</h2>
					{voter.answers[poll.id] ? (
						<div className="poll-options">
							<div className="poll-option">
								{poll.optionOne.text}
								<hr />
								<p>
									{poll.optionOne.votes.length} votes ({getPercentageOne()})
								</p>
								<ol className="voters">
									{poll.optionOne.votes.map((vote) => (
										<li key={vote}>
											{vote === voter.id ? <strong>{vote}</strong> : vote}
										</li>
									))}
								</ol>
							</div>
							<div className="poll-option">
								{poll.optionTwo.text}
								<hr />
								<p>
									{poll.optionTwo.votes.length} votes ({getPercentageTwo()})
								</p>
								<ol className="voters">
									{poll.optionTwo.votes.map((vote) => (
										<li key={vote}>
											{vote === voter.id ? <strong>{vote}</strong> : vote}
										</li>
									))}
								</ol>
							</div>
						</div>
					) : (
						<div className="poll-options">
							<div className="poll-option">
								{poll.optionOne.text}
								<button className="btn" onClick={selectOptionOne}>
									Select
								</button>
							</div>
							<div className="poll-option">
								{poll.optionTwo.text}
								<button className="btn" onClick={selectOptionTwo}>
									Select
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = ({ polls, users, authedUser }, props) => {
	const { id } = props.router.params;
	return {
		poll: polls[id],
		author: polls[id] ? users[polls[id].author] : null,
		voter: users[authedUser],
	};
};

export default withRouter(connect(mapStateToProps)(PollVote));
