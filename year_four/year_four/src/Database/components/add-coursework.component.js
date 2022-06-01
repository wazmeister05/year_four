import React, {Component} from 'react'
// import { FilePond, registerPlugin } from "react-filepond";
// import "filepond/dist/filepond.min.css";
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {Input, InputGroup, InputGroupText} from "reactstrap";
import CourseworkDataService from "../coursework.service";

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
export class AddCourseworkComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.state = {
            title: "",
            // files: null,
            content: "",
            files: "",
            teacher: "test",
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    // handleInit() {
    //     console.log("FilePond instance has initialised", this.state.files);
    // }

    // retrieveAssignments() {
    //     CourseworkDataService.get(this.props.courseCode)
    //         .then(response => {
    //             this.setState({
    //                 classes: response.data
    //             });
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    onChangeFile(e){
        const scope = this;
        let base64 = "";
        let selectedFile = document.getElementById("inputFile").files;
        //Check File is not Empty
        if (selectedFile.length > 0) {
            // Select the very first file from list
            let fileToLoad = selectedFile[0];
            // FileReader function for read the file.
            let fileReader = new FileReader();

            // Onload of file read the file content
            fileReader.onload = function(fileLoadedEvent) {
                base64 = fileLoadedEvent.target.result;
                // Print data in console
                scope.setState({
                    content: base64
                });
                console.log(this.state.content);
                console.log(typeof this.state.content);
            };
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    // TODO: problem with this...
    saveCoursework() {
        let data = {
            title: this.state.title.toLowerCase(),
            courseCode: this.props.courseCode,
            content: this.state.content,
            teacher: this.state.teacher
        };
        CourseworkDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    courseCode: response.data.courseCode,
                    title: response.data.title,
                    content: response.data.content,
                    teacher: response.data.teacher
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log("PROBLEM " + e.toString());
            });

        // this.setState({files:null});

    }

    render() {
        return (
            <div className="App">
                <br/>
                <InputGroup>
                    <InputGroupText>Title</InputGroupText>
                    <Input type={"text"} className={"form-control"} name={"titleIN"} pattern={"\d*"}
                           required value={this.state.title} onChange={this.onChangeTitle} placeholder={"Enter Title..."} />
                </InputGroup><br/>
                <InputGroup>
                    <Input type="file" onChange={this.onChangeFile} id="inputFile" />
                </InputGroup><br/>

                {/*<FilePond*/}
                {/*    ref={ref => (this.pond = ref)}*/}
                {/*    allowMultiple={false}*/}
                {/*    allowReorder={true}*/}
                {/*    maxFiles={1}*/}
                {/*    instantUpload={false}*/}
                {/*    name="files"*/}
                {/*    // oninit={() => this.handleInit()}*/}
                {/*    onupdatefiles={fileItems => {*/}
                {/*        // Set currently active file objects to this.state*/}
                {/*        this.setState({*/}
                {/*            files: fileItems.map(fileItem => fileItem.file)*/}
                {/*            });*/}
                {/*        }*/}
                {/*    }*/}
                {/*/>*/}
                <button type="button" onClick={() => this.saveCoursework()} className="btn btn-success">Upload</button>
            </div>
        );
    }
}
