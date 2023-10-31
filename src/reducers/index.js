// libraries
import { combineReducers } from "redux";

// reducers
import { loadingBarReducer } from "react-redux-loading-bar";
import authedUser from "./authedUser";
import polls from "./polls";
import users from "./users";

export default combineReducers({
	authedUser,
	polls,
	users,
	loadingBar: loadingBarReducer,
});
