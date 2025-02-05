import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation(); // ✅ Get the current route

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" 
        id="wd-course-home-link"
        className={`list-group-item border border-0 ${location.pathname.includes("/Home") ? "active" : ""}`}>
        Home
      </Link>
      <Link to="/Kambaz/Courses/1234/Modules" 
        id="wd-course-modules-link"
        className={`list-group-item border border-0 ${location.pathname.includes("/Modules") ? "active" : ""}`}>
        Modules
      </Link>
      <Link to="/Kambaz/Courses/1234/Piazza" 
        id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${location.pathname.includes("/Piazza") ? "active" : ""}`}>
        Piazza
      </Link>
      <Link to="/Kambaz/Courses/1234/Zoom" 
        id="wd-course-zoom-link"
        className={`list-group-item border border-0 ${location.pathname.includes("/Zoom") ? "active" : ""}`}>
        Zoom Meetings
      </Link>
      <Link to="/Kambaz/Courses/1234/Assignments" 
        id="wd-course-assignments-link"
        className={`list-group-item border border-0 ${location.pathname.includes("/Assignments") ? "active" : ""}`}>
        Assignments
      </Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" 
        id="wd-course-quizzes-link"
        className={`list-group-item border border-0 ${location.pathname.includes("/Quizzes") ? "active" : ""}`}>
        Quizzes
      </Link>
      <Link to="/Kambaz/Courses/1234/People" 
        id="wd-course-people-link"
        className={`list-group-item border border-0 ${location.pathname.includes("/People") ? "active" : ""}`}>
        People
      </Link>
    </div>
  );
}
