import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import UserDataService from "../user.service";
import {Input, InputGroup, InputGroupText} from "reactstrap";
export default class AddUserComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
            id: null,
            username: "",
            role: props.role,
            firstName: "",
            lastName: "",
            password: "",
            submitted: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
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

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    saveUser() {
        let data = {
            username: this.state.username.toLowerCase(),
            role: this.state.role.toLowerCase(),
            firstName: this.state.firstName.toLowerCase(),
            lastName: this.state.lastName.toLowerCase(),
            password: this.state.password.toLowerCase()
        };

        UserDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    username: response.data.username,
                    role: response.data.role,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    password: response.data.password,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log("PROBLEM " + e.toString());
            });
    }
    newUser() {
        this.setState({
            id: null,
            username: "",
            firstName: "",
            lastName: "",
            password: "",
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
                        <InputGroup>
                            <InputGroupText>First Name</InputGroupText>
                            <Input type={"text"} className={"form-control"} name={"firstNameIN"} pattern={"\d*"}
                                   required value={this.state.firstName} onChange={this.onChangeFirstName} placeholder={"Enter First Name..."} />
                        </InputGroup><br/>
                        <InputGroup>
                            <InputGroupText>Surname</InputGroupText>
                            <Input type={"text"} className={"form-control"} name={"lastNameIN"} pattern={"\d*"}
                                   required value={this.state.lastName} onChange={this.onChangeLastName} placeholder={"Enter Surname..."} />
                        </InputGroup><br/>
                        <InputGroup>
                            <InputGroupText>Username</InputGroupText>
                            <Input type={"text"} className={"form-control"} name={"usernameIN"}
                                   required value={this.state.username} onChange={this.onChangeUsername} placeholder={"Enter Username..."} />
                        </InputGroup><br/>
                        <InputGroup>
                            <InputGroupText>Password</InputGroupText>
                            <Input type={"password"} className={"form-control"} name={"passwordIN"}
                                   required value={this.state.password} onChange={this.onChangePassword} placeholder={"Enter Password..."} />
                        </InputGroup><br/>
                        <button type="submit" onClick={this.saveUser} className="btn btn-success"
                            disabled={!this.state.username || !this.state.firstName || !this.state.lastName || !this.state.password}>
                            Submit {this.state.role}
                        </button>
                    </div>
                )}
            </div>
        );
    }
}