/*eslint-disable*/
import TodoItem from "./TodoItem";
const TodosList = (props) => {
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo}/>
      ))}
    </ul>
  );
};
export default TodosList;
