import { Link } from "react-router-dom";
import { Form, Container } from "react-bootstrap";

export default function Profile() {
  return (
    <Container className="p-5">
      <h3 className="mb-4">Profile</h3>
      <Form.Group controlId="wd-username" className="mb-3">
        <Form.Control type="text" defaultValue="alice" />
      </Form.Group>
      <Form.Group controlId="wd-password" className="mb-3">
        <Form.Control type="password" defaultValue="123" />
      </Form.Group>
      <Form.Group controlId="wd-firstname" className="mb-3">
        <Form.Control type="text" defaultValue="Alice" />
      </Form.Group>
      <Form.Group controlId="wd-lastname" className="mb-3">
        <Form.Control type="text" defaultValue="Wonderland" />
      </Form.Group>
      <Form.Group controlId="wd-dob" className="mb-3">
        <Form.Control type="date" defaultValue="2000-01-01" />
      </Form.Group>
      <Form.Group controlId="wd-email" className="mb-3">
        <Form.Control type="email" defaultValue="alice@wonderland.com" />
      </Form.Group>
      <Form.Group controlId="wd-role" className="mb-4">
        <Form.Select defaultValue="USER">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
      </Form.Group>
      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100">
      Sign Out
      </Link>
    </Container> 
  );
}
