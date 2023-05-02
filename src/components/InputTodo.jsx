/* eslint-disable react/prop-types */
import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('')

  const handleChange =(e) => {
    setTitle(e.target.value);
  }

  const handleSubmit =(e) => {
    if (title.trim()) {
    e.preventDefault();
    addTodoItem(title);
    setTitle('')
    setMessage('')
    }else {
      setMessage('Please add an item')
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>

      <input 
      type="text" 
      placeholder="Add Todo..." 
      value={title}
      onChange={handleChange}/>

      <button>Submit</button>
    </form>
    <span>{message}</span>
    </>
  );
};
export default InputTodo;
