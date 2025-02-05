import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";

export default function Account() {
  return (
    <Container fluid className="p-4">
      <Row>
        {/* Sidebar Navigation */}
        <Col md={3} className="d-none d-md-block">
          <AccountNavigation />
        </Col>

        {/* Main Content (Sign In, Sign Up, Profile) */}
        <Col md={9}>
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
