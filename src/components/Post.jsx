import React from 'react';
import { connect } from 'react-redux';

import reactStringReplace from 'react-string-replace';

function Post(state, props) {
    
    return (
        <div>
            <h1>{state.title}</h1>
            <p>
                {   
                    state.posts.search.trim() !== '' ?
                    reactStringReplace(state.content, state.posts.search, (match, i) => (
                        <mark key={i}>{match}</mark>
                    ))
                    :
                    state.content
                 }
            </p>
        </div> 
    );
}

const mapStateToProps = state => {
    return {
      posts: state.posts
    };
  };

export default connect(mapStateToProps, null)(Post);
