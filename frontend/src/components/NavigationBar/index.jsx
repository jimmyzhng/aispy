import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">AiSpy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <a href="/auth">Login</a>
          <a href="/auth">Register</a>
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
