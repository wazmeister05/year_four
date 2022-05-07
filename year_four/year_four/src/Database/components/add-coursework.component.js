import React, {Component} from 'react'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {Input, InputGroup, InputGroupText} from "reactstrap";
import CourseworkDataService from "../coursework.service";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
export class AddCourseworkComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.state = {
            title: "",
            files:[]
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleInit() {
        console.log("FilePond instance has initialised", this.state.files);
    }

    upload(){
        this.saveCoursework();
        window.alert("Uploaded");
        // Now clear the current component
        this.setState({files:[]});
        this.pond.removeFiles();
    }

    saveCoursework() {
        let data = {
            title: this.state.title.toLowerCase(),
            courseCode: this.state.courseCode,
            content: this.state.files,
            teacher: this.props.teacher.toLowerCase()
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
                <FilePond
                    ref={ref => (this.pond = ref)}
                    allowMultiple={false}
                    allowReorder={true}
                    maxFiles={3}
                    instantUpload={false}
                    name="files"
                    oninit={() => this.handleInit()}
                    onupdatefiles={fileItems => {
                        // Set currently active file objects to this.state
                        this.setState({
                            files: fileItems.map(fileItem => fileItem.file)
                            });
                        }
                    }
                />
                <button type="button" onClick={() => this.upload()} className="btn btn-success">Upload</button>
            </div>
        );
    }
}
