import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

export default function Signup() {
  return (
    <Container className="p-5">
      <h3 className="mb-4">Sign Up</h3>
      <Form.Group controlId="wd-username" className="mb-3">
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="wd-password" className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button id="wd-signup-btn" variant="primary" className="w-100 mb-3">
        Sign Up
      </Button>
      <div>
        <Link to="/Kambaz/Account/Signin">Sign In</Link>
      </div>
    </Container>
  );
}
