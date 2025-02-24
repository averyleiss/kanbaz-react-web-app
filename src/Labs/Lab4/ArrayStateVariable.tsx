import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_item, i) => i !== index));
  };

  return (
    <div className="text-left mt-4">
      <h2 className="fw-normal">Array State Variable</h2>

      {/* green add elem btn */}
      <button
        onClick={addElement}
        className="btn btn-success btn-lg mb-3"
      >
        Add Element
      </button>

      {/* list of elems */}
      <ul className="list-group justify-content-left" style={{ maxWidth: "300px" }}>
        {array.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr className="mt-4" />
    </div>
  );
}
