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
            content: []
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
            })
            .catch(e => {
                console.log(e);
            });
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
                    <p>{typeof this.state.content}</p>
                </div>
                <br/>
            </div>
        );
    }
}