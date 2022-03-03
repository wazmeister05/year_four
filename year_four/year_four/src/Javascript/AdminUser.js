import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class AdminUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: ""
        };
    }

    // this.props.user_details.username

    render() {
        return (
            <div>
                <div>
                    <h1 className={'title'}>Admin Console</h1>
                    <div className={'logout'}><button onClick={() => {
                        this.logout();
                    }}>Log Out</button></div>
                </div>
                <div className={'adminFunctions'}>
                    <button type="button" className="collapsible">Add User</button>
                    <div className="content">
                        <h2>test</h2>
                    </div>
                    <button type="button" className="collapsible">Remove User</button>
                    <div className="content">
                        <p>test</p>
                    </div>
                    <button type="button" className="collapsible">Add Class</button>
                    <div className="content">
                        <p>test</p>
                    </div>
                    <button type="button" className="collapsible">Remove Class</button>
                    <div className="content">
                        <p>test</p>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let coll = document.getElementsByClassName("collapsible");
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }

        const url = 'https://devweb2021.cis.strath.ac.uk/~qhb18155/contacts.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({contacts: data})
                console.log(this.state.contacts)
            })

        // const fetchData = async () => {
        //     const response = await fetch('https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/users', {
        //         mode: 'no-cors'
        //     }).then(function(response){
        //         return response.json();
        //     }).then(function(data){
        //          console.log(data);
        //         }).catch(error => console.log(error));
        //     //console.log(response);
        //     //const { data } = await response;
        //     // console.log(data.toString());
        //     // this.setState(data);
        // }
        // fetchData().then(r => console.log(r));
        // console.log(this.state)
    }

    // test() {
    //     fetch('https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/users', {
    //         mode: 'no-cors'
    //     })
    //         .then((response) => {
    //             if (!response.ok){
    //                 return Promise.reject(response.statusText);
    //             }
    //             return response.json()
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             this.setState({database: data});
    //         })
    //         .catch(error => console.log(error));
    // }

    logout() {
        localStorage.clear();
        window.location.href = '/';
    }
}

export default AdminUser;