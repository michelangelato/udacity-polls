import PollItem from "./PollItem";

const PollList = (props) => {
	return (
		<div className="card">
			<div className="card-title">
				<h1>{props.title}</h1>
			</div>
			<div className="card-body">
				<ul className="poll-list">
					{props.pollIds.map((id) => (
						<li key={id} className="poll-item">
							<PollItem id={id} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PollList;
