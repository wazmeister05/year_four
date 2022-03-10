import React, { Component } from "react";
import UserDataService from "../user.service";
export default class AddUserComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
            id: null,
            username: "",
            role: "",
            firstName: "",
            lastName: "",
            submitted: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        });
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    saveUser() {
        let data = {
            username: this.state.username,
            role: this.state.role,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        UserDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    username: response.data.username,
                    role: response.data.role,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    newUser() {
        this.setState({
            id: null,
            username: "",
            role: "",
            firstName: "",
            lastName: "",
            submitted: false
        });
    }


    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newUser}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                name="title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Role</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.role}
                                onChange={this.onChangeRole}
                                name="description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                name="description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                                name="description"
                            />
                        </div>
                        <button onClick={this.saveUser} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}