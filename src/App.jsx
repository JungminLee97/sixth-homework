import RootLayout from "./layout/RootLayout";
import TodoProvider from "./provider/TodoProvider";
import TodoContainer from "./TodoList/TodoContainer";

const TodoListInit = () => {
  return (
    <TodoProvider>
      <RootLayout>
        <TodoContainer />
      </RootLayout>
    </TodoProvider>
  );
};

export default TodoListInit;
