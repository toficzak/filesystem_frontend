import React from 'react'

class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
      this.contextId = props.contextId
    }
    handleSubmit(event) {
        event.preventDefault()

        const currentFile = {
            id: this.contextId,
            type: "Directory"
        }
        
        let file = {
            name: this.fileInput.current.files[0].name,
            size: this.fileInput.current.files[0].size,
            type: 'Image',
            parentId: this.contextId,
            path: '/home/krzysztof/Pictures/' + this.fileInput.current.files[0].name
        }
        
        fetch("http://localhost:8080/files", {
            method: 'post',
            body: JSON.stringify(file),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(() => this.props.handleClick(currentFile))
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }

  export default FileInput;