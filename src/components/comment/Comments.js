import React, {useState, useEffect} from 'react'
import {createComment as createCommentApi, getComments as getCommentsApi, deleteComment as deleteCommentApi, updateComment as updateCommentApi} from "../api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Post.css";


const Comments = ({currentUserId,id}) => {
    const[backendComments, setBackendComments] = useState(JSON.parse(localStorage.getItem("comments")) || []);
    const [activeComment, setActiveComment] = useState(null);
    const [comments, setComments] = useState([]);
    const rootComments = backendComments.filter(
        (backendComment)=> backendComment.parentId === null && backendComment.id === id
    );

    const getReplies = commentId =>{
        return backendComments
        .filter(backendComment => backendComment.parentId === commentId)
        .sort((a,b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };

    const addComment = (text, postId, parentId)=>{
        console.log('addComment',text,parentId ,id);
        createCommentApi(text,id, parentId ).then(comment => {
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);
        localStorage.setItem("comments",JSON.stringify([comment, ...backendComments]))
     })
    };
    const deleteComment = (commentId) => {
        if(window.confirm('Are you sure you want to delete this comment?')){
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments= backendComments.filter((backendComment) =>backendComment.id !==commentId);
                setBackendComments(updatedBackendComments)
            });
        }
    };

    const updateComment = (text, commentId) =>{
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId){
                    return {...backendComment, body: text};
                }
                return backendComment
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    }
    useEffect(() => {
        if(localStorage.getItem("comments")){
            setBackendComments(JSON.parse(localStorage.getItem("comments")));
            // console.log(JSON.parse(localStorage.getItem("comments")))
        }
       
    },[])

    // useEffect(() => {
    //     getCommentsApi().then(data => {
    //         setBackendComments(data);
    //     });
    // },[])
  return (
    <div className='comments'>
        <h3 className="comments-title">Comments</h3>
        <div className="comment-form-title">Write comment</div>
        <CommentForm submitLabel="Write" handelSubmit={addComment} />
        <div className="comments-container">
           { rootComments.map(rootComment => (
               <Comment 
                    key={rootComment.id}
                    comment={rootComment}
                    replies={getReplies(rootComment.id)}
                    currentUserId={currentUserId}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                />
           ))}
       
        </div>
    </div>
  )
}

export default Comments;