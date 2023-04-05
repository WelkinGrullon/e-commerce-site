import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {Cart} from 'react-bootstrap-icons'
import { PersonCircle } from 'react-bootstrap-icons'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
export default function Navbars(){
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        <>
        <Navbar key='lg' bg='dark' expand='lg' variant='dark'>
            <Container>
                <Navbar.Brand  href='./'>Midcenturia</Navbar.Brand>
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
                    <Navbar.Offcanvas aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement='end' className='text-bg-dark' id='offcanvasNavbar-expand-lg'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>Midcenturia</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-evenly flex-grow-1 pe-3'>
                                <Nav.Link >Home</Nav.Link>
                                <Nav.Link >Products</Nav.Link>
                                <Nav.Link >About Us</Nav.Link>
                                <Nav.Link >Contact</Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Item>{loggedIn ? <Button variant='dark'><PersonCircle /></Button> : <Nav.Link>Log In</Nav.Link>}</Nav.Item>
                            <Nav.Item><Button className='' variant='dark'><Cart></Cart></Button></Nav.Item>
                            </Nav>
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    
                
            </Container>
        </Navbar>
        </> 
    )
}