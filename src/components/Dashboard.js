// libraries
import { connect } from "react-redux";
import { useState } from "react";

// custom components
import Header from "./Header";
import PollList from "./PollList";

const Dashboard = (props) => {
	const [showNew, setShowNew] = useState(true);
	const newPolls = [];
	const donePolls = [];

	for (let i = 0; i < props.pollIds.length; i++) {
		const poll = props.pollIds[i];
		if (props.answers && props.answers.includes(poll)) {
			donePolls.push(poll);
		} else {
			newPolls.push(poll);
		}
	}

	const toggleQuestions = () => {
		setShowNew(!showNew);
	};

	return (
		<div>
			<Header />
			<section className="page">
				{showNew ? (
					<PollList pollIds={newPolls} title={"Unanswered Questions"} />
				) : (
					<PollList pollIds={donePolls} title={"Answered Questions"} />
				)}

				<button className="btn" onClick={toggleQuestions}>
					{showNew ? "Show Answered" : "Show Unanswered"}
				</button>
			</section>
		</div>
	);
};

const mapStateToProps = ({ polls, users, authedUser }) => ({
	pollIds: Object.keys(polls).sort(
		(a, b) => polls[b].timestamp - polls[a].timestamp
	),
	answers:
		users[authedUser] && users[authedUser].answers
			? Object.keys(users[authedUser].answers)
			: null,
	authedUser: authedUser,
});

export default connect(mapStateToProps)(Dashboard);
