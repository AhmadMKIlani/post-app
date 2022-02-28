import React, {useState,useEffect} from 'react'
import faker from '@faker-js/faker';
import UsersComments from './comment/Comments';
import "./card.css";
const Comments = (props) => {
    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem("posts");
        if (savedComments) {
          // return the parsed JSON object back to a javascript object
          return JSON.parse(savedComments);
          // otherwise
        } else {
          // return an empty array
          return [];
        }
      });
      const users = JSON.parse(localStorage.getItem("users"));
      // console.log(users);
      // console.log(users.username);
      const [comment, setComment] = useState("");
      useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(comments));
      }, [comments]);
      function handleInputChange(e) {
        // set the new state value to what's currently in the input box
        setComment(e.target.value);
      }
      function handleFormSubmit(e) {
        e.preventDefault();
        if (comment !== "") {
          setComments([
            ...comments,
            {
              id: comments.length + 1,
              text: comment.trim(),
            },
          ]);
        }
    
        // clear out the input box
        setComment("");
      }
      const user = users.filter((ele) => {
        console.log(ele.username);
        return ele.username;
      })[0];
    
  return (
      
    <div className='container comments'>
        <form className="post-form" onSubmit={handleFormSubmit}>
        <div className="field">
          <input className='posts'
            name="posts"
            type="text"
            placeholder="Create a new post and press enter"
            value={comment}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <h1 className='post-header' >My Posts</h1>
        {comments.map((comment) => (
        <div className="posts-body" key={comment.id}>
            
            <a href="google.com" className='Avatar'>
                <img src={faker.image.avatar()} alt="avatar"/>
            </a>
            <div className="post-content">
            <div className="post-text">{comment.text}</div>
                <div className="metadeta">
                    <span className="date">{props.date}</span>
                </div>
                
                <UsersComments id={comment.id}/>
            </div>
        </div>
        ))}

    </div>
  )
}

export default Comments;
