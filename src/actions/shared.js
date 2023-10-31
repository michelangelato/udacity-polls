import { getInitialData } from "../utils/api";
import { getUsers } from "./users";
import { getPolls } from "./polls";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// const AUTHED_ID = {
// 	id: "sarahedo",
// 	name: "Sarah Edo",
// 	avatarURL: "/img/user1.jpg",
// };
// const AUTHED_ID = {
// 	id: "tylermcginnis",
// 	name: "Tyler McGinnis",
// 	avatarURL: "/img/user2.jpg",
// };
/*const AUTHED_ID = {
	id: "mtsamis",
	name: "",
	avatarURL: "/img/user3.jpg",
}*/
/*const AUTHED_ID = {
	id: "zoshikanlu",
	name: "Zenobia Oshikanlu",
	avatarURL: "/img/user4.jpg",
}*/

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, polls }) => {
			dispatch(getUsers(users));
			dispatch(getPolls(polls));
			//dispatch(setAuthedUser(AUTHED_ID));
			dispatch(hideLoading());
		});
	};
}
