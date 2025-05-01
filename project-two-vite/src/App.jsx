import './App.css'
import Catlist from './components/Catlist'
import Jokes from './components/Jokes'
import Products from './components/Products'

function App() {
  return (
    <>
      <div>
        <h1>Welcome to project 2</h1>
        <Catlist />
        <Jokes />
        <Products />
      </div>
    </>
  )
}

export default App
