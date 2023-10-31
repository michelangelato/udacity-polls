// libraries
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// custom functions
import { formatDate } from "../utils/helpers";

const Poll = (props) => {
	const { poll } = props;
	return (
		<div>
			<p>
				<strong>{poll ? poll.author : "-"}</strong>
			</p>
			<p className="text-secondary">
				{poll ? formatDate(poll.timestamp) : "-"}
			</p>
			<Link className="btn" to={`/questions/${poll ? poll.id : ""}`}>
				Show
			</Link>
		</div>
	);
};

const mapStateToProps = ({ polls }, { id }) => ({
	poll: polls[id],
});

export default connect(mapStateToProps)(Poll);
