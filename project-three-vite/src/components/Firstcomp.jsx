import React, { Component } from 'react'

export class Firstcomp extends Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
  render() {
    return (
      <div>
        <h1>is state important to know? {this.state.answer}</h1>
      </div>
    )
  }
}

export default Firstcomp