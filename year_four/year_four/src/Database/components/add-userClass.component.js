import React, { Component } from "react";
import AddClassDataService from "../addClass.service";
export default class AddUserClassComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);

        this.saveUserClass = this.saveUserClass.bind(this);
        this.newUserClass = this.newUserClass.bind(this);
        this.state = {
            id: null,
            username: "",
            classCode: "",
            submitted: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeClass(e) {
        this.setState({
            classCode: e.target.value
        });
    }

    saveUserClass() {
        let data = {
            username: this.state.username,
            classCode: this.state.classCode
        };
        AddClassDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    username: response.data.username,
                    classCode: response.data.classCode,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    newUserClass() {
        this.setState({
            id: null,
            username: "",
            classCode: "",
            submitted: false
        });
    }

    getClasses(){

    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newUserClass}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <form className={"form-inside-input"}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    required
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    name="username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="class">Class Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    required
                                    value={this.state.classCode}
                                    onChange={this.onChangeClass}
                                    name="role"
                                />
                            </div>
                            <br/>
                        </form>
                        <button type="submit" onClick={this.saveUserClass} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}