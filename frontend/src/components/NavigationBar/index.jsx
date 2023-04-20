import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./index.scss";
import { useAuth } from "../../context/AuthContext";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavigationBar() {
  const auth = useAuth();

  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand href="/" className="nav-logo">
          AiSpy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {auth.user && (
              <>
                <Nav.Link href="#features">Home</Nav.Link>
                <NavDropdown title="Views" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/view">
                    Building: North Exit
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/view">
                    Building: South Exit
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/view">
                    Building: West Exit
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/pastbroadcasts">
                    Past Broadcasts
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>

          <Nav>
            {auth.isLoggedIn && auth.user ? (
              <NavDropdown
                title={`Signed in as: ${auth.user.username}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/auth" className="nav-link">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
