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
      <Nav>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/Jewellery">Jewellery</Nav.Link>
        <Nav.Link href="/product">Product</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 )
}
export default Header
