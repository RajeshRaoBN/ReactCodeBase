import React, { Component } from 'react'

export class Datafetchcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mobiledata: [{}]
      }
    }

    componentDidMount() {
        fetch("https://api.restful-api.dev/objects")
        .then(response => response.json())
        .then(data => // console.log(data)
            this.setState({
            mobiledata: data
        })
    )
        
    }
  render() {
    return (
      <div>
        {this.state.mobiledata[0].name}
        {console.log(this.state.mobiledata[0].name)}
      </div>
    )
  }
}

export default Datafetchcomp