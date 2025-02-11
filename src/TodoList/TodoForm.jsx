import { useContext, useState } from "react";
import styled from "styled-components";
import { ActionButton } from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodos } = useContext(TodoContext);
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
    <TodoFormWrapper onSubmit={handleSubmit}>
      <TodoFormInput
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="할 일을 입력하세요"
      />
      <SubmitButton type="submit" $bgColor="#582be6">
        제출하기
      </SubmitButton>
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TodoFormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  flex: 8;

  &::placeholder {
    color: #aaa;
  }
  &:focus {
    border-color: #582be6;
    outline: none;
  }
`;

const SubmitButton = styled(ActionButton)`
  flex: 1;
  text-align: center;
`;

export default TodoForm;
