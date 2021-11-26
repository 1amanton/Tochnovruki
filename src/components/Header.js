import React, {Component} from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import logo from "./logo.png"
import {BrowserRouter as Router ,Switch,  Route } from "react-router-dom";

import Home from "../pages/Home";


class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/" className="logoAll animate__animated animate__flipInX">
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        <span className="logoName">TOCHNOVRUKI</span>
                    </NavbarBrand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>

                        <div className="telAll animate__animated animate__fadeIn">
                            <i className="fas fa-phone-alt telIcon"></i>
                            <a className="deliveryBtn" href="tel: +79137225665"> +7 (913) 722 - 56 - 65</a>
                        </div>





                    </Navbar.Collapse>

                </Container>
            </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {/*<Route exact path="/about" component={About}/>*/}
                        {/*<Route exact path="/contacts" component={Contacts}/>*/}
                        {/*<Route exact path="/blog" component={Blog}/>*/}

                    </Switch>
                </Router>



            </>

        );
    }
}

export default Header;