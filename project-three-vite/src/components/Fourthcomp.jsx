import React, { Component } from 'react'

export class Fourthcomp extends Component {
    constructor() {
      super()
    
      this.state = {
         islogged: true
      }
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                islogged: !prevState.islogged
    }
    })
    }
  render() {
    return (
      <div>
        <h3>You are currently logged {this.state.islogged ? "in":"out"}</h3>
        <button onClick={this.handleClick} >{this.state.islogged ? "Logout":"Login"}</button>
      </div>
    )
  }
}

export default Fourthcomp