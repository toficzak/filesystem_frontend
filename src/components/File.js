import React, {Component} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FileAvatar from './FileAvatar'

class File extends Component {

    render() {
        const size = !this.props.file.isContainer ? this.props.file.size + " MiB" : ""
        return (
          <ListItem onClick={ () => this.props.handleClick(this.props.file)}>
            <ListItemAvatar>
              <FileAvatar type={this.props.file.type}/>
            </ListItemAvatar>
            <ListItemText primary={this.props.file.name} secondary={size} />
            </ListItem>
        )
    }
}

export default File