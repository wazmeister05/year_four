import React, { Component } from "react";
import AnnouncementDataService from "../Database/announcement.service";

export default class TextAreaHandling extends Component {
    constructor(props) {
        super(props);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.saveAnnouncement = this.saveAnnouncement.bind(this);
        this.state = {
            id: null,
            announcementText: "",
            classCode: this.props.classCode,
            announcementDate: ""
        };
    }

    onChangeFile(e){
        //Read File
        const scope = this;
        let base64 = "";
        let selectedFile = document.getElementById("inputFile").files;
        //Check File is not Empty
        if (selectedFile.length > 0) {
            // Select the very first file from list
            let fileToLoad = selectedFile[0];
            // FileReader function for read the file.
            let fileReader = new FileReader();

            // Onload of file read the file content
            fileReader.onload = function(fileLoadedEvent) {
                base64 = fileLoadedEvent.target.result;
                // Print data in console
                scope.setState({
                    announcementText: base64
                });
            };
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        }
    }


    onChangeClass(e) {
        this.setState({
            classCode: e.target.value
        });
    }

    saveAnnouncement() {
        let data = {
            announcementText: this.state.announcementText,
            classCode: this.props.classCode,
            announcementDate: Date.now().toString()
        };
        console.log(data.announcementText);
        AnnouncementDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    announcementText: response.data.announcementText,
                    classCode: response.data.classCode,
                    announcementDate: response.data.announcementDate
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.onChangeFile} id="inputFile" max={} accept="application/pdf" />
                <button type={"submit"} className="btn btn-success" id={"submitTextArea"} onClick={this.saveAnnouncement}>Submit</button>
                <br/>
                <br/>
            </div>
        );
    }
}