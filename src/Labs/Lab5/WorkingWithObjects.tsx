import { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
        });
    const [module, setModule] = useState({
        id: "M101",
        name: "Web Dev Basics",
        description: "Intro to Web",
        course: "CS1234",
        });
    
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
        <h3>Working With Objects</h3>

        <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })}/>
        <hr />

        <h4>Retrieving Objects</h4>
        <a id="wd-retrieve-assignments" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment`}>
            Get Assignment
        </a><hr/>

        <h4>Retrieving Properties</h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment/title`}>
            Get Title
        </a><hr/>

        <h4>Modifying Assignment Title</h4>
            <FormControl
                className="w-75 mb-2"
                value={assignment.title}
                onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
                }
            />
            <a
                className="btn btn-primary mb-3"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
                Update Title
        </a>

        <h4>Modifying Assignment Score</h4>
            <FormControl
                type="number"
                className="w-75 mb-2"
                value={assignment.score}
                onChange={(e) =>
                setAssignment({ ...assignment, score: Number(e.target.value) })
                }
            />
            <a
                className="btn btn-primary mb-3"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
                Update Score
        </a>

        <h4>Modifying Assignment Completion</h4>
            <FormCheck
                label="Completed"
                checked={assignment.completed}
                onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
                }
            />
            <a
                className="btn btn-success mb-3"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed
        </a>

        <h4>Retrieving Assignment</h4>
            <a className="btn btn-primary mb-3" href={ASSIGNMENT_API_URL}>
                Get Assignment
        </a>

        <h4>Retrieving Assignment Title</h4>
            <a className="btn btn-primary mb-3" href={`${ASSIGNMENT_API_URL}/title`}>
                Get Title
         </a>

      <hr />

      <h3>Working With Modules</h3>
      <FormControl
        className="w-75 mb-2"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        className="btn btn-warning mb-2"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>

      <FormControl
        className="w-75 mb-2"
        value={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        className="btn btn-warning mb-2"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>

      <h4>Retrieving Module</h4>
      <a className="btn btn-warning mb-2" href={MODULE_API_URL}>
        Get Module
      </a>

      <h4>Retrieving Module Name</h4>
      <a className="btn btn-warning mb-2" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
    </div>
  );
}
