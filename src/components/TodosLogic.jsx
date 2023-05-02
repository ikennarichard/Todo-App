import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: crypto.randomUUID(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

    //add item to todos
    const addTodoItem = (title) => {
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

  //delete todo
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id )])
  }

  //toggle completed 
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  // update edited todo
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    )
  }

  return (
    <div>
    <InputTodo addTodoItem={addTodoItem}/>
    <TodosList 
    todosProps={todos} 
    handleChange={handleChange}
    delTodo={delTodo}
    setUpdate={setUpdate}/>
    </div>
  );
};
export default TodosLogic;

