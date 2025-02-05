import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDelete, handlesUpdated }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          id={id}
          completed={completed}
          text={text}
          handleDelete={handleDelete}
          handlesUpdated={handlesUpdated}
        />
      ))}
    </ul>
  );
};

export default TodoList;
