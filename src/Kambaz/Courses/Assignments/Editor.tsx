import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment as updateAssignmentAction } from "./reducer";
import { useState, useEffect } from "react";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  const isEditing = !!aid;

  useEffect(() => {
    const loadAssignment = async () => {
      const localAssignment = assignments.find(
        (a: any) => a._id === aid && a.course === cid
      );

      if (localAssignment) {
        setAssignment(localAssignment);
      } else if (aid) {
        try {
          const fetched = await assignmentClient.findAssignmentById(aid);
          setAssignment(fetched);
        } catch (err) {
          console.error("Failed to fetch assignment:", err);
        }
      }
    };

    loadAssignment();
  }, [aid, cid, assignments]);

  const handleChange = (field: string, value: string | number) => {
    setAssignment((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!cid) return;

    if (isEditing) {
      const updated = await assignmentClient.updateAssignment(assignment._id, assignment);
      dispatch(updateAssignmentAction(updated));
    } else {
      const created = await assignmentClient.createAssignment(cid, assignment);
      dispatch(addAssignment(created));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container className="p-4">
      <Form.Group controlId="wd-name" className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control
          type="text"
          value={assignment.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="wd-description" className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={assignment.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </Form.Group>

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

      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="datetime-local"
          value={assignment.dueDate}
          onChange={(e) => handleChange("dueDate", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Available Until</Form.Label>
        <Form.Control
          type="datetime-local"
          value={assignment.availableUntil}
          onChange={(e) => handleChange("availableUntil", e.target.value)}
        />
      </Form.Group>

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
