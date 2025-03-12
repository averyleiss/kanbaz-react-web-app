import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div className="text-left mt-4">
      <h2 className="fw-normal">Counter: <span>{count}</span></h2>
      <div className="d-flex justify-content-left gap-2 mt-3">
        <button
          onClick={() => setCount(count + 1)}
          id="wd-counter-up-click"
          className="btn btn-success btn-lg"
        >
          Up
        </button>
        <button
          onClick={() => setCount(count - 1)}
          id="wd-counter-down-click"
          className="btn btn-danger btn-lg"
        >
          Down
        </button>
      </div>
      <hr className="mt-4" />
    </div>
  );
}
