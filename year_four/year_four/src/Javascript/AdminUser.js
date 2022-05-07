import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import NavbarPanel from "./NavbarPanel";
import AddUserComponent from "../Database/components/add-user.component";
import AddClass from "../Database/components/add-class.components";
import ClassesList from "../Database/components/class-list.component";
import User from "../Database/components/user.component";
import Collapsible from 'react-collapsible';

class AdminUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: "",
            pageType: "Admin Panel",
        };
    }

    render() {
        return (
            <div>
                <NavbarPanel type={"Admin Panel"}/>
                <div className={"container"}>
                    <div className={"container"} style={{marginTop: "2%"}}>
                        <div className={"d-grid gap-2"}>
                            <Collapsible trigger={"Add Teacher to System"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <AddUserComponent role={"teacher"}/>
                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Add Student to System"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <AddUserComponent role={"student"}/>
                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Add Class"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <AddClass />
                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Classes"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <ClassesList />
                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Users"}>
                                <div className={"internalCollapseDiv"}>
                                <br/>
                                <User />
                                </div>
                            </Collapsible>

                            {/*Keeping these here (for now) in case there are issues later*/}

                            {/*<Button variant="secondary" size={"1g"}>*/}
                            {/*    <Link to={"/addUser"} className="nav-link" style={{color: "white"}}>*/}
                            {/*        Add Teacher*/}
                            {/*    </Link>*/}
                            {/*</Button>*/}
                            {/*<Button variant="secondary" size={"1g"}>*/}
                            {/*    <Link to={"/addClass"} className="nav-link" style={{color: "white"}}>*/}
                            {/*        Add Class*/}
                            {/*    </Link>*/}
                            {/*</Button>*/}
                            {/*<Button variant="secondary" size={"1g"}>*/}
                            {/*    <Link to={"/classList"}  className="nav-link" style={{color: "white"}}>*/}
                            {/*        Classes*/}
                            {/*    </Link>*/}
                            {/*</Button>*/}
                            {/*<Button variant="secondary" size={"1g"}>*/}
                            {/*    <Link to={"/userList"}  className="nav-link" style={{color: "white"}}>*/}
                            {/*        Users*/}
                            {/*    </Link>*/}
                            {/*</Button>*/}
                            {/*<Routes>*/}
                            {/*    <Route exact path="/addUser" element={<AddUserComponent />} />*/}
                            {/*    <Route exact path="/addClass" element={<AddClass />} />*/}
                            {/*    <Route exact path="/classList" element={<ClassesList />} />*/}
                            {/*    <Route exact path="/userList" element={<User />} />*/}
                            {/*</Routes>*/}
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