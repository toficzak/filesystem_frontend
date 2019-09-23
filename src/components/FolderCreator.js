import React from 'react'

class FolderCreator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          contextId: props.contextId
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      
      const currentFile = {
        id: this.state.contextId,
        type: "Directory"
    }
    
      let directory = {
        name: this.state.value,
        type: 'Directory',
        parentId: this.state.contextId
    }

    fetch("http://localhost:8080/files", {
        method: 'post',
        body: JSON.stringify(directory),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(() => this.props.handleClick(currentFile))
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Create" />
        </form>
      );
    }
  }

  export default FolderCreator