import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import style from './style.module.scss'



const TopNavbar = () => {

    return (
        <Navbar className={style['nav-bar']} collapseOnSelect scrolling="true" expand="lg" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">Calvin Mozola</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Work experience</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Socials" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Github</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Linked in</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavbar