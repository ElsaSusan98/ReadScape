import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {
 const navigate = useNavigate()
 const handleHeader = (route) => {
   navigate('/' + route)
 }
 return (

  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand as={Link} to="/home"><img src={logo} width={100} height={100} alt="Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-3 mr-3">
        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
        <Nav.Link as={Link} to="/aboutus">ABOUT US</Nav.Link>
        <Nav.Link as={Link} to="/search">SEARCH</Nav.Link>
        <Nav.Link as={Link} to="/contactus">CONTACTUS</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 )
}
export default Header
