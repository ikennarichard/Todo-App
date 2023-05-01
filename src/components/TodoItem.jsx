/*eslint-disable*/
export default function TodoItem({ itemProp, handleChange }) {
  return (
    
    <li>
      <input 
      type="checkbox" 
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}/>
      {itemProp.title}
    </li>
  )
}
