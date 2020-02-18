import { 
    ADD_POST,
    INITIALIZE_POSTS
} from "../actions/types";

const INITIAL_STATE = {

     posts: [],
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case INITIALIZE_POSTS:
            return {...state, posts: action.payload}
        default: 
            return state
    }
}