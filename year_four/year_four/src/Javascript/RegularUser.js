import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Course';
import ClassSelection from "./ClassSelection";
import Sidebar from "./Sidebar";


class RegularUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            page: "home",
            database: ""
        };
    }

    setCourse = (course) => {
        this.setState({code: course, page: "chosenCourse"});
    }

    setPage = (newPage) => {
        this.setState({page: newPage})
    }

    getPage() {
        switch (this.state.page) {
            case "home":
                return <ClassSelection setCourse={this.setCourse}/>
            case "chosenCourse":
                return <Course code={this.state.code}/>
            default:
                return <h1>ERROR</h1>
        }
    }

    // test = () => {
    //     fetch('https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/users')
    //         .then(response => response.json())
    //         .then(data => this.setState({database: data}));
    // }
    testLocal = () => {
        fetch('http://localhost:3007/users', {
            mode: 'no-cors'
        })
            .then(response => {
                if (!response.ok){
                    return Promise.reject(response.statusText);
                }
                return response.json()
            })
            .then(data => this.setState({database: data}))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-1">
                    <Sidebar navigate pageWrapId={'page-wrap'} outerContainerId={'outer-container'}
                             user={this.props.user_details} setPage={this.setPage}/>
                </div>
                <div id="page-wrap welcome" className="col-md-11">
                    <div><h1>Welcome, {this.props.user_details.username}</h1></div>
                    <div>
                        {this.getPage()}
                    </div>
                    <div>
                        <p>
                            test
                            {this.testLocal()}
                            {JSON.parse(this.state.database)}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegularUser;