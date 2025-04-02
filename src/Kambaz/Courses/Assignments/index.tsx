import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, InputGroup, Form, Button, Row, Col, Modal } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { deleteAssignment as deleteAssignmentAction, setAssignments } from "./reducer";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  useEffect(() => {
    const loadAssignments = async () => {
      if (!cid) return;
      const assignments = await assignmentsClient.findAssignmentsForCourse(cid);
      dispatch(setAssignments(assignments));
    };
    loadAssignments();
  }, [cid]);

  const courseAssignments = assignments.filter((a: any) => a.course === cid);

  const handleDeleteClick = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (selectedAssignment) {
      try {
        await assignmentsClient.deleteAssignment(selectedAssignment._id); 
        dispatch(deleteAssignmentAction(selectedAssignment._id));        
      } catch (err) {
        console.error("Delete failed", err);
      }
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="container-fluid p-4">
      <Row>
        <Col md={9}>
          <div className="d-flex justify-content-between mb-4">
            <InputGroup className="w-50">
              <InputGroup.Text>
                <CiSearch />
              </InputGroup.Text>
              <Form.Control placeholder="Search..." id="wd-search-assignment" />
            </InputGroup>
            <div>
              <Button variant="secondary" className="me-2">
                <FaPlus className="me-2" /> Group
              </Button>
              {(currentUser.role === "FACULTY" || currentUser.role === "TA") && (
                <Button
                  variant="danger"
                  onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
                >
                  <FaPlus className="me-2" /> Assignment
                </Button>
              )}
            </div>
          </div>

          <ListGroup className="rounded-0" id="wd-assignments">
            {courseAssignments.length > 0 ? (
              <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                  <div>
                    <BsGripVertical className="me-2 fs-3" /> <IoMdArrowDropdown /> ASSIGNMENTS
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="border rounded-pill px-4 py-1 text-muted">40% of Total</span>
                    <FaPlus className="ms-3" />
                    <FaEllipsisV className="ms-3" />
                  </div>
                </div>

                <ListGroup className="wd-lessons rounded-0">
                  {courseAssignments.map((assignment: any) => (
                    <ListGroup.Item
                      key={assignment._id}
                      className="wd-lesson p-3 ps-1 d-flex align-items-center"
                    >
                      <BsGripVertical className="me-3 fs-3 text-secondary" />
                      <LuNotebookPen className="me-4 fs-3 text-success" />
                      <div className="flex-grow-1">
                        <div className="fw-bold">
                          <a
                            href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                            className="text-decoration-none text-black"
                          >
                            {assignment.title}
                          </a>
                        </div>
                        <div className="text-muted">
                          <strong>Due:</strong> {assignment.dueDate} | <strong>Available Until:</strong> {assignment.availableUntil} | {assignment.points} pts
                        </div>
                      </div>
                      {(currentUser.role === "FACULTY" || currentUser.role === "TA") && (
                        <Button
                          variant="link"
                          className="text-danger p-3 border-0 ms-3"
                          onClick={() => handleDeleteClick(assignment)}
                        >
                          <FaTrash className="fs-6" />
                        </Button>
                      )}
                      <LessonControlButtons className="ms-auto" />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            ) : (
              <p className="ps-3">No assignments available for this course.</p>
            )}
          </ListGroup>
        </Col>
      </Row>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete **{selectedAssignment?.title}**? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
