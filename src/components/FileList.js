import React, { Component } from 'react'
import File from '../components/File'
import List from '@material-ui/core/List';

class FileList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            files: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/files/root")
            .then(response => response.json())
            .then(rootFile => fetch("http://localhost:8080/files/" + rootFile.id))
            .then(response => response.json())
            .then(files => {
                console.log(files)
                this.setState({
                    loading: false,
                    files: files
                })
            })

    }

    handleClick(file) {
        this.setState({
            loading: true
        })
        console.log(file.id)
        if (file.isContainer) {
            fetch("http://localhost:8080/files/" + file.id)
                .then(response => response.json())
                .then(files => {
                    console.log(files)
                    this.setState({
                        loading: false,
                        files: files
                    })
                })
        }
        else {
            fetch("http://localhost:8080/files/" + file.id + "/data")
            .then(data => console.log(data))
        }
    }


    render() {
        const fileItems = this.state.files.map(file => <File key={file.id} file={file} handleClick={this.handleClick} />)

        return (
            <div>
                <List>
                    {fileItems}
                </List>
            </div>
        )
    }
}

export default FileList;