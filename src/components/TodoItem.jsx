/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './TodoItem.module.css'

export default function TodoItem({ itemProp, handleChange, delTodo, setUpdate }) {
  const [editing, setEditing] = useState(false);

  // handle updated
  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false)
    }
  }
  //handle editing
  const handleEditing = () => {
    setEditing(true);
  }

  //style completed task
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input 
        type="checkbox" 
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}/>

        <button onClick={handleEditing}>Edit</button>

        <button onClick={() => delTodo(itemProp.id)}>Delete</button>

        <span style={itemProp.completed ? completedStyle : null}> {itemProp.title}</span>

      </div>
      <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
      onKeyDown={handleUpdatedDone}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
    />
    </li>
  )
}
