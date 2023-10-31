// libraries
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddPoll } from "../actions/polls";

// custom components
import Header from "./Header";

const NewPoll = (props) => {
	const { dispatch } = props;
	const navigate = useNavigate();
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");

	const handleOption1 = (e) => {
		const option1 = e.target.value;
		setOption1(option1);
	};

	const handleOption2 = (e) => {
		const option2 = e.target.value;
		setOption2(option2);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (option1 !== "" && option2 !== "") {
			dispatch(handleAddPoll(option1, option2));
			navigate("/");
		}
	};

	return (
		<div>
			<Header />
			<div className="poll-new">
				<h2>Would you Rather</h2>
				<p className="text-secondary">Create your own poll</p>
				<form className="form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label className="form-label" htmlFor="option-1">
							First Option
						</label>
						<input
							className="form-input"
							id="option-1"
							name="option-1"
							data-testid="option-1"
							placeholder="First Option"
							type="text"
							value={option1}
							onChange={handleOption1}
						/>
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="option-2">
							Second Option
						</label>
						<input
							className="form-input"
							id="option-2"
							name="option-2"
							data-testid="option-2"
							placeholder="Second Option"
							type="text"
							value={option2}
							onChange={handleOption2}
						/>
					</div>
					<div className="form-group">
						<button
							className="btn btn-100"
							data-testid="create-btn"
							type="submit"
							disabled={option1 === "" && option2 === ""}
						>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default connect()(NewPoll);
