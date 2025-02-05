import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="border p-3 rounded bg-light" style={{ width: "350px" }}>
      {/* course status title */}
      <h2 className="fs-5 mb-3">Course Status</h2>

      {/* publish/unpublish buttons */}
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button
            size="lg"
            className="w-100 text-nowrap d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100 d-flex align-items-center justify-content-center">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>

      {/* action buttons */}
      <Button
        size="lg"
        className="w-100 mt-2 text-start d-flex align-items-center"
        style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
      >
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>
      <Button
        size="lg"
        className="w-100 mt-2 text-start d-flex align-items-center"
        style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
      >
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>
      <Button
        size="lg"
        className="w-100 mt-2 text-start d-flex align-items-center"
        style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
      >
        <FaHome className="me-2 fs-5" /> Choose Home Page
      </Button>
      <Button
        size="lg"
        className="w-100 mt-2 text-start d-flex align-items-center"
        style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
      >
        <FaStream className="me-2 fs-5" /> View Course Screen
      </Button>
      <Button
        size="lg"
        className="w-100 mt-2 text-start d-flex align-items-center"
        style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
      >
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </Button>
      <Button
        size="lg"
        className="w-100 mt-2 text-start d-flex align-items-center"
        style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
      >
        <FaChartBar className="me-2 fs-5" /> New Analytics
      </Button>
      <Button
        size="lg"
        className="w-100 mt-2 text-start d-flex align-items-center"
        style={{ backgroundColor: "#E0E0E0", color: "black", border: "none" }}
      >
        <FaBell className="me-2 fs-5" /> View Course Notifications
      </Button>
    </div>
  );
}
