/*eslint-disable*/
import TodoItem from "./TodoItem";
const TodosList = (props) => {
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <TodoItem 
        key={todo.id} 
        itemProp={todo} 
        setTodos={props.setTodos}/>
      ))}
    </ul>
  );
};
export default TodosList;
