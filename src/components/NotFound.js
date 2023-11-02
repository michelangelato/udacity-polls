// libraries
import { Link } from "react-router-dom";

// components
import Header from "./Header";

const NotFound = () => {
	return (
		<div>
			<Header />
			<section className="page not-found">
				<h1>Not found</h1>
				<p>
					We can't find the Resource you looked for, please navigate back to the
					Home.
				</p>
				<Link className="btn" to="/">
					Back to the Home
				</Link>
			</section>
		</div>
	);
};

export default NotFound;
