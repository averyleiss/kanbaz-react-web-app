import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as db from "../Database";

export default function Dashboard(
  { course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses, enrollments } = db; 

  console.log("Current User:", currentUser);
  console.log("All Courses:", courses);
  console.log("Enrollments:", enrollments);

  if (!currentUser || !currentUser._id) {
    return <h2>Please Sign In to View Courses</h2>;
  }

  // filter enrolled courses (only courses for the loggedin user)
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );

  console.log("Filtered Courses:", enrolledCourses);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />


      <h5>New Course
        <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse} >
          Add
        </button>
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />

      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({enrolledCourses.length})
      </h2>
      <hr />

      {/* Enrolled Courses */}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {enrolledCourses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    <button className="btn btn-warning float-end me-2"
                      onClick={updateCourse} id="wd-update-course-click">
                      Update
                    </button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
