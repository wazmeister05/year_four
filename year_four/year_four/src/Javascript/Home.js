import React from 'react';
import RegularUser from "./RegularUser";
import AdminUser from "./AdminUser";
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_details: this.props.user
        };
    }

    render() {

        return (
            <div className="container-fluid Home" id="outer-container">
                {this.state.user_details.username === 'admin' ? (
                    <AdminUser user_details={this.state.user_details}/>
                ): this.state.user_details.username === 'student' || this.state.user_details.username === 'teacher' ? (
                    <RegularUser user_details={this.state.user_details}/>
                ):(
                    <h1>ERROR</h1>
                )}

            </div>
        );
    }
}

export default Home;