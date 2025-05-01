import React from 'react'
import Catcard from './Catcard'

function Catlist() {
  return (
    <div>
        <Catcard 
        cat={{name:"Mr. Furball",
        imgUrl:"https://placecats.com/neo/300/200",
        phone:"(212) 555-1234",
        email:"mr.furball@katzz.meow"}}
        
        />
    </div>
  )
}

export default Catlist