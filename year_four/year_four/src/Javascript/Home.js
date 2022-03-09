import React from 'react';
import RegularUser from "./RegularUser";
import AdminUser from "./AdminUser";
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link, Routes} from "react-router-dom";
import AddTutorial from "./components/add-tutorial.components";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorial-list.component";

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
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a href="/tutorials" className="navbar-brand">
                            Hi
                        </a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/tutorials"} className="nav-link">
                                    Tutorials
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/add"} className="nav-link">
                                    Add
                                </Link>
                            </li>
                        </div>
                    </nav>
                    <div className="container mt-3">
                        <Routes>
                            <Route exact path="/tutorials" element={<TutorialsList/>} />
                            <Route exact path="/" element={<TutorialsList/>} />
                            <Route exact path="/add" element={<AddTutorial/>} />
                            <Route path="/tutorials/:id" element={<Tutorial/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;