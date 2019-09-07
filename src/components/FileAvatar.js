import React, {Component} from 'react'
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import FolderIcon from '@material-ui/icons/Folder';
import DocumentIcon from '@material-ui/icons/Description';
import UnrecognizedIcon from '@material-ui/icons/NotInterested';

class FileAvatar extends Component {

    render() {
        const type = this.props.type;
        let icon;
         
        if(type === "Directory")
        {
            icon = <FolderIcon/>
        }
        else if(type === "Image")
        {
            icon = <ImageIcon/>
        }
        else if(type === "Document")
        {
            icon = <DocumentIcon/>
        }
        else
        {
            icon = <UnrecognizedIcon/>
        }

        return (
              <Avatar>
                {icon}
              </Avatar>
        );
    }
}

export default FileAvatar