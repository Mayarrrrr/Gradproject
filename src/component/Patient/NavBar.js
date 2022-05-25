import out from '../../img/out.png';
import ReactRoundedImage from "react-rounded-image";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
      <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="/home">Mental Health</Navbar.Brand>
      <Nav >
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/AllTests">Psychological test</Nav.Link>
        <Nav.Link href="/Prof"> Profile </Nav.Link>
        <Nav.Link href="/TherapistProfile"> Therapist profile </Nav.Link>
        <Nav.Link href="/"></Nav.Link>
        <Nav.Link href="/LandingPage" id='out' style={{ opacity: 0.6 }} > <ReactRoundedImage
           image= {out} 
           imageWidth="30"
           imageHeight="30"
           roundedSize="0"
          /></Nav.Link>
        
      </Nav>
      </Container>
    </Navbar>
    );
  }
   
  export default NavBar;