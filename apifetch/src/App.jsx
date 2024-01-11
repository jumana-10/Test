import { useState } from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Apifetch from './Components/Apifetch'
import "/React/apifetch/src/Apifetch.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Apifetch />
    </>
  )
}

export default App
