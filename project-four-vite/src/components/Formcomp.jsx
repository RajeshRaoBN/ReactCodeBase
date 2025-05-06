import React from 'react'

function Formcomp(props) {
  return (
    <div>
        <form>
            <input 
                type="text"  
                name="firstName" 
                value={props.data.firstName} 
                placeholder='First Name' 
                onChange={props.handleChange} />
            <br />
            <input 
                type="text" 
                name="lastName" 
                placeholder='Last Name' 
                value={props.data.lastName} 
                onChange={props.handleChange} />
            <br />
            <input 
                type="text" 
                name="age" 
                placeholder='Age' 
                value={props.data.age} 
                onChange={props.handleChange} />
            <br />
            <h4>Gender</h4>
            <label>
                <input 
                type='radio' 
                name="gender" 
                value="male" 
                checked={props.data.gender === 'male'} 
                onChange={props.handleChange} /> Male
            </label>
            <label>
                <input 
                type='radio' 
                name="gender" 
                value="female" 
                checked={props.data.gender === 'female'} 
                onChange={props.handleChange} /> Female
            </label>
            <br/>
            <h4>Destination</h4>
            <select 
                value={props.data.destination} 
                name='destination' 
                onChange={props.handleChange}>
                <option value="">-- Please choose a destination --</option>
                <option value="New York">New York</option>
                <option value="Tokyo">Tokyo</option>
                <option value="London">London</option>
                <option value="Dubai">Dubai</option>
            </select>
            <h4>Dietary Restriction</h4>
            <label>
                <input 
                    type='checkbox'
                    name='isVegan'
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                /> Vegan?
            </label>
            <label>
                <input 
                    type='checkbox'
                    name='isKosher'
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                /> Kosher?
            </label>
            <label>
                <input 
                    type='checkbox'
                    name='isLactoseFree'
                    onChange={props.handleChange}
                    checked={props.data.isLactoseFree}
                /> LactoseFree?
            </label>
            <h3>First name: {props.data.firstName}</h3>
            <h3>Last name: {props.data.lastName}</h3>
            <h3>Age: {props.data.age}</h3>
            <h3>Gender: {props.data.gender}</h3>
            <h3>Destination: {props.data.destination}</h3>
            <h3>Your dietary restriction: 
                <br/>
                Vegan: {props.data.isVegan ? "yes" : "no"}
                <br/>
                Kosher: {props.data.isKosher ? "yes" : "no"}
                <br/>
                Lactose Free: {props.data.isLactoseFree ? "yes" : "no"}
            </h3>            
        </form>
    </div>
  )
}

export default Formcomp