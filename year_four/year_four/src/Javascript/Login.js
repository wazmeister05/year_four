import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ADMIN = "admin";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputchange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitForm(){
        //if(usernames.includes(this.state.username.toString().toLowerCase())){
        if(this.state.username.toString().toLowerCase() === ADMIN && this.state.password.toString() === ADMIN){
            this.props.login(this.state);
        }
        else if(this.state.username.toString().toLowerCase() === "student" || this.state.username.toString().toLowerCase() === "teacher"){
            this.props.login(this.state);
        }
        else{
            console.log("FAILURE Login.js username:" + this.state.username + " password: " + this.state.password)
        }
    }

    render(){
        const { items } = this.state;
        return(
            <div id="login">
                <div className="container"><br/>
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                {/* <form id="login-form" className="form" action="" method="post" > */}
                                <form id="login-form" className="form">
                                    <h3 className="text-center text-black">Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-black">Username:</label><br/>
                                        <input type="text" name="username" id="username" value={this.state.username} onChange={this.onInputchange} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-black">Password:</label><br/>
                                        <input type="text" name="password" id="password" value={this.state.password} onChange={this.onInputchange} className="form-control"/>
                                    </div>
                                    <div className="form-group"><br/>
                                        <input type="submit" name="submit" className="btn btn-info btn-md" onClick={this.onSubmitForm}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;