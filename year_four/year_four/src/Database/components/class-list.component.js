import React, { Component } from "react";
import ClassDataService from "../class.service";
import { Link } from "react-router-dom";
export default class ClassesList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveClasses = this.retrieveClasses.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveClass = this.setActiveClass.bind(this);
        this.removeAllClasses = this.removeAllClasses.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.state = {
            classes: [],
            currentClass: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }
    componentDidMount() {
        this.retrieveClasses();
    }
    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
            searchTitle: searchTitle
        });
    }
    retrieveClasses() {
        ClassDataService.getAll()
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
    removeAllClasses() {
        ClassDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }
    removeClass(id){
        ClassDataService.delete(id)
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }
    searchTitle() {
        ClassDataService.findByTitle(this.state.searchTitle)
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
        const { searchTitle, classes, currentClass, currentIndex } = this.state;
        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Class List</h4>
                    <ul className="list-group">
                        {classes &&
                        classes.map((tutorial, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveClass(tutorial, index)}
                                key={index}
                            >
                                {tutorial.title} ({tutorial.description}) - {tutorial.teacher}
                            </li>
                        ))}
                    </ul>
                    {/*<button className="m-3 btn btn-sm btn-danger" onClick={this.removeAllClasses}>Remove All*/}
                    {/*</button>*/}
                </div>
                <div className="col-md-6">
                    {currentClass ? (
                        <div>
                            <h4>Class</h4>
                            {/*<button onClick={this.removeClass(currentClass.id)}>*/}
                            {/*    Delete Class*/}
                            {/*</button>*/}
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentClass.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentClass.description}
                            </div>
                            <div>
                                <label>
                                    <strong>Teacher:</strong>
                                </label>{" "}
                                {currentClass.teacher}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Class...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}