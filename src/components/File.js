import React, {Component} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';

class File extends Component {

    render() {
        const size = ! this.props.type[0].isContainer ? this.props.file.size + " MiB" : ""
        const svg = this.props.type[0].avatarSvg
        return (
          <ListItem onClick={ () => this.props.handleClick(this.props.file)}>
            <ListItemAvatar>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d={svg}/></svg>
            </ListItemAvatar>
            <ListItemText primary={this.props.file.name} secondary={size} />
            <Button onClick={(e) => this.props.handleCopy(e, this.props.file, this.props.contextId)}> Copy </Button>
            <Button onClick={(e) => this.props.handleDeleteAsset(e, this.props.file, this.props.contextId)}> Delete </Button>
          </ListItem>
        )
    }
}

export default File