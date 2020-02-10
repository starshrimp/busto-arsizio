import * as React from 'react';
import { Jumbotron, Navbar, Nav, Table } from 'react-bootstrap';

export const App: React.FC = () => (
  <div>
    <Jumbotron className="text-center heading mainDiv">
      <h1 className="mainHeader">Busto Arsizio 2018</h1>
    </Jumbotron>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">CSI2* April / Mai 2018</Navbar.Brand>
    
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#results">Resultate</Nav.Link>
          <Nav.Link href="#fotos">Fotos</Nav.Link>
          <Nav.Link href="#videos">Videos</Nav.Link>
      
        </Nav>
      </Navbar>
    </Navbar>
    <div>
      <h3>Rangliste</h3>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Prüfung</th>
      <th>Fehler</th>
      <th>Rang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
</div>
);

export default App;
