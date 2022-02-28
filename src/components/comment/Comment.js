import React from 'react';
import { deleteComment, updateComment } from '../api';
import CommentForm from './CommentForm';
import "./Post.css";

const Comment = ({
  comment, 
  replies, 
  currentUserId, 
  deleteComment, 
  activeComment, 
  addComment,
  updateComment,
  setActiveComment,
  parentId = null,
  }) => {
  
  const fiveMinutes = 300000
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canReply = true;
  const canEdit = true;
  const canDelete = true;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === comment.id;
  const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  
  return (
    <div className='comment'>
      <div className="comment-image-container">
        <img src="https://picsum.photos/60" alt="personal" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm 
            submitLabel="Update" 
            hasCancelButton 
            initialText={comment.body} 
            handelSubmit={(text) => updateComment(text, comment.id)} 
            handelCancel ={() => setActiveComment(null)}/>
        )}
        <div className="comment-action">
          { canReply && <div className="comment-action-r" onClick={() => setActiveComment({id: comment.id, type: 'replying'})}>Reply</div>}
          { canEdit && <div className="comment-action-e" onClick={() => setActiveComment({id: comment.id, type: 'editing'})}>Edit</div>}
          { canDelete && <div className="comment-action-d" onClick={() => deleteComment(comment.id)}>Delete</div>}
        </div>
          {isReplying && (
            <CommentForm
              submitLabel="Reply"
              handelSubmit={(text) => addComment(text, replyId)}
              
            />
          )}
         {replies.length > 0 && (
           <div className="replies">
             {replies.map(reply => (
               <Comment 
                  comment={reply} 
                  key={reply.id} 
                  replies={[]} 
                  currentUserId={currentUserId}
                  deleteComment={deleteComment}
                  parentId={comment.id}
                  addComment={addComment}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  updateComment= {updateComment}
                />
             ))}
           </div>
         )}     
      </div>
    </div>
  )
}

export default Comment;