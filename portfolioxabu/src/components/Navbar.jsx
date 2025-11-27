import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'

function Topo() {
  return (
    <>
      <Navbar className="topo_site">
        <Container>
          <Navbar.Brand href="">
            <img
              alt="logo xabu"
              src="src/img/xabu_logo.png"
              className="d-inline-block align-top"
            />{' '}
            <h1>Xabu Tronics</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Topo;