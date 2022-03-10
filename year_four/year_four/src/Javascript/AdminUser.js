import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import NavbarPanel from "./NavbarPanel";
import {Link, Route, Routes} from "react-router-dom";
import AddUserComponent from "../Database/components/add-user.component";
import RemoveUserComponent from "../Database/components/remove-user.component";
import AddClassComponent from "../Database/components/add-class.component";
import RemoveClassComponent from "../Database/components/remove-class.component";
import {Button} from "react-bootstrap";

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
                                <Link to={"/addUser"} className="nav-link" style={{color: "white"}}>
                                    Add User
                                </Link>
                            </Button>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/removeUser"} className="nav-link" style={{color: "white"}}>
                                    Remove User
                                </Link>
                            </Button>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/addClass"} className="nav-link" style={{color: "white"}}>
                                    Add Class
                                </Link>
                            </Button>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/removeClass"} className="nav-link" style={{color: "white"}}>
                                    Remove Class
                                </Link>
                            </Button>
                            <Routes>
                                <Route exact path="/addUser" element={AddUserComponent} />
                                <Route exact path="/removeUser" element={RemoveUserComponent} />
                                <Route exact path="/addClass" element={AddClassComponent} />
                                <Route exact path="/removeClass" element={RemoveClassComponent} />
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