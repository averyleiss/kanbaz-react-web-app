import { useParams } from "react-router";
import { ListGroup, InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid); // Filter assignments by cid

  return (
    <div className="container-fluid p-4">
      <Row>
        <Col md={9}>
          {/* top buttons */}
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
              <Button variant="danger">
                <FaPlus className="me-2" /> Assignment
              </Button>
            </div>
          </div>

          {/* assignment list */}
          <ListGroup className="rounded-0" id="wd-assignments">
            {assignments.length > 0 ? (
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

                {/* render assignments */}
                <ListGroup className="wd-lessons rounded-0">
                  {assignments.map((assignment) => (
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
                          <span className="text-danger">Multiple Modules</span> |
                          <strong> Not available until</strong> TBD |
                        </div>
                        <div className="text-muted">
                          <strong>Due</strong> TBD | 100 pts
                        </div>
                      </div>
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
    </div>
  );
}
