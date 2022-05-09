import React, { Component } from "react";
import AnnouncementDataService from "../Database/announcement.service";

export default class TextAreaHandling extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.saveAnnouncement = this.saveAnnouncement.bind(this);
        this.state = {
            id: null,
            image: null,
            announcementText: "",
            classCode: this.props.classCode,
            announcementDate: ""
        };
    }

    onChangeImage(e){
        this.setState({
           image: e.target.value
        });
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
            image: this.state.image,
            announcementDate: Date.now().toString()
        };
        AnnouncementDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    announcementText: response.data.announcementText,
                    image: response.data.image,
                    classCode: response.data.classCode,
                    announcementDate: response.data.announcementDate
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    // searchAll() {
    // AnnouncementDataService.findAll(this.state.searchTitle)
    //     .then(response => {
    //         this.setState({
    //             classes: response.data
    //         });
    //         console.log(response.data);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //     });
    // }

    render() {
        return (
            <div>
                <div>
                <textarea id={"announcementBox"}
                          onChange={this.onChangeText}
                          placeholder="Type in here"/>
                </div>
                <input type="file" onChange={this.onChangeImage} id="image-input" accept="image/jpeg, image/png, image/jpg" />
                <button type={"submit"} className="btn btn-success" id={"submitTextArea"} onClick={this.saveAnnouncement}>Submit</button>
                <br/>
                <br/>
            </div>
        );
    }
}