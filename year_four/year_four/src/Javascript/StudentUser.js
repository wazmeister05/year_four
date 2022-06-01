import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import NavbarPanel from "./NavbarPanel";
import {Dropdown} from "react-bootstrap";
import Collapsible from 'react-collapsible';
import {AddCourseworkComponent} from "../Database/components/add-coursework.component";
import Announcements from '../Database/components/announcement.component.js';

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

class StudentUser extends React.Component {

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
        document.getElementById("headerTitleStudent").innerText = course;
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
                    <h1 id={"headerTitleStudent"}>{this.state.t_code}</h1>
                    <div className={"container"} style={{marginTop: "2%"}}>
                        <div id={"selectClassFirst"}>
                            <div className={"d-grid gap-2"}>

                                <Collapsible trigger={"Upload Coursework"}>
                                    <div className={"internalCollapseDiv"}>
                                        <br/>
                                        <AddCourseworkComponent />
                                        <br/>
                                    </div>
                                </Collapsible>

                                <Collapsible trigger={"View Coursework"}>
                                    <div className={"internalCollapseDiv"}>
                                        <br/>
                                        <Announcements classCode={this.state.t_code}/>
                                        <br/>
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

export default StudentUser;