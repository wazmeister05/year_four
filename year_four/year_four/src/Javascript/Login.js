import React from 'react';

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
        const usernames = ["admin", "lecturer", "student"];
        if(usernames.includes(this.state.username.toString().toLowerCase())){
            this.props.login(this.state);
        }
        else{
            console.log("FAILURE Login.js username:" + this.state.username + " password: " + this.state.password)
        }
    }

    render(){
        const { items } = this.state;

        return(
            <div>
                <div>
                    <label>
                        Username :
                        <input
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password :
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <button onClick={this.onSubmitForm}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Login;