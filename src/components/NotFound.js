import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section className="page">
			<h1>Not found</h1>
			<p>
				We can't find the Resource you looked for, please navigate back to the
				Home.
			</p>
			<Link className="btn" to="/">
				Back to the Home
			</Link>
		</section>
	);
};

export default NotFound;
