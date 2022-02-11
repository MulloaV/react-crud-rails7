import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPostAsync} from './postSlice';

function PostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  
  return <div className='container container-fluid'>
    <h1>PostForm</h1>
    <form className='form-group form-row'>
      <input
        type="text"
        placeholder='Title'
        className="form-control text-start mb-2"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      <textarea
        className="form-control text-start mb-2"
        placeholder='Body'
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  </div>;
}

export default PostForm;