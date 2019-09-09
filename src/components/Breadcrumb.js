import React, { Component } from 'react'
import Link from '@material-ui/core/Link';


class Breadcrumb extends Component {
    render(){
        const hrefValue = 'localhost:3000/files/' + this.props.breadcrumb.id

        return (
            <Link color="inherit" href={hrefValue} >
                {this.props.breadcrumb.name}
            </Link>
        ) 
    }
}

export default Breadcrumb