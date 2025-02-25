import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center gap-2">
        <input
          type="text"
          className="form-control"
          defaultValue={todo.title}
          placeholder="Enter a task..."
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        />
        <button
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click"
          className="btn btn-warning fw-normal"
        >
          Update
        </button>
        <button
          onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click"
          className="btn btn-success fw-normal"
        >
          Add
        </button>
      </div>
    </li>
  );
}
