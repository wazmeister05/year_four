import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import NavbarPanel from "./NavbarPanel";
import {Dropdown} from "react-bootstrap";
import TextAreaHandle from "./TextAreaHandling";
import Collapsible from 'react-collapsible';
import AddUserComponent from "../Database/components/add-user.component";
import {AddCourseworkComponent} from "../Database/components/add-coursework.component";

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

class TeacherUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            t_code: "Select Class",
            t_chosen: false
        };
    }

    setCourse(course){
        this.setState({t_code: course});
        this.setState({t_chosen: true});
        document.getElementById("headerTitleTeacher").innerText = course;
        document.getElementById("selectClassFirst").style.opacity = "100";
    }

    render() {
        return(
            <div>
                <NavbarPanel type={this.props.user_details.username}/>
                <br/>
                <div className={"text-center"} id={"courseChoice"}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select Class
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {this.setCourse("CS451");}}>CS451</Dropdown.Item>
                            <Dropdown.Item onClick={() => {this.setCourse("THIS");}}>THIS</Dropdown.Item>
                            <Dropdown.Item onClick={() => {this.setCourse("THAT");}}>THAT</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <br/>
                    <h1 id={"headerTitleTeacher"}>{this.state.t_code}</h1>
                    <div className={"container"} style={{marginTop: "2%"}}>
                        <div id={"selectClassFirst"}>
                        <div className={"d-grid gap-2"}>
                            <Collapsible trigger={"Add New Coursework"}>
                                <div className={"internalCollapseDiv"}>
                                    <AddCourseworkComponent courseCode={this.state.t_code} teacher={this.props.user_details.username} />
                                </div>
                            </Collapsible>

                            <Collapsible trigger={"Edit Coursework"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>

                                </div>
                            </Collapsible>
                            <Collapsible trigger={"View Student Submissions"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>

                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Add Student to Course"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>

                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Remove Student from Course"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>

                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Add Student to System"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <AddUserComponent role={"student"}/>
                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Change Student Pairings"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>

                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Class Announcement"}>
                                <div className={"internalCollapseDiv"}>
                                    <TextAreaHandle classCode={this.state.t_code}/>
                                </div>
                            </Collapsible>
                        </div>
                        <br/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeacherUser;