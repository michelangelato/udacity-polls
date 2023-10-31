import { GET_POLLS, ADD_POLL, ANSWER_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
	switch (action.type) {
		case GET_POLLS:
			return {
				...state,
				...action.polls,
			};
		case ADD_POLL:
			const { poll } = action;
			return {
				...state,
				[poll.id]: poll,
			};
		case ANSWER_POLL:
			const { userId, qid, answer } = action;
			const optionOne = {
				...state[qid].optionOne,
			};
			const optionTwo = {
				...state[qid].optionTwo,
			};
			if (answer === "optionOne") {
				optionOne.votes.push(userId);
			} else {
				optionTwo.votes.push(userId);
			}
			return {
				...state,
				[qid]: {
					...state[qid],
					optionOne: optionOne,
					optionTwo: optionTwo,
				},
			};
		default:
			return state;
	}
}
