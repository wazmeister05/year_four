import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPanel from "./NavbarPanel";

class TeacherUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
        };
    }

    setCourse(course){
        this.setState({code: course});
    }

    render() {
        return(
            <div>
                <NavbarPanel type={this.props.user_details.username}/>

                <br/>
                <div className={"text-center"} id={"courseChoice"}>
                    <h2>Select class</h2><br/>
                    <button onClick={() => {
                        this.setState({course: "CS451"}); alert(this.state.code);
                        }
                    }>CS451</button><br/>
                    <a href={""}>CS320</a><br/>
                    <a href={""}>CS401</a><br/>
                    <h2>{this.state.code}</h2>
                </div>
            </div>
        );
    }
}

export default TeacherUser;