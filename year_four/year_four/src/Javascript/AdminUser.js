import React, {useEffect} from 'react';
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
import axios from "axios";

class AdminUser extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            contacts: "",
            pageType: "Admin Panel",
        };
    }

    render(){
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){

        // let classes = async () => {
        //     try {
        //         const request = await axios.get("https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/hello");
        //         console.log(request.data);
        //         let classData = request.data;
        //
        //     } catch (error){
        //         alert(error);
        //     }
        // };
        // classes();


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