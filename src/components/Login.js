import { useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const withRouter = (Component) => {
	const ComponentWithRouterProp = (props) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	};

	return ComponentWithRouterProp;
};

const Login = (props) => {
	const { users, dispatch } = props;
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(false);

	const handleChangeUsername = (e) => {
		const username = e.target.value;
		setShowError(false);
		setUsername(username);
	};

	const handleChangePassword = (e) => {
		const password = e.target.value;
		setShowError(false);
		setPassword(password);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (users[username] != null && users[username].password === password) {
			// login successful
			dispatch(setAuthedUser(username));
			navigate(window.location.pathname);
		} else {
			// login failed
			setShowError(true);
			setUsername("");
			setPassword("");
		}
	};

	return (
		<div className="login">
			<h1 className="app-title">Udacity Polls</h1>
			{showError ? (
				<div className="alert-error" data-testid="alert-error">
					Invalid credentials. Try again.
				</div>
			) : (
				""
			)}
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group">
					<label className="form-label" htmlFor="username">
						Username
					</label>
					<input
						className="form-input"
						id="username"
						name="username"
						data-testid="username"
						type="text"
						value={username}
						onChange={handleChangeUsername}
					/>
				</div>
				<div className="form-group">
					<label className="form-label" htmlFor="password">
						Password
					</label>
					<input
						className="form-input"
						id="password"
						name="password"
						type="password"
						data-testid="password"
						value={password}
						onChange={handleChangePassword}
					/>
				</div>
				<div>
					<button className="btn btn-100" type="submit" data-testid="login-btn">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = ({ users, authedUser }) => ({
	loading: users === null,
	authenticated: authedUser !== null,
	users: users,
});

export default withRouter(connect(mapStateToProps)(Login));
