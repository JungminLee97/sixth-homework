import { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    addTodos(newTodo);

    setNewTodo("");
  };

  const handleInputChange = (event) => setNewTodo(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleInputChange}></input>
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
