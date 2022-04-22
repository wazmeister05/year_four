import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import NavbarPanel from "./NavbarPanel";
import {Link, Route, Routes} from "react-router-dom";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import AddCoursework from "../Database/components/add-coursework.component";
import TextAreaHandle from "./TextAreaHandling";


class TeacherUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "Select Class",
        };
    }

    setCourse(course){
        //this.setState({code: course});
        document.getElementById("headerTitleTeacher").innerText = course;
        this.setState({code: course});
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
                            <Dropdown.Item onClick={() => {
                                this.setCourse("CS451");
                                }
                            }>CS451</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                this.setCourse("THIS");
                            }
                            }>THIS</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                this.setCourse("THAT");
                            }
                            }>THAT</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <br/>
                    <h1 id={"headerTitleTeacher"}>{this.state.code}</h1>



                    <div className={"container"} style={{marginTop: "2%"}}>
                        <div className={"d-grid gap-2"}>
                            <Button variant="secondary" >
                                <Link to={"/addCoursework"} className="nav-link" style={{color: "white"}}>
                                    New Coursework
                                </Link>
                            </Button>
                            <Routes>
                                <Route exact path="/addCoursework" element={<AddCoursework courseCode={this.state.code} />} />
                            </Routes>
                            <Button variant="secondary" size={"1g"}>
                                <Link to={"/classAnnouncement"} className="nav-link" style={{color: "white"}}>
                                    Class Announcement
                                </Link>
                            </Button>
                        </div>
                        <TextAreaHandle version={"announce"}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default TeacherUser;