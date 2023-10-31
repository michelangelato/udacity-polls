import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestionToUser, addAnswerToUser } from "./users";

export const GET_POLLS = "GET_POLLS";
export const ADD_POLL = "ADD_POLL";
export const ANSWER_POLL = "ANSWER_POLL";

export function getPolls(polls) {
	return {
		type: GET_POLLS,
		polls,
	};
}

function addPoll(poll) {
	return {
		type: ADD_POLL,
		poll,
	};
}

export function handleAddPoll(option1, option2) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestion({
			optionOneText: option1,
			optionTwoText: option2,
			author: authedUser,
		})
			.then((poll) => {
				dispatch(addPoll(poll));
				dispatch(addQuestionToUser(poll.author, poll.id));
			})
			.then(() => dispatch(hideLoading()));
	};
}

function answerPoll(userId, qid, answer) {
	return {
		type: ANSWER_POLL,
		userId,
		qid,
		answer,
	};
}

export function handleAnswerPoll(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			authedUser: authedUser,
			qid: qid,
			answer: answer,
		})
			.then((success) => {
				if (success) {
					dispatch(answerPoll(authedUser, qid, answer));
					dispatch(addAnswerToUser(authedUser, qid, answer));
				}
			})
			.then(() => dispatch(hideLoading()));
	};
}
