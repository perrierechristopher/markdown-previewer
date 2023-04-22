import React from "react"
import Badge from "react-bootstrap/Badge"
import { marked } from "marked"


export default class App extends React.Component {

  constructor(props){
    super(props)

    // Initializing local state of the component to update the markdown output accordingly
    this.state = {
      markdown: "",
    };
  }


  // Function to update markdown by update markdown property in local state by passing a parameter
  updateMarkdown(markdown) {
    this.setState({ markdown })
  }
  render() {

    let title1 = "Markdown Input"
    let title2 = "Preview"

    let inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };

    let outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    }


    return (
      <div className='App'>
        <div className="container">

          <div className="row mt-4">

            <div className="col text-center">

              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>

          </div>

          <div className="row mt-4">

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Input
                  </Badge>
                </h4>

                <div className="mark-input" style={inputStyle}>
                  <textarea 
                    id = "editor"
                    className="input"
                    style={inputStyle}
                    value={this.state.markdown}
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value)
                    }}>

                      {console.log(this.state.markdown)}

                  </textarea>
                </div>;
              </div>
            </div>

            <div id="preview" className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div style={outputStyle}
                  dangerouslySetInnerHTML = {{ __html: marked(this.state.markdown)}}>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
