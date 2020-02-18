import React, {useState} from 'react';
import {connect} from 'react-redux';

import {addPost} from '../actions'

function Compose() {

  const [post, setPost] = useState({ title: "", content: "" });
  
  async function handleClick(event) {
    event.preventDefault();
    addPost(post);
    const response = await fetch('/compose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
    if (response.status !== 200) console.log("error");
    else {
      setPost({title: "", content:""})
    }
  }

  function changePost(event) {
    const {name, value} = event.target;
    setPost({...post, [name]: value});
}

  return (
    <div className="content">
    <h1>Compose</h1>
    <form action="/compose" method="post">
      <div className="form-group">
        <label>Title</label>
        <textarea value={post.title} name="title" className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Title" onChange={changePost}></textarea>
      </div>
      <div className="form-group">
        <label>Post</label>
        <textarea value={post.content} name="content" className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your Post..." onChange={changePost}></textarea>
      </div>
      <button type="submit" className="btn btn-dark" onClick={handleClick}>Publish</button>
    </form>
    </div>
  );
}



export default connect(null, {addPost})(Compose);
