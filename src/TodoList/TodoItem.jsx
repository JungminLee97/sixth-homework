const TodoItem = ({ completed, text, id, handleDelete, handlesUpdated }) => {
    return (
      <li style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
        <button
          onClick={() => handlesUpdated(id)}
          style={{ width: 60, height: 20 }}
        >
          {completed ? "완료" : "미완료"}
        </button>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제
        </button>
      </li>
    );
  };
  
  export default TodoItem;
  