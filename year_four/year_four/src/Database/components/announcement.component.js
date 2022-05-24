import React, {Component} from "react";
import AnnouncementDataService from "../announcement.service";

export default class Announcements extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveClasses = this.retrieveClasses.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveClass = this.setActiveClass.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.state = {
            content: [],
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
        console.log(classCode);
        AnnouncementDataService.findAll(classCode)
            .then(response => {
                this.setState({
                    content: response.data
                });
                this.presentClass();
            })
            .catch(e => {
                console.log(e);
            });
    }

    presentClass(){
        let classes = this.state.content;

        let mostRecentDate = 0;
        let mostRecentClass = {};
        console.log(classes);
        classes.forEach((class1) => {
            if(class1.classCode === this.props.classCode) {
                if(class1.announcementDate > mostRecentDate) {
                    mostRecentClass = class1;
                    mostRecentDate = class1.announcementDate;
                }
            }
        });

        this.setState({
            classChosen: mostRecentClass
        });

        let text = document.createElement("text");
        text.textContent = mostRecentClass.announcementText;

        let img = document.createElement("img");
        img.src = mostRecentClass.image;

        document.getElementById("content").appendChild(text);
        document.getElementById("content").appendChild(img);

    }

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
            <div>
                <div>
                    <button onClick={() => {this.retrieveClasses();}} className={"btn btn-success"}>Update {this.props.classCode} coursework</button>
                    <div id={"content"}> </div>
                </div>
                <br/>
            </div>
        );
    }
}