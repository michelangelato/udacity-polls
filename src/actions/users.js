export const GET_USERS = "GET_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";

export function getUsers(users) {
	return {
		type: GET_USERS,
		users,
	};
}

export function addQuestionToUser(userId, questionId) {
	return {
		type: ADD_QUESTION_TO_USER,
		userId,
		questionId,
	};
}

export function addAnswerToUser(voterId, qid, answer) {
	return {
		type: ADD_ANSWER_TO_USER,
		voterId,
		qid,
		answer,
	};
}
