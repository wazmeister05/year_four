import React, { Component } from "react";
import ClassDataService from "../class.service";
export default class AddClass extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTeacher = this.onChangeTeacher.bind(this);
        this.saveClass = this.saveClass.bind(this);
        this.newClass = this.newClass.bind(this);
        this.state = {
            id: null,
            title: "",
            description: "",
            teacher: "",
            published: false,
            submitted: false
        };
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeTeacher(e) {
        this.setState({
            teacher: e.target.value
        });
    }
    saveClass() {
        let data = {
            title: this.state.title.toLowerCase(),
            description: this.state.description.toLowerCase(),
            teacher: this.state.teacher.toLowerCase()
        };
        ClassDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    teacher: response.data.teacher,
                    published: response.data.published,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    newClass() {
        this.setState({
            id: null,
            title: "",
            description: "",
            teacher: "",
            published: false,
            submitted: false
        });
    }
    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newClass}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="teacher">Teacher</label>
                            <input
                                type="text"
                                className="form-control"
                                id="teacher"
                                required
                                value={this.state.teacher}
                                onChange={this.onChangeTeacher}
                                name="teacher"
                            />
                        </div>
                        <br/>
                        <button onClick={this.saveClass} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}