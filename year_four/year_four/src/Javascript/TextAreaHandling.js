import React, { Component } from "react";
import AnnouncementDataService from "../Database/announcement.service";

export default class TextAreaHandling extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.saveAnnouncement = this.saveAnnouncement.bind(this);
        this.state = {
            id: null,
            announcementText: "",
            classCode: this.props.classCode,
            announcementDate: ""
        };
    }

    onChangeText(e) {
        this.setState({
            announcementText: e.target.value
        });
    }
    onChangeClass(e) {
        this.setState({
            classCode: e.target.value
        });
    }

    saveAnnouncement() {
        let data = {
            announcementText: this.state.announcementText.toLowerCase(),
            classCode: this.props.classCode,
            announcementDate: Date.now().toString()
        };
        AnnouncementDataService.create(data)
            .then(response => {
                console.log("Saving 2")
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
                {console.log(this.props.classCode)}
                <div>
                <textarea id={"announcementBox"}
                          onChange={this.onChangeText}
                          placeholder="Type in here"/>
                </div>
                <button type={"submit"} id={"submitTextArea"} onClick={this.saveAnnouncement}>Submit
                </button>
                <br/>
                <br/>
            </div>
        );
    }


// function searchAll() {
//     AnnouncementDataService.findAll(this.state.searchTitle)
//         .then(response => {
//             this.setState({
//                 classes: response.data
//             });
//             console.log(response.data);
//         })
//         .catch(e => {
//             console.log(e);
//         });
// }
}