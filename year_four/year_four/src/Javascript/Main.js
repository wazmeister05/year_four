import React from 'react';
import Login from './Login';
import Home from './Home';

class Main extends React.Component {

    state = {logged_in: false};

    login = () => {
        this.setState({logged_in: true});
    }

    render() {
        if(this.state.logged_in){
            return <Home/>;
        }
        else {
            return <Login login={this.login}/>;
        }
    }


}

export default Main;