import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // course id, assignment id

  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid && assignment.course === cid
  ); // get assignment

  if (!assignment) {
    return <p>Assignment not found.</p>;
  }

  return (
    <Container className="p-4">
      {/* assignment name field */}
      <Form.Group controlId="wd-name" className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>

      {/* description field */}
      <Form.Group controlId="wd-description" className="mb-3">
        <div className="border p-3 rounded bg-white">
          <p>{assignment.description}</p>
        </div>
      </Form.Group>

      {/* points */}
      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control type="number" defaultValue={assignment.points} />
          </Col>
        </Row>
      </Form.Group>

      {/* assignment group */}
      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>

      {/* display grade as */}
      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>

      {/* assign to */}
      <Form.Group className="mb-3">
        <Row className="align-items-start">
          <Col md={3} className="text-end">
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border p-3 rounded">
              <Form.Group controlId="wd-assign-to" className="mb-3">
                <Form.Label>
                  <strong>Assign To</strong>
                </Form.Label>
                <div
                  className="border rounded p-2 bg-light d-flex align-items-center"
                  style={{ width: "fit-content" }}
                >
                  <span className="px-2">{assignment.assignTo}</span>
                  <Button variant="light" className="border-0 p-0 ms-2" size="sm">
                    ✖
                  </Button>
                </div>
              </Form.Group>

              <Form.Group controlId="wd-due-date" className="mb-3">
                <Form.Label>
                  <strong>Due</strong>
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  defaultValue={assignment.dueDate}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label>
                      <strong>Available from</strong>
                    </Form.Label>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment.availableFrom}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label>
                      <strong>Until</strong>
                    </Form.Label>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment.availableUntil}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Form.Group>

      {/* cancel and save buttons */}
      <div className="d-flex justify-content-end mt-3">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </Container>
  );
}
