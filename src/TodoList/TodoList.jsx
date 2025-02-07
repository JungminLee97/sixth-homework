import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDelete, handlesUpdated }) => {
  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>

      <TodoListContent>
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
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;
