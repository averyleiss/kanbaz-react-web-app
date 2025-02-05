import { BsGripVertical } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { ListGroup, Row, Col } from "react-bootstrap";
import GreenCheckmark from "./GreenCheckmark"; 
import { FaPlus } from "react-icons/fa6";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div className="container-fluid p-4">
      <Row>
        {/* modules content */}
        <Col md={9}>
          <ModulesControls /><br /><br /><br /><br />
          <ListGroup className="rounded-0" id="wd-modules">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between"> 
                <div>  
                  <BsGripVertical className="me-2 fs-3" /> Week 1 
                </div>
                <div className="d-flex align-items-center"> 
                  <GreenCheckmark />
                  <FaPlus className="ms-3" />
                  <FaEllipsisV className="ms-3" />
                </div>
              </div>
              <ListGroup className="wd-lessons rounded-0">
                {["LEARNING OBJECTIVES", "Introduction to the course", "Learn what is Web Development"].map((lesson, index) => (
                  <ListGroup.Item key={index} className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" /> {lesson}
                    </div>
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>

            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between"> 
                <div>  
                  <BsGripVertical className="me-2 fs-3" /> Week 2 
                </div>
                <div className="d-flex align-items-center"> 
                  <GreenCheckmark />
                  <FaPlus className="ms-3" />
                  <FaEllipsisV className="ms-3" />
                </div>
              </div>
              <ListGroup className="wd-lessons rounded-0">
                {["LESSON 1", "LESSON 2"].map((lesson, index) => (
                  <ListGroup.Item key={index} className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" /> {lesson}
                    </div>
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
