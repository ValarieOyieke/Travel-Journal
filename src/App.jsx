import Navbar  from './components/Navbar'
import Info from './components/Info'
import data from "./data"



function App() {
  const infos = data.map(item => {
    return (
        <Info
            {...item} 
        />
    )
}) 
  return(
      <div className="container">
          <Navbar/>
          {infos}
      </div>
)
       
}

export default App

