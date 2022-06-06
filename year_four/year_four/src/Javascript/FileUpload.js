import React, { useState } from "react";
import axios from "axios";
import AnnouncementDataService from "../Database/announcement.service";
import CourseworkDataService from "../Database/coursework.service";
import AdminUser from "./AdminUser";
import StudentUser from "./StudentUser";
import TeacherUser from "./TeacherUser";


function FileUpload(classCode, path, user) {

    const [fileData, setFileData] = useState("");
    const aclassCode = classCode.classCode;
    const auser = classCode.user
    console.log(auser);
    let urlPath = "";

    const getFile = (e) => {
        setFileData(e.target.files[0]);
    };

    const uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", fileData);
        data.append("path", path);

        let suburl;
        if(classCode.type === "submission"){
            suburl = "https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/submission/"
        }
        else{
            suburl = "https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/assignment/"
        }
        axios({
            method: "POST",
            url: suburl,
            data: data,
        }).then((res) => {
            alert(res.data.message);
            urlPath = res.data.message;
        });
    };

    const save = () => {
        if(auser === "teacher"){
            let data = {
                // announcementText should actually be a path
                announcementText: urlPath ? urlPath : "test",
                classCode: aclassCode,
                announcementDate: Date.now().toString()
            };

            AnnouncementDataService.create(data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        else if(auser === "student"){
            let data = {
                title: document.getElementById("inputFile").innerText,
                courseCode: aclassCode,
                content: urlPath ? urlPath : "test",
                teacher: "teacher"
            };

            CourseworkDataService.create(data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log("PROBLEM " + e.toString());
                });
        }

    }

    return (
        <form onSubmit={uploadFile}>
            {auser === 'teacher' ? (
                <input type="file" name="file" id="inputFile" onChange={getFile} accept={".pdf"} required />
            ):(
                <input type="file" name="file" id="inputFile" onChange={getFile} required />
            )}
            <input type="submit" name="upload" value="Upload" onClick={save}/>
            <br/>
        </form>
    );
}

export default FileUpload;
