import "bootstrap/dist/css/bootstrap.min.css";

const hello = () => {
  alert("Hello World!");
};

const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};

export default function ClickEvent() {
  return (
    <div className="text-left mt-4">
      <h2 className="fw-normal">Click Event</h2>
      <div className="d-flex flex align-items-left gap-2 mt-3">
        <button
          onClick={hello}
          id="wd-hello-world-click"
          className="btn btn-success btn-lg"
        >
          Hello World!
        </button>
        <button
          onClick={() => lifeIs("Good!")}
          id="wd-life-is-good-click"
          className="btn btn-success btn-lg"
        >
          Life is Good!
        </button>
        <button
          onClick={() => {
            hello();
            lifeIs("Great!");
          }}
          id="wd-life-is-great-click"
          className="btn btn-success btn-lg"
        >
          Life is Great!
        </button>
      </div>
      <hr className="mt-4" />
    </div>
  );
}
