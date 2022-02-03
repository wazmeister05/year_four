import React from 'react';

class Login extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {username: "", password: ""};
    // }
    //
    // onClickLogin() {
    //     this.props.login();
    // }
    //
    // render() {
    //     return <div>
    //             <h2>Hi, I am a login page!</h2>
    //             <div>
    //                 <label for="username">Username</label><br/>
    //                 <input type="text" id="username"/><br/>
    //                 <label for="pwd">Password:</label><br/>
    //                 <input type="password" id="pwd"/><br/><br/>
    //             </div>
    //             <div>
    //                 <button type="submit" onClick={() => this.onClickLogin()}>Submit</button>
    //             </div>
    //         </div>
    // }

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
        console.log(this.state)
        if(usernames.includes(this.state.username))
        this.props.login();
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