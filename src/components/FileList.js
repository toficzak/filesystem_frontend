import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import  File from '../components/File'
import axios from 'axios'
import myData from './data.json';
import { runInThisContext } from 'vm';

//const client =  create http client

class FileList extends Component {
    state = {
        files: [],
        searchString: ''
    }

    constructor() {
        super()
        this.state = {
            query: this.state.searchString,
            files: myData

        }
        //axios.get('https://api.github.com/users/maecapozzi')
        //.then(response => console.log(response))
        //this.getRootFiles()
    }

    onSearchInputChange = (event) => {
        if(event.target.valid)
        {
            this.setState({searchString: event.target.value, files: myData})
        } else {
            this.setState({searchString: '', files: myData})
        }
    }

    // getRootFiles = () => {
    //     axios.get('https://api.github.com/users/maecapozzi')
    //         // get json of root folder
    //         query: this.state.searchString
    //     })
    //     .then((response) => {
    //         this.setState({files: response.items})
    //     })
    //     .catch((error) => {
    //         console.log("Error occured while fetching files for root folder.")
    //         console.log(error)
    //     }) 
    // }

    render() {
        return (
            <div>
                {this.state.files ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id='searchInput'
                            placeholder='search for file'
                            margin='normal'
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.files.map(currentFile => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <File file={currentFile}/>
                                </Grid>    
                            ))}
                        </Grid>
                    </div>
                ) : "No files"}
            </div>
        )
    }
}


export default FileList;