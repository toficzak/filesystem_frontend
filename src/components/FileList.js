import React, { Component } from 'react'
import File from '../components/File'
import List from '@material-ui/core/List';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Breadcrumb from "./Breadcrumb"

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class FileList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            parent: null,
            files: [],
            breadcrumbs: [],
            types: [],
            context: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleDeleteAsset = this.handleDeleteAsset.bind(this);
        this.handleBreadcrumbClick = this.handleBreadcrumbClick.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/files/root")
            .then(response => response.json())
            .then(rootFile => fetch("http://localhost:8080/files/" + rootFile.id))
            .then(response => response.json())
            .then(response => {
                this.setState({
                    loading: false,
                    parent: response.metadata.parent,
                    files: response.data.files,
                    breadcrumbs: response.metadata.breadcrumbs
                })
            })

        fetch("http://localhost:8080/types")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    types: response
                })
            })
    }

    handleClick(file) {
        this.setState({
            loading: true
        })
        if (this.state.types.filter(t => t.name === file.type)[0].isContainer) {
            fetch("http://localhost:8080/files/" + file.id)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        loading: false,
                        parent: response.metadata.parent,
                        files: response.data.files,
                        breadcrumbs: response.metadata.breadcrumbs
                    })
                })
        }
        else {
            fetch("http://localhost:8080/files/" + file.id + "/data")
                .then(data => console.log(data))
        }
    }

    handleBreadcrumbClick(breadcrumb) {
        this.setState({
            loading: true
        })

        fetch("http://localhost:8080/files/" + breadcrumb.id)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    loading: false,
                    parent: response.metadata.parent,
                    files: response.data.files,
                    breadcrumbs: response.metadata.breadcrumbs
                })
            })
    }

    handleCopy(e, sourceFile, contextId) {
        e.stopPropagation();
        this.setState({
            loading: true
        })

        const currentFile = {
            id: contextId,
            type: "Directory"
        }

        fetch("http://localhost:8080/files/" + sourceFile.id + "/copy/" + contextId, {
            method: 'put'
          }).then(() => this.handleClick(currentFile))
    }

    handleDeleteAsset(e, file, contextId) {
        e.stopPropagation();
        this.setState({
            loading: true
        })

        const currentFile = {
            id: contextId,
            type: "Directory"
        }

        fetch("http://localhost:8080/files/" + file.id, {
            method: 'delete'
          }).then(() => this.handleClick(currentFile))
    }

    render() {
        let parentFile = ""
        if (this.state.parent !== null) {
            parentFile =
                <File
                    key={this.state.parent.id}
                    file={this.state.parent}
                    handleClick={this.handleClick}
                    type={this.state.types.filter(t => this.state.parent.type === t.name)}
                />
        }
        const fileItems = this.state.files.map(file =>
            <File
                key={file.id}
                file={file}
                contextId={this.state.breadcrumbs[this.state.breadcrumbs.length-1]['id']}
                handleClick={this.handleClick}
                handleCopy={this.handleCopy}
                handleDeleteAsset={this.handleDeleteAsset}
                type={this.state.types.filter(t => file.type === t.name)}
            />)
        const breadcrumbs = this.state.breadcrumbs.map(breadcrumb =>
            <Breadcrumb
                key={breadcrumb.id}
                breadcrumb={breadcrumb}
                handleBreadcrumbClick={this.handleBreadcrumbClick}
            />)

        return (
            <div>
                <Breadcrumbs 
                    separator={
                        <NavigateNextIcon fontSize="small" />} 
                    aria-label="breadcrumb"
                >
                {breadcrumbs}
                </Breadcrumbs>
                <List>
                    {parentFile}
                    {fileItems}
                </List>
            </div>
        )
    }
}

export default FileList;