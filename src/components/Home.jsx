import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { initializePosts } from '../actions'
import Post from "./Post"
 
function Home(state) {

    const posts = state.posts.posts

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('./posts')
            const readable = await response.json()
            if(readable.length !== posts.length) {
                console.log(posts.length)
                console.log(readable.length)
                initializePosts(readable);
            }
        }
        fetchPosts();
    })

    return (
        <div className="content">
            {
                posts.map((item, index )=> {
                        return <Post title={item.title} content={item.content} key={item._id} />
                    }
                )
            }
        </div>
        
    );

}

const mapStateToProps = state => {
    return {
      posts: state.posts
    };
  };
  
export default connect(mapStateToProps, null)(Home);

