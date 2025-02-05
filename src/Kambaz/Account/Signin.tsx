import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

export default function Signin() {
  return (
    <Container className="p-5">
    <h3 className="mb-4">Sign In</h3>
    <Form.Group controlId="wd-username" className="mb-3">
      <Form.Control type="text" placeholder="Username" />
    </Form.Group>
    <Form.Group controlId="wd-password" className="mb-3">
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button id="wd-signup-btn" variant="primary" className="w-100 mb-3">
      Sign In
    </Button>
       <div>
      <Link to="/Kambaz/Account/Signup">Sign Up</Link>
      </div>
    </Container>
   );
  }