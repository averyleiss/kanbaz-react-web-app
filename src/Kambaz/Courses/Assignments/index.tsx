import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Assignments() {  
  return (
    <div className="container-fluid p-4">
      <Row>
        <Col md={9}>
          {/* top Controls */}
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

          {/* assignments title + list */}
          <ListGroup className="rounded-0" id="wd-assignments">

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

              {/* assignments */}
              <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-3 fs-3 text-secondary" />  
                  <LuNotebookPen className="me-4 fs-3 text-success" />  
                  <div className="flex-grow-1">
                    <div className="fw-bold">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-black">
                      A1
                    </a>
                    </div>
                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> |
                      <strong> Not available until</strong> May 6 at 12:00am | 
                    </div>
                    <div className="text-muted"><strong>Due</strong> May 13 at 11:59pm | 100 pts</div>
                  </div>
                  <LessonControlButtons className="ms-auto" />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-3 fs-3 text-secondary" />  
                  <LuNotebookPen className="me-4 fs-3 text-success" />  
                  <div className="flex-grow-1">
                    <div className="fw-bold">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-black">
                      A2
                    </a>
                    </div>
                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> |
                      <strong> Not available until</strong> May 13 at 12:00am |
                    </div>
                    <div className="text-muted"><strong>Due</strong> May 20 at 11:59pm | 100 pts</div>
                  </div>
                  <LessonControlButtons className="ms-auto" />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-3 fs-3 text-secondary" />  
                  <LuNotebookPen className="me-4 fs-3 text-success" />  
                  <div className="flex-grow-1">
                    <div className="fw-bold">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-black">
                    A3
                    </a>
                    </div>
                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> |
                      <strong> Not available until</strong> May 20 at 12:00am |
                    </div>
                    <div className="text-muted"><strong>Due</strong> May 27 at 11:59pm | 100 pts</div>
                  </div>
                  <LessonControlButtons className="ms-auto" />
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
