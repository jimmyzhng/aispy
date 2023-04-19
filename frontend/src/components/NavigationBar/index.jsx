import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";

export default function NavigationBar() {
  return (
    <Navbar className="nav-bar">
      <Container>
        <Navbar.Brand href="/" className="nav-logo">
          AiSpy
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <a href="/auth" className="nav-link">
            Login
          </a>
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
