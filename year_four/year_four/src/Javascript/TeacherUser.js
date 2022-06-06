import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';
import NavbarPanel from "./NavbarPanel";
import {Dropdown} from "react-bootstrap";
import Collapsible from 'react-collapsible';
import AddUserComponent from "../Database/components/add-user.component";
import Submissions from "./Submissions";
import FileUpload from "./FileUpload";
import axios from "axios";


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
            t_chosen: false,
            t_type: "teacher"
        };
    }

    setCourse(course){
        this.setState({t_code: course});
        this.setState({t_chosen: true});
        document.getElementById("headerTitleTeacher").innerText = course;
        document.getElementById("selectClassFirst").style.opacity = "100";
    }

    async runPlag(){
        console.log(document.getElementById("ext").value);
        await axios.get("https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/hello",
            { params: { classCode: this.state.t_code, ext: document.getElementById("ext").value } })
            .then((response) => {
                let url = response.data.message;
                const index = url.indexOf('http');
                url = url.slice(index-1);

                const disable = document.querySelector('.disabled');
                disable.href= url;
                console.log(response.data);})
    }

    async student(){
        const FileDownload = require('js-file-download');
        // await axios.get("https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/getSubmissions",
        //     { params: { classCode: this.state.t_code, ext: document.getElementById("ext").value } })
        //     .then((response) => {
        //         let url = response.data.message;
        //         const index = url.indexOf('http');
        //         url = url.slice(index-1);
        //
        //         const disable = document.querySelector('.disabled');
        //         disable.href= url;
        //         console.log(response.data);})
        await axios({
            url: "https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/getSubmissions", //your url
            method: 'GET',
            params: {classCode: this.state.t_code},
            responseType: 'blob', // important
        }).then((response) => {
            FileDownload(response.data, this.state.t_code + 'submissions.zip');
        });
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
                            <Collapsible trigger={"Plagiarism Check"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <select id="ext">
                                        <option value="java">Java</option>
                                        <option value="python">Python</option>
                                        <option value="c" disabled>C</option>
                                        <option value="c++" disabled>C++</option>
                                        <option value="c#" disabled>C#</option>
                                        <option value="javascript" disabled>Javascript</option>
                                        <option value="fortran" disabled>FORTRAN</option>
                                        <option value="ml" disabled>ML</option>
                                        <option value="haskell" disabled>Haskell</option>
                                        <option value="lisp" disabled>Lisp</option>
                                        <option value="scheme" disabled>Scheme</option>
                                        <option value="pascal" disabled>Pascal</option>
                                        <option value="modula2" disabled>Modula2</option>
                                        <option value="ada" disabled>Ada</option>
                                        <option value="perl" disabled>Perl</option>
                                        <option value="tcl" disabled>TCL</option>
                                        <option value="matlab" disabled>Matlab</option>
                                        <option value="vdhl" disabled>VHDL</option>
                                        <option value="verilog" disabled>Verilog</option>
                                        <option value="spice" disabled>Spice</option>
                                        <option value="hcl2" disabled>HCL2</option>
                                    </select><br/><br/>
                                    <button onClick={() => {this.runPlag()}}>
                                        Run Plagiarism Detector
                                    </button>
                                    <br/>
                                    <a href={"javascript:alert('Run the plagiarism checker first')"} target="_blank" class={"disabled"} id={"plagRes"}>Results</a>
                                    <br/>
                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Add New Coursework"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <h6>Please name file in the format [submission name][class code].pdf</h6>
                                    <FileUpload classCode={this.state.t_code} type={"assignment"} user={this.state.t_type}/>
                                </div>
                            </Collapsible>
                            <Collapsible trigger={"Download Student Submissions"}>
                                <div className={"internalCollapseDiv"}>
                                    <br/>
                                    <button onClick={() => {this.student()}}>
                                        Download
                                    </button>
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

                            <Collapsible trigger={"Change Student Pairings"}>
                                <div className={"internalCollapseDiv"}>
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

export default TeacherUser;