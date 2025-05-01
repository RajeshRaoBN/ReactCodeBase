import React from 'react'

function Greetings() {
    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if (hours < 12) {
        timeofDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeofDay = "afternoon"
    } else {
        timeofDay = "night"
    }

    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: 24
    }
  return (
    <div>
        <h3 style={styles}>Good {timeofDay}</h3>
    </div>
  )
}

export default Greetings