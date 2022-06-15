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
                        <Nav.Link href="#work">Work experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skill">Skills</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Socials" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/1mozolacal">Github</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/calvin-mozola/">Linked in</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="mailto: calvin4992+portfolio@gmail.com">Email me!</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavbar