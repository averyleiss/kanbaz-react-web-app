import Modules from "../Modules";
import CourseStatus from "./Status";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div id="wd-home" className="container-fluid p-4">
      <Row>
        {/* course content (modules) */}
        <Col md={9}>
          <Modules />
        </Col>

        {/* course status, gets hidden on small screens */}
        <Col md={3} className="d-none d-md-block">
          <CourseStatus />
        </Col>
      </Row>
    </div>
  );
}
