import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container className="p-4">
      
      {/* assignment name field */}
      <Form.Group controlId="wd-name" className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue="A1" />
      </Form.Group>

      {/* description field */}
      <Form.Group controlId="wd-description" className="mb-3">

  <div className="border p-3 rounded bg-white">
    The assignment is <span className="text-danger">available online</span>.
    <div>
    Submit a link to the landing page of your Web application running on
    Netlify.
    </div>
    The landing page should include the following:
    <ul>
      <li>Your full name and section</li>
      <li>Links to each of the lab assignments</li>
      <li>Link to the Kanbas application</li>
      <li>Links to all relevant source code repositories</li>
    </ul>
    The Kanbas application should include a link to navigate back to the following page.
  </div>
</Form.Group>

      {/* points, assignment group, display grade as */}
      {/* points */}
      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control type="number" defaultValue="100" />
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

      {/* submission type */}
      <Form.Group className="mb-3">
        <Row className="align-items-start">
          <Col md={3} className="text-end">
            <Form.Label>Submission Type</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border p-3 rounded">
              <Form.Group controlId="wd-submission-type">
                <Form.Select defaultValue="Online">
                  <option value="Online">Online</option>
                  <option value="On Paper">On Paper</option>
                  <option value="No Submission">No Submission</option>
                </Form.Select>
              </Form.Group>
              {/* online entry options */}
              <Form.Group className="mt-3">
                <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Form.Group>

      {/* assign to + calendar due dates */}
      <Form.Group className="mb-3">
        <Row className="align-items-start">
          <Col md={3} className="text-end">
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border p-3 rounded">
              <Form.Group controlId="wd-assign-to" className="mb-3">
              <Form.Label><strong>Assign To</strong></Form.Label>
                <div className="border rounded p-2 bg-light d-flex align-items-center" style={{ width: "fit-content" }}>
                  <span className="px-2">Everyone</span>
                  <Button variant="light" className="border-0 p-0 ms-2" size="sm">
                    ✖
                  </Button>
                </div>
              </Form.Group>

              <Form.Group controlId="wd-due-date" className="mb-3">
                <Form.Label><strong>Due</strong></Form.Label>
                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label><strong>Available from</strong></Form.Label>
                    <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label><strong>Until</strong></Form.Label>
                    <Form.Control type="datetime-local" defaultValue="2024-05-20T00:00" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Form.Group>

      {/* cancel and aave buttons */}
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </Container>
  );
}
