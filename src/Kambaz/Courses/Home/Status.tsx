import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { enrollInCourse, unenrollFromCourse } from "../enrollmentReducer";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function CourseStatus() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (currentUser && cid) {
      const alreadyEnrolled = enrollments.some(
        (e: any) => e.user === currentUser._id && e.course === cid
      );
      setIsEnrolled(alreadyEnrolled);
    }
  }, [enrollments, currentUser, cid]);

  const handleToggleEnrollment = () => {
    if (!currentUser || !cid) return;

    if (isEnrolled) {
      dispatch(unenrollFromCourse({ userId: currentUser._id, courseId: cid }));
    } else {
      dispatch(enrollInCourse({ userId: currentUser._id, courseId: cid }));
    }
    setIsEnrolled(!isEnrolled);
  };

  return (
    <div id="wd-course-status" className="border p-3 rounded">
      {/* course status title */}
      <h2 className="fs-5 mb-3">Course Status</h2>

      {/* publish and unpublish Buttons */}
      <div className="d-flex mb-3">
        <div className="w-50 pe-1">
          <Button variant="light" size="lg" className="w-100 text-nowrap d-flex align-items-center justify-content-center">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100 d-flex align-items-center justify-content-center">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>

      {/* enroll/unenroll toggle */}
      {currentUser && currentUser.role === "STUDENT" && (
        <Button
          variant={isEnrolled ? "danger" : "primary"}
          className="w-100 mb-3"
          onClick={handleToggleEnrollment}
        >
          {isEnrolled ? "Unenroll from Course" : "Enroll in Course"}
        </Button>
      )}

      {/* action buttons */}
      {[
        { icon: <BiImport />, text: "Import Existing Content" },
        { icon: <LiaFileImportSolid />, text: "Import from Commons" },
        { icon: <FaHome />, text: "Choose Home Page" },
        { icon: <FaStream />, text: "View Course Screen" },
        { icon: <FaBullhorn />, text: "New Announcement" },
        { icon: <FaChartBar />, text: "New Analytics" },
        { icon: <FaBell />, text: "View Course Notifications" },
      ].map(({ icon, text }, index) => (
        <Button key={index} variant="light" size="lg" className="w-100 mt-2 text-start d-flex align-items-center">
          {icon} <span className="ms-2">{text}</span>
        </Button>
      ))}
    </div>
  );
}
