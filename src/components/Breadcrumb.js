import React, { Component } from 'react'
import Link from '@material-ui/core/Link';


class Breadcrumb extends Component {
    render(){
        return (
            <Link color="inherit" onClick={ () => this.props.handleBreadcrumbClick(this.props.breadcrumb)}>
                {this.props.breadcrumb.name}
            </Link>
        ) 
    }
}

export default Breadcrumb