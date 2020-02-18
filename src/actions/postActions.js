import { 
    ADD_POST,
    INITIALIZE_POSTS
} from "./types";

import {store} from '../store/store';


export function addPost(post) {
    store.dispatch({ type: ADD_POST, payload: post })
}

export function initializePosts(posts) {
    store.dispatch({ type: INITIALIZE_POSTS, payload: posts})
}
