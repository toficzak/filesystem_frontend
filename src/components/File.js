import React, {Component} from 'react'

class File extends Component {

    render() {  
        return (
            <button onClick={ () => this.props.handleClick(this.props.file.id)}>cycki</button>
        )
    }
}

export default File