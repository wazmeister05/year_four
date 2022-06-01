import React, {Component} from "react";
import AnnouncementDataService from "../announcement.service";
import { Buffer } from "buffer";


export default class Announcements extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveClasses = this.retrieveClasses.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveClass = this.setActiveClass.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.state = {
            content: "",
            classChosen: {},
            line: ""
        };
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveClasses() {
        let classCode = this.props.classCode;
        AnnouncementDataService.findOne(classCode)
            .then(response => {
                const base64String = response.data[0].announcementText;
                const actualBase64String = Buffer.from(base64String, 'utf8').toString('utf8');

                this.setState(() => ({
                    content: actualBase64String
                }), () => {
                    document.getElementById("content").data = actualBase64String;
                })
            })
            .catch(e => {
                console.log(e);
            });
    }

    // presentClass(){
    //     let classes = this.state.content;
    //
    //     let mostRecentDate = 0;
    //     let mostRecentClass = {};
    //     console.log(classes);
    //     classes.forEach((class1) => {
    //         if(class1.classCode === this.props.classCode) {
    //             if(class1.announcementDate > mostRecentDate) {
    //                 mostRecentClass = class1;
    //                 mostRecentDate = class1.announcementDate;
    //             }
    //         }
    //     });
    //
    //     this.setState({
    //         classChosen: mostRecentClass
    //     });
    //
    //     let text = document.createElement("text");
    //     text.textContent = mostRecentClass.announcementText;
    //
    //     let img = document.createElement("img");
    //     img.src = mostRecentClass.image;
    //
    //     document.getElementById("content").appendChild(text);
    //     document.getElementById("content").appendChild(img);
    //
    // }

    refreshList() {
        this.retrieveClasses();
        this.setState({
            currentClass: null,
            currentIndex: -1
        });
    }

    setActiveClass(tutorial, index) {
        this.setState({
            currentClass: tutorial,
            currentIndex: index
        });
    }

    searchTitle() {
        Announcements.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    classes: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <>
                <button onClick={() => {
                    this.retrieveClasses();
                }} className={"btn btn-success"}>Update {this.props.classCode} coursework
                </button>
                <br/>
                <object id={"content"} type="application/pdf" width="100%" height="842pt" />
                <br/>
            </>
        );
    }
}