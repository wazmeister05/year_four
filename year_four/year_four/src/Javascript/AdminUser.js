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
import TutorialsList from "../Database/components/tutorial-list.component";
import AddTutorial from "../Database/components/add-tutorial.components";
import Tutorial from "../Database/components/tutorial.component";
import User from "../Database/components/user.component";

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
                                <Route exact path="/addUser" element={<AddUserComponent />} />
                                <Route exact path="/removeUser" element={<RemoveUserComponent />} />
                                <Route exact path="/addClass" element={<AddClassComponent />} />
                                <Route exact path="/removeClass" element={<RemoveClassComponent />} />
                            </Routes>
                        </div>
                    </div>
                </div>



                {/*delete below*/}



                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/tutorials" className="navbar-brand">
                        bezKoder
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/tutorials"} className="nav-link">
                                Tutorials
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                        </li>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<TutorialsList />} />
                        <Route path="/tutorials" element={<TutorialsList />} />
                        <Route path="/add" element={<AddTutorial />} />
                        <Route path="/tutorials/:id" element={<Tutorial />} />
                    </Routes>
                </div>


                {/*delete above*/}

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