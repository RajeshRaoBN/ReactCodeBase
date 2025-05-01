import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Listcbx from './components/Listcbx'
import Greetings from './components/Greetings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Greetings />
        <About />
        <Listcbx />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
