import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center text-start">
      <span>{todo.title}</span>
      <div>
        <button
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
          className="btn btn-primary btn-sm me-2 fw-normal"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          className="btn btn-danger btn-sm fw-normal"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
