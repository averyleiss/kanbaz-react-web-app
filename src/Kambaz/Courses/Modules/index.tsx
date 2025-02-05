import { BsGripVertical } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { ListGroup, Row, Col } from "react-bootstrap";
import GreenCheckmark from "./GreenCheckmark"; 
import { FaPlus } from "react-icons/fa6";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import CourseStatus from "../Home/Status";

export default function Modules({ showCourseStatus = true }) {  
  // had to add this prop bc i was having issues with duplicating the course status bar on the home and modules page 
  return (
    <div className="container-fluid p-4">
      <Row>
        {/* Modules content */}
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
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
                </ListGroup.Item>
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
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* only renders CourseStatus if showCourseStatus = T */}
        {showCourseStatus && (
          <Col md={3} className="d-none d-md-block">
            <CourseStatus />
          </Col>
        )}
      </Row>
    </div>
  );
}
