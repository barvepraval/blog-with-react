import { 
    ADD_POST,
    INITIALIZE_POSTS,
    SEARCHING
} from "./types";

import {store} from '../store/store';


export function addPost(post) {
    store.dispatch({ type: ADD_POST, payload: post })
}

export function initializePosts(posts) {
    store.dispatch({ type: INITIALIZE_POSTS, payload: posts})
}

export function search(text) {
    store.dispatch({ type: SEARCHING, payload: text });
}
