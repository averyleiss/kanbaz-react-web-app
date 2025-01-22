export default function Modules() {
    return (
      <div>
        {/* Just decided to recreate the image shown in the lab for this lab purpose */}
        {/* Buttons */}
        <div className="wd-buttons">
          <button>Collapse All</button>
          <button>View Progress</button>
          <button>Publish All</button>
          <button>+ Module</button>
        </div>
  
        {/* Modules List */}
        <ul id="wd-modules">
          {/* Module 1 */}
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP Server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
  
          {/* Module 2 */}
          <li className="wd-module">
            <div className="wd-title">Week 2, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web Content with Headings</li>
                  <li className="wd-content-item">Formatting Content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
  
          {/* Module 3 */}
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
          </li>
        </ul>
      </div>
    );
  }
  