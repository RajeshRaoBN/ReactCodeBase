import React, { Component } from 'react'

export class Loadingcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoading: true
      }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 5000)
    }
  render() {
    return (
      <div>
        <h2>{this.state.isLoading ? "....loading":"Now loaded"}</h2>
      </div>
    )
  }
}

export default Loadingcomp