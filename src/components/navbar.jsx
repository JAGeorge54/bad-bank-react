import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function NavBar() {
    return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={ Link } to='/'>BadBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ Link } to='/'>Home</Nav.Link>
            <Nav.Link as={ Link } to='/login'>Login</Nav.Link>
            <Nav.Link as={ Link } to='/createaccount'>Create Account</Nav.Link>
            <NavDropdown title="User Actions" id="basic-nav-dropdown">
              <NavDropdown.Item as={ Link } to='/balance'>Balance</NavDropdown.Item>
              <NavDropdown.Item as={ Link } to='/deposit'>
                Deposit
              </NavDropdown.Item>
              <NavDropdown.Item as={ Link } to='/withdraw'>Withdraw</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={ Link } to='/logout'>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={ Link } to='/alldata'>AllData</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;