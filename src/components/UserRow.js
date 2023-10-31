// libraries
import { connect } from "react-redux";

// components
import User from "./User";

const UserRow = (props) => {
	const { user } = props;
	return (
		<tr>
			<td>
				<User user={user} view={2} />
			</td>
			<td>{Object.keys(user.answers).length}</td>
			<td>{user.questions.length}</td>
		</tr>
	);
};

const mapStateToProps = ({ users }, { id }) => ({
	user: users[id],
});

export default connect(mapStateToProps)(UserRow);
