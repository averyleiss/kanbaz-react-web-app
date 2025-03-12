import "bootstrap/dist/css/bootstrap.min.css";

export default function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div className="text-left mt-4">
      <h3 className="fw-normal">Counter: {counter}</h3>
      <div className="d-flex justify-content-left gap-2 mt-3">
        <button
          onClick={() => setCounter(counter + 1)}
          id="wd-increment-child-state-click"
          className="btn btn-success btn-lg"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          id="wd-decrement-child-state-click"
          className="btn btn-danger btn-lg"
        >
          Decrement
        </button>
      </div>
      <hr className="mt-4" />
    </div>
  );
}
