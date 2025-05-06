import React, { Component } from 'react'

export class Firstcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname: "",
         lastname: "",
         isfriendly: false,
         gender: "",
         favColor: "blue"
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkedbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text"  name="firstname" value={this.state.firstname} placeholder='First Name' onChange={this.handleChange} />
            <br />
            <input type="text" name="lastname" placeholder='Last Name' value={this.state.lastname} onChange={this.handleChange} />
            <h1>Name: {this.state.firstname} {this.state.lastname}</h1>
            <textarea value={"Type in your message"} />
            <br/>
            <lable>
                <input type='checkbox' name='isfriendly' checked={this.state.isfriendly} onChange={this.handleChange} />
                Is friendly?
            </lable>
            <label>
                <input type="radio" name='gender'
                    value="male" checked={this.state.gender === "male"}
                    onChange={this.handleChange} />Male
            </label>
            <label>
                <input type="radio" name='gender'
                    value="female" checked={this.state.gender === "female"}
                    onChange={this.handleChange} />Female
            </label>
            <h2>You are a {this.state.gender}</h2>
            <br />
            <label>Favourite Color:</label>
            <select value={this.state.favColor}
                onChange={this.handleChange} 
                name="favColor" >
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
            </select>
            <h2>Your favourite color is {this.state.favColor}</h2>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Firstcomp