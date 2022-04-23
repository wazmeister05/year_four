import {Nav, Navbar} from "react-bootstrap";
import React from "react";

class NavbarPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        };
    }

    render() {
        return(
            <Navbar sticky={"top"} collapseOnSelect expand="lg" bg="dark" variant="dark" id={"navbarPosition"}>
                <Navbar.Brand id={'navbarLeft'}>{this.state.type}</Navbar.Brand>
                <Nav.Item>
                    <Nav.Link>
                        <button className={'btn btn-danger'} onClick={() => {
                            this.logout();
                        }}>Log Out
                        </button>
                    </Nav.Link>
                </Nav.Item>
            </Navbar>
        );
    }

    logout() {
        localStorage.clear();
        window.location.href = 'https://devweb2021.cis.strath.ac.uk/~qhb18155';
    }
}

export default NavbarPanel;