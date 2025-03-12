import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  // Get assignment (if editing)
  const existingAssignment = assignments.find((a: any) => a._id === aid && a.course === cid);

  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: uuidv4(),
      title: "",
      description: "",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",  // ✅ New field added
      course: cid,
    }
  );

  const handleChange = (field: string, value: string | number) => {
    setAssignment((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container className="p-4">
      {/* Assignment Name Field */}
      <Form.Group controlId="wd-name" className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control
          type="text"
          value={assignment.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </Form.Group>

      {/* Description Field */}
      <Form.Group controlId="wd-description" className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={assignment.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group className="mb-3">
        <Row>
          <Col md={3} className="text-end">
            <Form.Label>Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="number"
              value={assignment.points}
              onChange={(e) => handleChange("points", Number(e.target.value))}
            />
          </Col>
        </Row>
      </Form.Group>

      {/* Due Date */}
      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="datetime-local"
          value={assignment.dueDate}
          onChange={(e) => handleChange("dueDate", e.target.value)}
        />
      </Form.Group>

      {/* Available Until Date (NEW) */}
      <Form.Group className="mb-3">
        <Form.Label>Available Until</Form.Label>
        <Form.Control
          type="datetime-local"
          value={assignment.availableUntil}
          onChange={(e) => handleChange("availableUntil", e.target.value)}
        />
      </Form.Group>

      {/* Cancel and Save Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <Button variant="secondary" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave} className="ms-2">
          Save
        </Button>
      </div>
    </Container>
  );
}
