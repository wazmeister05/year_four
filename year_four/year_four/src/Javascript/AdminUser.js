import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button} from "bootstrap";

class AdminUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: ""
        };
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand id={'navbarLeft'} href="#">Admin Panel</Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link>
                            <button className={'btn btn-danger'} onClick={() => {
                                this.logout();
                            }}>Log Out</button>
                        </Nav.Link>
                    </Nav.Item>
                </Navbar>

                <div className={"container"}>
                    <button type="button" className="collapsible">Add User</button>
                    <div className="content">
                        <h2>test</h2>
                        <button className={'btn btn-primary'}>Submit</button>
                        <button className={'btn btn-warning rightButton'}>Clear</button>
                    </div>
                    <button type="button" className="collapsible">Remove User</button>
                    <div className="content">
                        <h2>test</h2>
                        <button className={'btn btn-primary'}>Submit</button>
                        <button className={'btn btn-warning rightButton'}>Clear</button>
                    </div>
                    <button type="button" className="collapsible">Add Class</button>
                    <div className="content">
                        <h2>test</h2>
                        <button className={'btn btn-primary'}>Submit</button>
                        <button className={'btn btn-warning rightButton'}>Clear</button>
                    </div>
                    <button type="button" className="collapsible">Remove Class</button>
                    <div className="content">
                        <h2>test</h2>
                        <button className={'btn btn-primary'}>Submit</button>
                        <button className={'btn btn-warning rightButton'}>Clear</button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let coll = document.getElementsByClassName("collapsible");
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    }

    logout() {
        localStorage.clear();
        window.location.href = 'https://devweb2021.cis.strath.ac.uk/~qhb18155';
    }
}

export default AdminUser;