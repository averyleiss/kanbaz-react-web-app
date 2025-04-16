import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
//import { enrollInCourse } from "../Courses/enrollmentReducer";
//import { Dispatch, SetStateAction } from "react";

export default function Dashboard(
  { course, 
    setCourse, 
    addNewCourse, 
    deleteCourse, 
    updateCourse,
    courses,
    // enrolling,
    // setEnrolling,
   }: {
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: (course: any) => Promise<any>;
    courses: any[];
    // enrolling: boolean;
    // setEnrolling: Dispatch<SetStateAction<boolean>>;
  }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  

  console.log("Current User:", currentUser);

  if (!currentUser || !currentUser._id) {
    return <h2>Please Sign In to View Courses</h2>;
  }


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {/* <div className="mb-3">
        <Button
          variant={enrolling ? "secondary" : "primary"}
          onClick={() => setEnrolling(!enrolling)}
        >
          {enrolling ? "Show Enrolled Only" : "Show All Courses"}
        </Button>
      </div> */}

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
        Published Courses ({courses.length})
      </h2>
      <hr />

      {/* Enrolled Courses */}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
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
                     {/* If viewing enrolled-only, hide the “Go” button for not enrolled
                      {course.enrolled ? (
                        <Button variant="primary">Go</Button>
                      ) : (
                        <Button
                          variant="outline-success"
                          onClick={() => enrollInCourse(course._id)}
                        >
                          Enroll
                        </Button>
                      )} */}

                    <Button variant="primary"> Go </Button>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    <button 
                        className="btn btn-warning float-end me-2" // window way worked better 
                        id="wd-update-course-click"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();

                          
                          const newName = window.prompt("New course name:", course.name);
                          if (newName == null) return;                     // user cancelled

                          
                          const newDesc = window.prompt("New description:", course.description);
                          if (newDesc == null) return;                     // user cancelled

                          updateCourse({ ...course, name: newName, description: newDesc });
                        }}
                      >
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
