import React, {Component} from "react";
import AnnouncementDataService from "../announcement.service";
import { Buffer } from "buffer";
import axios from "axios";


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



    async retrieveClasses() {
        const FileDownload = require('js-file-download');
        let aclassCode = this.props.classCode;
        await axios({
            url: "https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/getCoursework", //your url
            method: 'GET',
            params: {classCode: aclassCode},
            responseType: 'blob', // important
        }).then((response) => {
            FileDownload(response.data, 'assignment.pdf');
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
            <>
                <button onClick={() => {
                    this.retrieveClasses();
                }} className={"btn btn-success"}>Download {this.props.classCode} coursework
                </button>
                <br/>
                <object id={"content"} type="application/pdf" width="100%" height="842pt" />
                <br/>
            </>
        );
    }
}