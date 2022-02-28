import React, {useState} from 'react'
import "./Post.css";

const CommentForm = ({handelSubmit,submitLabel,hasCancelButton = false ,initialText = '',handleCancel}) => {

  const [text, setText]= useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = event =>{
    event.preventDefault()
    handelSubmit(text)
    setText("");
    console.log(text);
    const comments = JSON.parse(localStorage.getItem("comments"));
    if(!comments){
        localStorage.setItem("comments",JSON.stringify([{comment:text,  user:"user", date:"2/2/1991"}]))
    }else{
      localStorage.setItem("comments",JSON.stringify([...comments,{comment:text, user:"user", date:"2/2/1991"}]))
    }
  }


  return (
    <form onSubmit={onSubmit}>
      <textarea 
        className='comment-form-textarea' 
        value={text} 
        onChange={(e)=> setText(e.target.value)} cols="30" rows="10"/>
      <button className='comment-form-button' disabled = {isTextareaDisabled} >{submitLabel}</button>
      {hasCancelButton && (
        <button type='button' className='comment-form-button comment-form-cancel-button' onClick={handleCancel}>Cancel</button>
      )}
    </form>
  )
}

export default CommentForm;