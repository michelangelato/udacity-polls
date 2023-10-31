import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav">
			<ul className="nav-menu">
				<li>
					<NavLink exact="true" to="/" className="nav-menu-link">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/leaderboard" className="nav-menu-link">
						Leaderboard
					</NavLink>
				</li>
				<li>
					<NavLink to="/add" className="nav-menu-link">
						New
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
