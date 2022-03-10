import React from 'react';
import RegularUser from "./RegularUser";
import AdminUser from "./AdminUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import {Route, Link, Routes} from "react-router-dom";
import AddTutorial from "../Database/components/add-tutorial.components";
import Tutorial from "../Database/components/tutorial.component";
import TutorialsList from "../Database/components/tutorial-list.component";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_details: this.props.user
        };
    }

    render() {
        return (
            <div className={'whole'}>
                {this.state.user_details.username === 'admin' ? (
                    <AdminUser user_details={this.state.user_details}/>
                ): this.state.user_details.username === 'student' || this.state.user_details.username === 'teacher' ? (
                    <div>
                        <div className="Home" id="outer-container">
                            <div>

                                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="ml-auto">
                                            <Nav.Link href="#features">Features</Nav.Link>
                                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                                            <Nav.Link href="#deets">More details</Nav.Link>
                                            <Nav.Link eventKey={2} href="#memes">
                                                Good stuff
                                            </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>

                                <div className="container mt-3">
                                    <Routes>
                                        <Route exact path="/tutorials" element={<TutorialsList/>} />
                                        <Route exact path="/" element={<TutorialsList/>} />
                                        <Route exact path="/add" element={<AddTutorial/>} />
                                        <Route path="/tutorials/:id" element={<Tutorial/>} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                        <RegularUser user_details={this.state.user_details}/>
                    </div>
                ):(
                    <h1>ERROR</h1>
                )}

            </div>
        );
    }
}

export default Home;