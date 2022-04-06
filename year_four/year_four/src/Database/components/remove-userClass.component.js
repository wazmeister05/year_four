import React, { Component } from "react";
import RemClassDataService from "../user.service";
export default class RemoveUserClassComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);

        this.removeUserClass = this.removeUserClass.bind(this);
        this.newUserClass = this.newUserClass.bind(this);
        this.state = {
            id: null,
            username: "",
            class: "",
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
            class: e.target.value
        });
    }

    removeUserClass() {
        let data = {
            username: this.state.username.toLowerCase(),
            class: this.state.class.toLowerCase()
        };
        RemClassDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    username: response.data.username.toLowerCase(),
                    class: response.data.class.toLowerCase(),
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
            class: "",
            submitted: false
        });
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
                                <label htmlFor="class">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    required
                                    value={this.state.class}
                                    onChange={this.onChangeClass}
                                    name="role"
                                />
                            </div>
                            <br/>
                        </form>
                        <button type="submit" onClick={this.removeUserClass} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}