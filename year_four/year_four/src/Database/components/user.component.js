import React, { Component } from "react";
import UserDataService from "../user.service";
export default class User extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.getUser = this.getUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            currentUser: {
                id: null,
                username: "",
                firstName: "",
                lastName: "",
                role: "",
                email: ""
            },
            message: ""
        };
    }
    componentDidMount() {
        this.getUser(this.props.match.params.id);
    }
    onChangeUsername(e) {
        const username = e.target.value;
        this.setState(function(prevState) {
            return {
                currentUser: {
                    ...prevState.currentUser,
                    username: username
                }
            };
        });
    }
    onChangeRole(e) {
        const role = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                role: role
            }
        }));
    }
    onChangeEmail(e) {
        const email = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                email: email
            }
        }));
    }
    onChangeLastName(e) {
        const lastName = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                lastName: lastName
            }
        }));
    }
    onChangeFirstName(e) {
        const firstName = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                firstName: firstName
            }
        }));
    }

    getUser(id) {
        UserDataService.get(id)
            .then(response => {
                this.setState({
                    currentUser: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateUser() {
        UserDataService.update(
            this.state.currentUser.id,
            this.state.currentUser
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The user was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }
    deleteUser() {
        UserDataService.delete(this.state.currentUser.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/users')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div>
                {currentUser ? (
                    <div className="edit-form">
                        <h4>User</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={currentUser.username}
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    value={currentUser.role}
                                    onChange={this.onChangeRole}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={currentUser.role}
                                    onChange={this.onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={currentUser.lastName}
                                    onChange={this.onChangeLastName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={currentUser.firstName}
                                    onChange={this.onChangeFirstName}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                            </div>
                        </form>

                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteUser}
                        >
                            Delete
                        </button>
                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateUser}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a User...</p>
                    </div>
                )}
            </div>
        );
    }
}