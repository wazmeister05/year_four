import React, { Component } from "react";
import TextAreaHandle from "../../Javascript/TextAreaHandling";
import DropzoneComponent from "../../Javascript/FileHandling";


export default class AddCoursework extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseCode: this.props.courseCode
        };
    }

    render(){
        return (
            <div>

                <div className={"container"}>
                    <br/>
                    <DropzoneComponent />
                    <div className={"container"} style={{marginTop: "2%"}}>
                        <div className={"d-grid gap-2"}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}