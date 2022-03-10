import React from 'react';
import StudentUser from "./StudentUser";
import AdminUser from "./AdminUser";
import TeacherUser from "./TeacherUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_details: this.props.user
        };
    }

    render() {
        return (
            <div className={'wholeSite'}>
                {this.state.user_details.username === 'admin' ? (
                    <AdminUser user_details={this.state.user_details}/>
                ): this.state.user_details.username === 'student' ? (
                    <StudentUser user_details={this.state.user_details}/>
                ): this.state.user_details.username === 'teacher' ? (
                    <TeacherUser user_details={this.state.user_details}/>
                ):(
                    <h1>ERROR</h1>
                )}
            </div>
        );
    }
}

export default Home;