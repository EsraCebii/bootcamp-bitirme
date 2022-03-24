import { combineReducers } from "redux";
import { BoardState } from "../types/boards";
import { CardState } from "../types/card";
import { CheckListState } from "../types/checkList";
import { MemberState } from "../types/members";
import { UserState } from "../types/user";
import boardReducer from "./reducers/boardReducer";
import cardReducer from "./reducers/cardReducer";
import memberReducer from "./reducers/memberReducer";
import userReducer from "./reducers/userReducer";
import checkListReducer from "./reducers/checkListReducer"
import { CommentState } from "../types/comments";
import commentReducer from "./reducers/commentReducer";

export interface AppState {
    user: UserState;
    boards: BoardState;
    members: MemberState;
    cards: CardState;
    checkLists: CheckListState;
    comments: CommentState;
  
}

const rootReducer = combineReducers<AppState>({
    user: userReducer,
    boards: boardReducer,
    members: memberReducer,
    cards: cardReducer,
    checkLists: checkListReducer,
    comments: commentReducer,

})

export default rootReducer;



