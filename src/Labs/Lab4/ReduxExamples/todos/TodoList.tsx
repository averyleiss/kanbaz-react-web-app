import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2 className="fw-normal text-start">Todo List</h2>
          <ul className="list-group">
            <TodoForm />
            {todos.map((todo: any) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
          <hr className="mt-4" />
        </div>
      </div>
    </div>
  );
}
