import { 
    ADD_POST,
    INITIALIZE_POSTS,
    SEARCHING
} from "../actions/types";

const INITIAL_STATE = {
     posts: [],
     search: ""
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case INITIALIZE_POSTS:
            return {...state, posts: action.payload}
        case SEARCHING :
            return {...state, search: action.payload}
        default: 
            return state
    }
}