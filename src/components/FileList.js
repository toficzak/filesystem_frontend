import React, { Component } from 'react'
import File from '../components/File'
import myData from './data.json';
import List from '@material-ui/core/List';

class FileList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            files: []
        }
    }

    componentDidMount() {
        this.setState({
            loading: false,
            files: myData
        }) 
    }

    handleClick(id) {
        console.log(id);
    }
    

    render() {
        const fileItems = this.state.files.map(file => <File key={file.id} file={file} handleClick={this.handleClick}/>)

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