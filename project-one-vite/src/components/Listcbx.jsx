import React from 'react'

function Listcbx() {
  return (
    <div className='todo-list'>
        <h2>ToDo List</h2>
        <div className='todo-item'>
            <input type="checkbox" />
            <span>Complete this tutorials</span>
        </div>
        <div className='todo-item'>
            <input type="checkbox" />
            <span>Takeup a new project</span>
        </div>
        <div className='todo-item'>
             <input type="checkbox" />
             <span>Write test cases</span>
        </div>
       
    </div>
  )
}

export default Listcbx