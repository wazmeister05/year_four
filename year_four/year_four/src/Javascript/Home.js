import React from 'react';
import Sidebar from "./Sidebar";
import RegularUser from "./RegularUser";
import AdminUser from "./AdminUser";
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_type: this.props.user
        };
    }

    render() {
        return (
            <div class="container-fluid" className="Home" id="outer-container">
                <div className="row">
                    <div className="col-md-1">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} user={this.state.user_type}/>
                    </div>
                    <div id="page-wrap" className="col-md-11" id="welcome">
                        <div><h1>Welcome, {this.state.user_type}</h1></div>
                        <div>
                            {this.state.user_type === 'admin' ? (
                                <AdminUser/>
                            ): this.state.user_type === 'student' || this.state.user_type === 'teacher' ? (
                                <RegularUser/>
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