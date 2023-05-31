import React from 'react';
import AppRouter from './Components/AppRouter';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import dog from '../src/Images/dog.png'

function App() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className='d-flex justify-content-center align-items-center gap-2' href="/">
          <img src={dog} />
           Pet World</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="history">History</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <AppRouter />     
    </div>
  );
}

export default App;
