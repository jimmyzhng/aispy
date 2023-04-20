import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
import { useAuth } from "../../context/AuthContext";

export default function NavigationBar() {
  const auth = useAuth();

  return (
    <Navbar className="nav-bar">
      <Container>
        <Navbar.Brand href="/" className="nav-logo">
          AiSpy
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {auth.isLoggedIn ? (
            <Navbar.Text className="nav-link">
              Signed in as: {auth.user}
            </Navbar.Text>
          ) : (
            <a href="/auth" className="nav-link">
              Login
            </a>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
