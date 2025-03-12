import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }:{ todo: { id: string; title: string } }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <div className="d-flex align-items-center gap-2">
      <button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"
              className="btn btn-danger"
              >
              Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click" 
              className="btn btn-primary"
              >
              Edit </button>
      {todo.title}
      </div>
    </li>
);}
