import {
	GET_USERS,
	ADD_QUESTION_TO_USER,
	ADD_ANSWER_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_QUESTION_TO_USER:
			const { userId, questionId } = action;
			return {
				...state,
				[userId]: {
					...state[userId],
					questions: [...state[userId].questions, questionId],
				},
			};
		case ADD_ANSWER_TO_USER:
			const { voterId, qid, answer } = action;
			const answers = {
				...state[voterId].answers,
			};
			answers[qid] = answer;
			return {
				...state,
				[voterId]: {
					...state[voterId],
					answers: answers,
				},
			};
		default:
			return state;
	}
}
