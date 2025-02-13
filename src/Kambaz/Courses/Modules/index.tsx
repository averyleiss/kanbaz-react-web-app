import { useParams } from "react-router";
import { ListGroup, Row, Col } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module) => module.course === cid); // Filter modules for the current course

  return (
    <div className="container-fluid p-4">
      <Row>
        <Col md={9}>
          <ModulesControls />
          <br />
          <br />
          <br />
          <ListGroup className="rounded-0" id="wd-modules">
            {modules.length > 0 ? (
              modules.map((module) => (
                <ListGroup.Item
                  key={module._id}
                  className="wd-module p-0 mb-5 fs-5 border-gray"
                >
                  <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                    <div>
                      <BsGripVertical className="me-2 fs-3" /> {module.name}
                    </div>
                    <div className="d-flex align-items-center">
                      <GreenCheckmark />
                      <FaPlus className="ms-3" />
                      <FaEllipsisV className="ms-3" />
                    </div>
                  </div>
                  {module.lessons && module.lessons.length > 0 ? (
                    <ListGroup className="wd-lessons rounded-0">
                      {module.lessons.map((lesson) => (
                        <ListGroup.Item
                          key={lesson._id}
                          className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />{" "}
                            {lesson.name}
                          </div>
                          <LessonControlButtons />
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  ) : (
                    <p className="ps-3">No lessons available for this module.</p>
                  )}
                </ListGroup.Item>
              ))
            ) : (
              <p className="ps-3">No modules available for this course.</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
