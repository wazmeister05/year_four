import React from 'react';
import Sidebar from "./Sidebar";
import StudentUser from "./StudentUser";
import AdminUser from "./AdminUser";
import TeacherUser from "./TeacherUser";
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const user_type = this.props.user;
        return (
            <div class="container-fluid" className="Home" id="outer-container">
                <div className="row">
                    <div className="col-md-1">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} user={user_type}/>
                    </div>
                    <div id="page-wrap" className="col-md-11" id="welcome">
                        <div><h1>Welcome, {user_type}</h1></div>
                        <div>
                            {user_type === 'admin' ? (
                                <AdminUser/>
                            ): user_type === 'student' ? (
                                <StudentUser/>
                            ): user_type === 'teacher' ? (
                                <TeacherUser/>
                            ):(
                                <Home/>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;