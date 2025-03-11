import { useParams } from "react-router";
import { ListGroup, Row, Col, Button, Modal, FormControl, Dropdown } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import ModuleControlButtons from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const [showAddModal, setShowAddModal] = useState(false); 
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid p-4">
      <Row>
        <Col md={9}>
          <div className="d-flex justify-content-start mb-3">

            <Dropdown>
              <Dropdown.Toggle variant="secondary" className="d-flex align-items-center">
                <GreenCheckmark className="me-2" />
                Publish All
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Publish All</Dropdown.Item>
                <Dropdown.Item>Unpublish All</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


            <Button
              variant="danger"
              className="ms-2 d-flex align-items-center"
              onClick={() => setShowAddModal(true)}
            >
              <FaPlus className="me-2" /> Module
            </Button>
          </div>


          <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Module</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormControl
                placeholder="Enter module name"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(addModule({ name: moduleName, course: cid }));
                  setModuleName("");
                  setShowAddModal(false);
                }}
              >
                Add Module
              </Button>
            </Modal.Footer>
          </Modal>

          <ListGroup className="rounded-0" id="wd-modules">
            {modules.length > 0 ? (
              modules
                .filter((module: any) => module.course === cid)
                .map((module: any) => (
                  <ListGroup.Item
                    key={module._id}
                    className="wd-module p-0 mb-5 fs-5 border-gray"
                  >
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                      <div>
                        <BsGripVertical className="me-2 fs-3" />
                        {!module.editing && module.name}
                        {module.editing && (
                          <FormControl
                            className="w-50 d-inline-block"
                            onChange={(e) =>
                              dispatch(updateModule({ ...module, name: e.target.value }))
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                dispatch(updateModule({ ...module, editing: false }));
                              }
                            }}
                            defaultValue={module.name}
                          />
                        )}
                      </div>

                      <ModuleControlButtons
                        moduleId={module._id}
                        deleteModule={() => dispatch(deleteModule(module._id))}
                        editModule={() => dispatch(editModule(module._id))}
                      />
                    </div>

                    {module.lessons && module.lessons.length > 0 ? (
                      <ListGroup className="wd-lessons rounded-0">
                        {module.lessons.map((lesson) => (
                          <ListGroup.Item
                            key={lesson._id}
                            className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between"
                          >
                            <div className="d-flex align-items-center">
                              <BsGripVertical className="me-2 fs-3" /> {lesson.name}
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
