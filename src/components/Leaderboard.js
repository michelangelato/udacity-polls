// libraries
import { connect } from "react-redux";

// components
import Header from "./Header";
import UserRow from "./UserRow";

const Leaderboard = (props) => {
	const { leaderboard } = props;
	return (
		<div>
			<Header />
			<table className="table leaderboard">
				<thead className="table-head">
					<tr>
						<th>Users</th>
						<th>Answered</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody>
					{leaderboard.map((userId) => (
						<UserRow key={userId} id={userId} />
					))}
				</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = ({ users }) => ({
	leaderboard: Object.keys(users).sort((a, b) => {
		const aAnswers = Object.keys(users[a].answers).length;
		const bAnswers = Object.keys(users[b].answers).length;
		if (aAnswers < bAnswers) {
			return 1;
		} else if (aAnswers > bAnswers) {
			return -1;
		} else {
			const aQuestions = users[a].questions.length;
			const bQuestions = users[b].questions.length;
			if (aQuestions < bQuestions) {
				return -1;
			} else if (aQuestions > bQuestions) {
				return 1;
			} else {
				return 0;
			}
		}
	}),
});

export default connect(mapStateToProps)(Leaderboard);
