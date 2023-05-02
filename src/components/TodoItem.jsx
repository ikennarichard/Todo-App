/* eslint-disable react/prop-types */
import styles from './TodoItem.module.css'

export default function TodoItem({ itemProp, handleChange, delTodo }) {
  return (
    
    <li className={styles.item}>
      <div className={styles.content}>
        <input 
        type="checkbox" 
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}/>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>
    </li>
  )
}
