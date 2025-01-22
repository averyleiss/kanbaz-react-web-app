import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/ImmersiveMedia/Home" className="wd-dashboard-course-link">
            <img src="/images/immersive_media.jpeg" width={200} />
            <div>
              <h5> Immersive Media </h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title"> 
              Learn About AR/VR in Immersive Environments </p>
              <Link to="/Kambaz/Courses/ImmersiveMedia/Home"> <button> Go </button> </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/ObservationalDrawing/Home" className="wd-dashboard-course-link">
            <img src="/images/observational_drawing.jpg" width={200} />
            <div>
              <h5> Observational Drawing </h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title"> 
              Foundational Drawing Lessons by Observing Life </p>
              <Link to="/Kambaz/Courses/ObservationalDrawing/Home"> <button> Go </button> </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/Animation/Home" className="wd-dashboard-course-link">
            <img src="/images/animation.jpg" width={200} />
            <div>
              <h5> Animation </h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title"> 
              Learn How to Animate Characters </p>
              <Link to="/Kambaz/Courses/Animation/Home"> <button> Go </button> </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/SoftwareEngineering/Home" className="wd-dashboard-course-link">
            <img src="/images/swe.jpg" width={200} />
            <div>
              <h5> Fundamentals of Software Engineering </h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title"> 
              Build a Strong Foundation in Software Engineering Principles </p>
              <Link to="/Kambaz/Courses/SoftwareEngineering/Home"> <button> Go </button> </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/Calculus1/Home" className="wd-dashboard-course-link">
            <img src="/images/calculus_1.png" width={200} />
            <div>
              <h5> Calculus 1 </h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title"> 
              Learn the Fundamentals of Calculus </p>
              <Link to="/Kambaz/Courses/Calculus1/Home"> <button> Go </button> </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/TheoryOfComputation/Home" className="wd-dashboard-course-link">
            <img src="/images/theory.jpg" width={200} />
            <div>
              <h5> Theory of Computation </h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title"> 
              The Theoretical Foundations of Computer Science </p>
              <Link to="/Kambaz/Courses/TheoryOfComputation/Home"> <button> Go </button> </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/DiscreteMathematics/Home" className="wd-dashboard-course-link">
            <img src="/images/discrete.jpeg" width={200} />
            <div>
              <h5> Discrete Mathematics </h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title"> 
              Understand the Mathematical Reasoning behind Computer Science </p>
              <Link to="/Kambaz/Courses/DiscreteMathematics/Home"> <button> Go </button> </Link>
        </div>
      </div>
    </div>
  );
}
