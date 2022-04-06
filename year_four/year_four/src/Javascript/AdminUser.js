import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import NavbarPanel from "./NavbarPanel";
import {Link, Route, Routes} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddUserComponent from "../Database/components/add-user.component";
import RemoveUserClassComponent from "../Database/components/remove-userClass.component";
import AddUserClassComponent from "../Database/components/add-userClass.component";

import AddClass from "../Database/components/add-class.components";

class AdminUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: "",
            pageType: "Admin Panel"
        };
    }

    render() {
        return (
            <div>
                <NavbarPanel type={"Admin Panel"}/>
                <div className={"container"}>
                    <div className={"container"} style={{marginTop: "2%"}}>
                        <div className={"d-grid gap-2"}>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/~qhb18155/addUser"} className="nav-link" style={{color: "white"}}>
                                    Add User
                                </Link>
                            </Button>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/~qhb18155/addClass"} className="nav-link" style={{color: "white"}}>
                                    Add Class
                                </Link>
                            </Button>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/~qhb18155/addUserToClass"} className="nav-link" style={{color: "white"}}>
                                    Add user to class
                                </Link>
                            </Button>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/~qhb18155/removeUserFromClass"} className="nav-link" style={{color: "white"}}>
                                    Remove user from class
                                </Link>
                            </Button>
                            <Routes>
                                <Route exact path="/~qhb18155/addUser" element={<AddUserComponent />} />
                                <Route exact path="/~qhb18155/addClass" element={<AddClass />} />
                                <Route exact path="/~qhb18155/addUserToClass" element={<AddUserClassComponent />} />
                                <Route exact path="/~qhb18155/removeUserFromClass" element={<RemoveUserClassComponent />} />
                            </Routes>
                        </div>
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
}

export default AdminUser;