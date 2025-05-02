import React, { Component } from 'react'

export class Thirdcomp extends Component {
    constructor() {
      super()
      this.state = {
         name: "Ram",
         age: 30
      }
    }
  render() {
    
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}

export default Thirdcomp