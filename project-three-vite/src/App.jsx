import './App.css'
import Datafetchcomp from './components/Datafetchcomp'
import Firstcomp from './components/Firstcomp'
import Fourthcomp from './components/Fourthcomp'
import Loadingcomp from './components/Loadingcomp'
import Secondcomp from './components/Secondcomp'
import Thirdcomp from './components/Thirdcomp'

function App() {
  return (
    <>
      <div>
        <h1>Proj 3</h1>
        <Firstcomp />
        <Secondcomp name="Rajesh"/>
        <Thirdcomp />
        <Fourthcomp />
        <Loadingcomp />
        <Datafetchcomp />
      </div>
    </>
  )
}

export default App
