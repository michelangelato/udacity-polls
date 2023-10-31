import { _saveQuestion, _saveQuestionAnswer } from "./_DATA.js";

describe("_DATA", () => {
	it("_saveQuestion - verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function", async () => {
		const question = {
			optionOneText: "Going to work by bike",
			optionTwoText: "Going to work by car",
			author: "sarahedo",
		};
		var result = await _saveQuestion(question);
		expect(result).not.toBeNull();
		expect(result.id).not.toBeNull();
		expect(result.timestamp).not.toBeNull();
		expect(result.author).toEqual("sarahedo");
		expect(result.optionOne).not.toBeNull();
		expect(result.optionOne.votes).toEqual([]);
		expect(result.optionOne.text).toEqual("Going to work by bike");
		expect(result.optionTwo).not.toBeNull();
		expect(result.optionTwo.votes).toEqual([]);
		expect(result.optionTwo.text).toEqual("Going to work by car");
	});

	it("_saveQuestion - verify that an error is returned if incorrect data is passed to the function", async () => {
		const question = {
			wrongData: "Test",
		};
		await expect(_saveQuestion(question)).rejects.toEqual(
			"Please provide optionOneText, optionTwoText, and author"
		);
	});

	it("_saveQuestionAnswer - verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed to the function", async () => {
		const questionAnswer = {
			authedUser: "sarahedo",
			qid: "vthrdm985a262al8qx3do",
			answer: "optionOne",
		};
		var result = await _saveQuestionAnswer(questionAnswer);
		expect(result).toEqual(true);
	});

	it("_saveQuestionAnswer - verify that an error is returned if incorrect data is passed to the function", async () => {
		const questionAnswer = {
			wrongData: "Test",
		};
		await expect(_saveQuestionAnswer(questionAnswer)).rejects.toEqual(
			"Please provide authedUser, qid, and answer"
		);
	});
});
