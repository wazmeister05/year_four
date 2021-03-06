import React from 'react';
import Login from './Login';
import Home from './Home';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state={user_returned: this.props.user}
    }

    state = {logged_in: false, user_details: null};

    login = (login_details) => {
        //console.log("Main.js username:" + login_details.username + ", password:" + login_details.password);
        this.setState({logged_in: true, user_details: login_details});
    }

    render() {
        console.log(this.state.logged_in);
        if(this.state.logged_in){
            return <Home user={this.state.user_details}/>;
        }
        else {
            return <Login login={this.login}/>;
        }
    }
}

export default Main;