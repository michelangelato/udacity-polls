// liberaries
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// custom functions
import { setAuthedUser } from "../actions/authedUser";

// custom components
import Nav from "./Nav";
import User from "./User";

const Header = (props) => {
	const navigate = useNavigate();
	const { user, dispatch } = props;

	const handleLogout = (e) => {
		e.preventDefault();

		// logout user
		dispatch(setAuthedUser(null));
		navigate("/");
	};

	return (
		<header className="header">
			{user ? (
				<div className="nav-auth">
					<User user={user} view={1} />
					<button className="btn-logout" onClick={handleLogout}>
						Logout
					</button>
				</div>
			) : (
				""
			)}
			<Nav />
		</header>
	);
};

const mapStateToProps = ({ authedUser, users }) => ({
	user: users[authedUser],
});

export default connect(mapStateToProps)(Header);
