import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

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
            
            <Route
              path="/"
              element={<Navigate to={currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />}
            />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
