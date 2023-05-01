/*eslint-disable*/
export default function TodoItem(props) {
  return (
    
    <li>
      <input type="checkbox" />
      {props.itemProp.title}
    </li>
  )
}
