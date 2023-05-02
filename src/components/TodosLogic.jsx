import { useState, useEffect } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }  

  useEffect(() => {
    //add todo items to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


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

