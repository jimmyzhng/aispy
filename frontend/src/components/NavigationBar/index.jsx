import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./index.scss";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import { useVideo } from "../../context/VideoContext";

export default function NavigationBar() {
  const { setIsLoggedIn, isLoggedIn, setUser, user } = useAuth();
  const navigate = useNavigate();
  const { setPastBroadcast } = useVideo();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/api/logout");
      setIsLoggedIn(false);
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand href="/" className="nav-logo">
          AiSpy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Views" id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    href="/view/1"
                    onClick={() => setPastBroadcast(false)}
                  >
                    Building: North Exit
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/view/2"
                    onClick={() => setPastBroadcast(false)}
                  >
                    Building: South Exit
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/view/3"
                    onClick={() => setPastBroadcast(false)}
                  >
                    Building: West Exit
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="/pastbroadcasts"
                    onClick={() => setPastBroadcast(false)}
                  >
                    Past Broadcasts
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>

          <Nav>
            {isLoggedIn && user ? (
              <NavDropdown
                title={`Signed in as: ${user.username}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
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
