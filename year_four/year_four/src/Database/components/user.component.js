import React, { Component } from "react";
import UserDataService from "../user.service";
export default class User extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.setActiveUser = this.setActiveUser.bind(this);
        this.state = {
            allUsers: [],
            currentIndex: -1,
            currentUser: {
                id: null,
                username: "",
                firstName: "",
                lastName: "",
                role: "",
                password: "",
                email: ""
            },
            message: ""
        };
    }
    componentDidMount() {
        this.getAllUsers();
        console.log("users retrieved")
    }

    setActiveUser(user, index) {
        this.setState({
            currentUser: user,
            currentIndex: index
        });
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
    onChangeEmail(e) {
        const email = e.target.value;
        this.setState(function(prevState) {
            return {
                currentEmail: {
                    ...prevState.currentEmail,
                    username: email
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
    onChangePassword(e) {
        const password = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                password: password
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

    getAllUsers() {
        UserDataService.getAll()
            .then(response => {
                this.setState({
                    allUsers: response.data
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
    deleteUser(id) {
        UserDataService.delete(id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/users')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentUser, allUsers, currentIndex } = this.state;
        return (
            <div>
                <div className="list row">
                    <div className="col-md-8">
                        <ul className="list-group" id={"userListID"}>
                            {allUsers &&
                            allUsers.map((user, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveUser(user, index)}
                                    key={index}
                                >
                                    {user.firstName} {user.lastName}
                                </li>
                            ))}
                        </ul>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        {currentUser ? (
                            <div>
                                <div>
                                    <label>
                                        <strong>Username:</strong>
                                    </label>{" "}
                                    {currentUser.username}
                                </div>
                                <div>
                                    <label>
                                        <strong>Password:</strong>
                                    </label>{" "}
                                    {currentUser.password}
                                </div>
                                <div>
                                    <label>
                                        <strong>Role:</strong>
                                    </label>{" "}
                                    {currentUser.role}
                                </div>
                                <div>
                                    <label>
                                        <strong>Email:</strong>
                                    </label>{" "}
                                    {currentUser.email}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <br />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}