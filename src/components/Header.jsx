import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
 const navigate = useNavigate()
 const handleHeader = (route) => {
   navigate('/' + route)
 }
 return (

  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="/home"><img src={logo} width={100} height={100} alt="Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-3 mr-3">
        <Nav.Link href="/home">HOME</Nav.Link>
        <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
        <Nav.Link href="/search">SEARCH</Nav.Link>
        <Nav.Link href="/contactus">CONTACTUS</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 )
}
export default Header
