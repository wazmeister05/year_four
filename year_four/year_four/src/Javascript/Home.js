import React from 'react';
import Sidebar from "./Sidebar";
import StudentLaunchpad from "./StudentLaunchpad";
import MaintenanceLaunchpad from "./MaintenanceLaunchpad";
import LecturerLaunchpad from "./LecturerLaunchpad";
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
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div id="page-wrap" className="col-md-11" id="welcome">
                        <div><h1>Welcome, {user_type}</h1></div>
                        <div>
                            {user_type === 'admin' ? (
                                <MaintenanceLaunchpad/>
                            ): user_type === 'student' ? (
                                <StudentLaunchpad/>
                            ): user_type === 'lecturer' ? (
                                <LecturerLaunchpad/>
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