export default function AssignmentEditor() {
    return (
      <div id="wd-assignment-editor" style={{ padding: "20px" }}>
        <h2>Assignment Name</h2>
        <label htmlFor="wd-name">Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" style={{ display: "block", marginBottom: "10px", width: "100%" }} />
  
        <label htmlFor="wd-description">Description</label>
        <textarea
          id="wd-description"
          defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
  Your full name and section
  Links to each of the lab assignments
  Link to the Kanbas application
  Links to all relevant source code repositories
  The Kanbas application should include a link to navigate back to the landing page.`}
          style={{ display: "block", marginBottom: "10px", width: "100%", height: "100px" }}
        />
  
        <label htmlFor="wd-points">Points</label>
        <input id="wd-points" type="number" defaultValue="100" style={{ display: "block", marginBottom: "10px" }} />
  
        <label htmlFor="wd-group">Assignment Group</label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" style={{ display: "block", marginBottom: "10px" }}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECTS">PROJECTS</option>
        </select>
  
        <label htmlFor="wd-display-grade-as">Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="Percentage" style={{ display: "block", marginBottom: "10px" }}>
          <option value="Percentage">Percentage</option>
          <option value="Points">Points</option>
          <option value="Complete/Incomplete">Complete/Incomplete</option>
        </select>
  
        <label htmlFor="wd-submission-type">Submission Type</label>
        <select id="wd-submission-type" defaultValue="Online" style={{ display: "block", marginBottom: "10px" }}>
          <option value="Online">Online</option>
          <option value="On Paper">On Paper</option>
          <option value="No Submission">No Submission</option>
        </select>
  
        <fieldset style={{ marginBottom: "10px" }}>
          <legend>Online Entry Options</legend>
          <label>
            <input id="wd-text-entry" type="checkbox" /> Text Entry
          </label>
          <br />
          <label>
            <input id="wd-website-url" type="checkbox" /> Website URL
          </label>
          <br />
          <label>
            <input id="wd-media-recordings" type="checkbox" /> Media Recordings
          </label>
          <br />
          <label>
            <input id="wd-student-annotation" type="checkbox" /> Student Annotation
          </label>
          <br />
          <label>
            <input id="wd-file-upload" type="checkbox" /> File Uploads
          </label>
        </fieldset>
  
        <label htmlFor="wd-assign-to">Assign to</label>
        <input id="wd-assign-to" defaultValue="Everyone" style={{ display: "block", marginBottom: "10px" }} />
  
        <label htmlFor="wd-due-date">Due</label>
        <input id="wd-due-date" type="date" defaultValue="2024-05-13" style={{ display: "block", marginBottom: "10px" }} />
  
        <label htmlFor="wd-available-from">Available from</label>
        <input id="wd-available-from" type="date" defaultValue="2024-05-06" style={{ display: "block", marginBottom: "10px" }} />
  
        <label htmlFor="wd-available-until">Until</label>
        <input id="wd-available-until" type="date" defaultValue="2024-05-20" style={{ display: "block", marginBottom: "10px" }} />
  
        <button style={{ marginRight: "10px" }}>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
  