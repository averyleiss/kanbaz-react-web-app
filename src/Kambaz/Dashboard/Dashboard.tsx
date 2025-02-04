import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  // course data with images
  const courses = [
    // immersive media
    { id: "ImmersiveMedia", 
    title: "Immersive Media", 
    description: "Learn About AR/VR in Immersive Environments", 
    image: "/images/immersive_media.jpeg" },
    // observational drawing
    { id: "ObservationalDrawing",
    title: "Observational Drawing", 
    description: "Foundational Drawing Lessons by Observing Life", 
    image: "/images/observational_drawing.jpg" },
    // animation
    { id: "Animation", 
    title: "Animation", 
    description: "Learn How to Animate Characters", 
    image: "/images/animation.jpg" },
    // software engineering
    { id: "SoftwareEngineering", 
    title: "Fundamentals of Software Engineering", 
    description: "Build a Strong Foundation in Software Engineering Principles", 
    image: "/images/swe.jpg" },
    // calculus
    { id: "Calculus1", 
    title: "Calculus 1", 
    description: "Learn the Fundamentals of Calculus", 
    image: "/images/calculus_1.png" },
    // theory of computation
    { id: "TheoryOfComputation", 
    title: "Theory of Computation", 
    description: "The Theoretical Foundations of Computer Science", 
    image: "/images/theory.jpg" },
    // discrete math
    { id: "DiscreteMathematics", 
    title: "Discrete Mathematics", 
    description: "Understand the Mathematical Reasoning behind Computer Science", 
    image: "/images/discrete.jpeg" }
  ];

  return (
    <div id="wd-dashboard" className="p-4">
      {/* dashboard title at top of page */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {/* published courses */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      {/* responsive grid */}
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">  
          {courses.map((course) => (
            <Col key={course.id} className="d-flex justify-content-center" style={{ width: "270px" }}>
              <Card className="wd-dashboard-course shadow-lg" style={{ width: "100%" }}>
                <Link to={`/Kambaz/Courses/${course.id}/Home`} className="text-decoration-none text-dark">
                  {/* course pic */}
                  <Card.Img variant="top" src={course.image} height={160} />
                  <Card.Body>
                    {/* course title */}
                    <Card.Title className="wd-dashboard-course-title">{course.title}</Card.Title>
                    {/* course description */}
                    <Card.Text className="wd-dashboard-course-description">{course.description}</Card.Text>
                    {/* go button */}
                    <Button variant="primary">Go</Button>
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
